import Ember from 'ember';
import tinymce from 'tinymce';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    tinymce.init({
      selector: '.mce-editor',
    });
  },
  actions: {
    removeBlock() {
      return this.get('removeBlock')();
    }
  }
});
