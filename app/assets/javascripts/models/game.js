// for more details see: http://emberjs.com/guides/models/defining-models/

Overlaidgames.Game = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  src: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  customEmbed: DS.attr('boolean'),
  embedCode: DS.attr('string'),
  views: DS.attr('number'),
  enabled: DS.attr('boolean'),
  src_full: function() {
    var website_regex = /^(http(s?):\/\/)/;
    if (website_regex.test(this.get('src')))
      return this.get('src');
    return "http://belmontridgemiddleschool.com/files/" + this.get('src');
  }.property('src'),
  attObj: function() {
    return {
      data: this.get('src_full'),
      width: this.get('width'),
      height: this.get('height')
    };
  }
});
