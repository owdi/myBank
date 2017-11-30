
Meteor.users.allow({
    update: function (userId, doc, fields, modifier) {
      return true;
    }
});

Template.account.events({
    
        "submit form": function(event, template) {
    
            event.preventDefault();
    
            // var user        = $("input[name='username']").val(),
            //     email       = $("input[name='password']").val();
            var email = 'emails.0.address';
            var userOptions = {
                //user: $("input[name='username']").val(),
                'emails.0.address': $("input[name='email']").val()
            };
    
            Meteor.users.update(Meteor.userId(), 
                {
                    $set: userOptions}, function(error) {
                    console.log(Meteor.userId());
                        if (error) {
                            console.log(error.reason);
                        }
                });
        }
    });

    