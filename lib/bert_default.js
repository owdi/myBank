if (Meteor.isClient) {
    Bert.defaults = {
        animated: true,
        animationSpeed: 300,
        autoHide: false,
        dismissable: true,
        hideDelay: 3500,
        style: "growl-top-right",
        type: "default"
    }
}