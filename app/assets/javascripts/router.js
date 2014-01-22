Overlaygames.Router.map(function() {
  this.resource("games", function() {
    this.resource("game", { path: ":game_id" });
  });
  this.resource("overlays", function() {
    this.resource("overlay", { path: ":overlay_id" });
  });
});