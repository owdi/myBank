var layout      = 'layout',
    notFound    = 'notFound',
    register    = 'register',
    login       = 'login',
    dashboard   = 'dashboard';

FlowRouter.route('/', {
    name: 'homePage',
    action: function() {
        BlazeLayout.render(layout);
    }
});

FlowRouter.notFound = {
    name: 'notFound',
    action: function() {
        BlazeLayout.render(layout, {container: notFound});
    }
};

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render(layout, {container: register});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render(layout, {container: login});
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        if (!Meteor.userId()) {
            FlowRouter.go('homePage');
        }else{
            BlazeLayout.render(layout, {container: dashboard});
        }
        
    }
});