Ext.application({
    name   : 'MyRegistration',

    launch : function() {

       var myRegistration = Ext.create('Ext.Panel', {
			frame:true,
            renderTo : Ext.getBody(),
            width    : 320,
            bodyPadding  : 10,
            
            
			
			title : 'Registration', 
			
			items: [{
				xtype: 'textfield',
				name: 'fname',
				fieldLabel: 'First Name',
				anchor: '100%'
			},
			
			{
				xtype: 'textfield',
				name: 'lname',
				fieldLabel: 'Last Name',
				anchor: '100%'
			},
			
			{
				xtype: 'button',
				name: 'submit',
				text: 'Submit',
				
				handler:function(){
				
				
				
				
					Ext.Ajax.request({
						url: '/user/add',
						method: 'POST',          
						params: {
							fname : myRegistration.down('textfield[name=fname]').getValue(),
							lname : myRegistration.down('textfield[name=lname]').getValue()
						},
						success: function(response){
							var Name = Ext.decode(response.responseText);
							Ext.Msg.alert('Hello', Name.name);
							console.log(Name.name);
						},
						failure: function(response){
							Ext.Msg.alert('Error', response.status);
							console.log(response.status);
						}
						//success: alert(myRegistration.down('textfield[name=fname]').getValue() + ' ' + myRegistration.down('textfield[name=lname]').getValue())                             
					});	 
				
				
        
				}               
				
			}]
			
			
        });
		
		
		

    }
	
	
});