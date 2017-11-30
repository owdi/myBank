Template.login.events({

    "submit form": function(event, template) {

		event.preventDefault();

		var user        = $("input[name='username']").val(),
		    password    = $("input[name='password']").val();

		Meteor.loginWithPassword(user, password, function(error) {
            
            if (error) {
                Bert.alert({
                    message: 'Le mot de passe ou l\'email ne sont pas valides',
                    type: 'danger'
                });
            }else{
                Bert.alert({
                    message: 'Vous êtes connecté',
                    type: 'info'
                });

                FlowRouter.go('dashboard'); 
            }
		});
	}
});