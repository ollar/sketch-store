import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    tinymce.init({
      selector: '.mce-editor',
      inline: true
    });
  },
  actions: {
    removeBlock() {
      return this.get('removeBlock')();
    }
  }
});
