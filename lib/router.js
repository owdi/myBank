FlowRouter.route('/', {
    name: 'homePage',
    action: function() {
        BlazeLayout.render('layout');
    }
});