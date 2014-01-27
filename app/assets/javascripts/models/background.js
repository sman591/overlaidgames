// for more details see: http://emberjs.com/guides/models/defining-models/

Overlaidgames.Background = DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  src: DS.attr('string'),
  uses: DS.attr('number'),
  enabled: DS.attr('boolean'),
  isWebsite: function() {
    var website_regex = /^(http(s?):\/\/)/;
    return website_regex.test(this.get('src'));
  }.property('src'),
  divStyle: function() {
    var website_regex = /^(http(s?):\/\/)/;
    if (website_regex.test(this.get('src')))
      return '';
    return "background-image: url('http://belmontridgemiddleschool.com/bg/" + this.get('src') + "')";
  }.property('src')
});
