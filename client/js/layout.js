Template.nav.events({

    'click .logout': function (event) {

        event.preventDefault();
            
        Meteor.logout(function(error){

            if (!error) {
                Bert.alert({
                    message: 'Vous avez bien été déconnecté',
                    type: 'info'
                });

                FlowRouter.go('login');
            }
        });
    }
});