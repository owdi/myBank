import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.users.allow({
      update: function (userId, doc, fields, modifier) {
          console.log('UPDATE USER');
        return true;
      }
  });

});
