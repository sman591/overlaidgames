Overlaidgames.Router.map(function() {
  this.resource("games");
  this.resource("game", { path: "/game/:game_id" });
  this.resource("backgrounds", function() {
    this.resource("background", { path: ":background_id" });
  });
  this.resource("about");
  this.resource("request");
});