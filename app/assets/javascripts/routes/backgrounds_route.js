Overlaygames.BackgroundsRoute = Ember.Route.extend({
  model: function() {
    return Overlaygames.Background.find();
  }
});