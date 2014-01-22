// for more details see: http://emberjs.com/guides/models/defining-models/

Overlaidgames.Game = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  file: DS.attr('string'),
  customEmbed: DS.attr('boolean'),
  embedCode: DS.attr('string'),
  views: DS.attr('number'),
  enabled: DS.attr('boolean')
});
