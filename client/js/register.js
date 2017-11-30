Template.register.events({

    "submit form": function(event, template) {

        event.preventDefault();

        var username    = $('input[name="username"]').val(),
            email       = $('input[name="email"]').val(),
            password    = $('input[name="password"]').val();

        var user = {
            username: username,
            email: email,
            password: password
        };

        Accounts.createUser(user, function(error) {

            if (error) {
                Bert.alert({
                    message: err.reason,
                    type: 'danger'
                });
            } else {
                Bert.alert({
                    message: 'Votre profil a bien été créé.',
                    type: 'info'
                });

                FlowRouter.go('dashboard'); 
            }
        });
    }
});
