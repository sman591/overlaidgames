Overlaygames.Router.map(function() {
  this.resource("games", function() {
    this.resource("game", { path: ":game_id" });
  });
});