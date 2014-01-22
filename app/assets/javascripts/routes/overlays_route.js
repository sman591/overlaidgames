Overlaygames.OverlaysRoute = Ember.Route.extend({
  model: function() {
    return Overlaygames.Overlay.find();
  }
});