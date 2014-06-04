Ext.define('SampleClass', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.RegKo',
	frame:true,
    width    : 320,
    bodyPadding  : 10,
	padding: 10,
    
	initComponent : function() {
		// initialize UI
        this.items = this.panelItems();
		this.buttons = this.panelButtons();
		
		// must always be called
        this.callParent(arguments);
    },
	panelItems: function(){
	
        return [
			{
	            xtype: 'textfield',
				itemId: 'fname',
				fieldLabel: 'First Name',
				anchor: '100%'
	        }, 
			{
	            xtype: 'textfield',
				itemId: 'lname',
				fieldLabel: 'Last Name',
				anchor: '100%'
	        }
		];
    },
	panelButtons: function(){	
		return [
			{
	            text: 'Register',
	            handler: function() {
					var me = this.up('RegKo');
					var Fname = me.down('textfield[itemId=fname]').getValue();
					var Lname = me.down('textfield[itemId=lname]').getValue();
					Ext.Ajax.request({
						url: '/user/add',
						method: 'POST',          
						params: {
							fname: Fname,
							lname: Lname
						},
						success: function(response){
							var Name = Ext.decode(response.responseText);
							Ext.Msg.alert('Hello', Name.name);
							console.log(Name.name);
						},
						failure: function(response){
							Ext.Msg.alert('Error', response.status);
							console.log(response.status);
						},
						
						callback: function(let){
							me.fireEvent('posted', let);
						}
					
					});
					
					
	            }
	   	 	}
		];
	}
});
	
	
	
Ext.application({
	name   : 'MyRegistration',
    launch : function() {
	Ext.require('SampleClass');
	Ext.create('Ext.container.Viewport', {
			id: 'viewport',
		    layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			items: [{
				xtype: 'RegKo',
				title: 'Members Registration',
				listeners:{
						posted: function(let){
							Ext.Msg.alert('Fire', 'Fire in the hole!');
						}
				}
			},
			{
				xtype: 'RegKo',
				title: 'LogIn',
			}
			]
	
	})
	}
	
	
});


	