// for more details see: http://emberjs.com/guides/models/defining-models/

Overlaygames.Overlay = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  file: DS.attr('string'),
  uses: DS.attr('number'),
  enabled: DS.attr('boolean')
});
