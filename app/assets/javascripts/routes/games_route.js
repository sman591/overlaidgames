Overlaidgames.GamesRoute = Ember.Route.extend({
  model: function() {
    return Overlaidgames.Game.find();
  }
});