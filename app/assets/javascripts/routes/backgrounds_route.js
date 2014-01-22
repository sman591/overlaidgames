Overlaidgames.BackgroundsRoute = Ember.Route.extend({
  model: function() {
    return Overlaidgames.Background.find();
  }
});