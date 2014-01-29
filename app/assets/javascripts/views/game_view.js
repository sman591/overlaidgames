// adapted from ember-swfobject.js, https://gist.github.com/georgemarshall/4049351

Overlaidgames.GameView = Ember.View.extend({
  templateName: 'game',
  attObj: {},
  parObj: {},
  expressInstall: 'expressInstall.swf',
  version: '9.0.0',
  template: Ember.Handlebars.compile('<p>This device doesn\'t appear to have flash support.</p>'),

  _rerender: function() {
    this.rerender();
  }.observes('controller.model', 'parObj', 'version'),

  didInsertElement: function() {
    if (swfobject.hasFlashPlayerVersion(this.get('version'))) {
      swfobject.createSWF(this.get('controller.model').attObj(), this.get('parObj'), this.get('elementId'));
    } else if (this.get('expressInstall')) {
      swfobject.showExpressInstall(this.get('attObj'), this.get('parObj'), this.get('elementId'));
    }
  },
  willDestroyElement: function() {
    swfobject.removeSWF(this.get('elementId'));
  }
});
