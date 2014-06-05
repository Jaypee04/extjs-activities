Ext.application({
    name   : 'MyRegistration',

    launch : function() 
	{
	
	Ext.create('Ext.container.Viewport', {
			id: 'viewport',
		    layout: 'border',
			
			items: [
			
			
				{
					xtype:'grid',
					region:'center',
					
					title: 'User list',
					columns: [
						{ header: 'Username' },
						{ header: 'Name' },
						{ header: 'Password' }
					],
					height: 600,
					width: 900,
					
				},
			
	
				{
					xtype:'panel',
					split: true,
					width    : 320,
					bodyPadding  : 10,
					region: 'east',
			
					title : 'Registration', 
			
					items: [
						{
							xtype: 'textfield',
							name: 'uname',
							fieldLabel: 'Username',
							anchor: '100%'
						},
			
						{
							xtype: 'textfield',
							name: 'pword',
							inputType:'password',
							fieldLabel: 'Password',
							anchor: '100%'
						},
						
						{
							xtype: 'textfield',
							name: 'email',
							fieldLabel: 'Email',
							anchor: '100%'
						},
						
						{
							xtype: 'textfield',
							name: 'salut',
							fieldLabel: 'Salutation',
							anchor: '100%'
						}
						
						
							  
						
					],
					
					buttons:[
						{
							xtype: 'button',
							name: 'btnNew',
							text: 'New',
				
							/* handler:function(){
				
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
						                            
								});	 
								      
							} */
						},
						{
							xtype: 'button',
							name: 'btnSave',
							text: 'Submit',
				
							/* handler:function(){
				
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
						                            
									});	 
								      
								}	 */
							             
						},
						{
								xtype: 'button',
								name: 'btnDelete',
								text: 'Delete',
				
								/* handler:function(){
				
									Ext.Ajax.request({
										url: '/user/add',
										method: 'POST',          
										params: {
											uname : myRegistration.down('textfield[name=uname]').getValue(),
											pword : myRegistration.down('textfield[name=pword]').getValue()
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
						                            
									});	 
								      
								}       */       
							
						}
							
							
							
					]		
				
					
			
			
				}
			]
			
		});
	}		
		
});