// for more details see: http://emberjs.com/guides/models/defining-models/

Overlaidgames.Background = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  src: DS.attr('string'),
  uses: DS.attr('number'),
  enabled: DS.attr('boolean')
});
