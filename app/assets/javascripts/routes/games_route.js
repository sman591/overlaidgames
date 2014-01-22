Overlaygames.GamesRoute = Ember.Route.extend({
  model: function() {
    return Overlaygames.Game.find();
  }
});