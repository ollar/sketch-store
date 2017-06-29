import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    tinymce.init({
      selector: this.$('.mce-editor'),
    });
  },
  actions: {
    removeBlock() {
      return this.get('removeBlock')();
    }
  }
});
