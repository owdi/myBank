
Meteor.users.allow({
    update: function (userId, doc, fields, modifier) {
      return true;
    }
});

Template.account.events({
    
        "submit form": function(event, template) {
    
            event.preventDefault();
    
            var profileInfo = {
                'firstname': $("input[name='firstname']").val(),
                'lastname':  $("input[name='lastname']").val(),
                'birthdate': $("#birthdate").val(),
                'gender': $('#gender').val()
            };

            var userOptions = {
                user: $("input[name='username']").val(),
                profile: profileInfo
            };
    
            Meteor.users.update(Meteor.userId(), 
                {
                    $set: userOptions}, function(error) {
                    console.log(Meteor.userId());
                        if (error) {
                            Bert.alert({
                                message: 'La mise à jour a échoué',
                                type: 'danger'
                            });
                        }else{
                            Bert.alert({
                                message: 'Votre compte a bien été mis à jour',
                                type: 'info'
                            });
                        }
                });
        }
    });

    