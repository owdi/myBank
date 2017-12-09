var layout      = 'layout',
    notFound    = 'notFound',
    register    = 'register',
    login       = 'login',
    dashboard   = 'dashboard',
    account     = 'account';

FlowRouter.route('/', {
    name: 'homePage',
    action: function() {
        if (!Meteor.userId()) {
            BlazeLayout.render(layout, {container: login});
        }else{
            FlowRouter.go('dashboard');
        }
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
        if (!Meteor.userId()) {
            BlazeLayout.render(layout, {container: register});
        }else{
            FlowRouter.go('dashboard');
        }
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        if (!Meteor.userId()) {
            BlazeLayout.render(layout, {container: login});
        }else{
            FlowRouter.go('dashboard');
        }
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

FlowRouter.route('/account', {
    name: 'account',
    action: function() {
        if (!Meteor.userId()) {
            FlowRouter.go('homePage');
        }else{
            BlazeLayout.render(layout, {container: account});
        }      
    }
});