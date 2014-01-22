DS.RESTAdapter.reopen({
  namespace: "api/v1"
});

Overlaidgames.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});