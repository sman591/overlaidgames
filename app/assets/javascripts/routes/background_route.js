Overlaidgames.BackgroundRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    Overlaidgames.set('current_background', model);
  }
});