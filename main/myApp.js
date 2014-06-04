Ext.Loader.setConfig({ disableCaching:false });

(function() {
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            myPath:'/definition'
        } 
    });
	Ext.require('myPath.myDefinition');
	Ext.application({
		name   : 'MyRegistration',
		launch : function() {
							
			Ext.create('Ext.container.Viewport', {
			id: 'viewport',
		    layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			
			items: [
				
				{
					xtype:'RegKo',
					title: 'Members Registration',
					listeners:{
						posted: function(let){
							Ext.Msg.alert('Fire', 'Fire in the hole!');
						}
					}
				},
				
				{
					xtype:'RegKo',
					title: 'Members LogIn'
					
				}
				
				
			]
			
		});
		}
		
	});

})();