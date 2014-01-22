Overlaidgames.Router.map(function() {
  this.resource("games", function() {
    this.resource("game", { path: ":game_id" });
  });
  this.resource("backgrounds", function() {
    this.resource("background", { path: ":overlay_id" });
  });
  this.resource("about");
  this.resource("request");
});