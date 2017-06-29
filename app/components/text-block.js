import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
  },
  actions: {
    removeBlock() {
      return this.get('removeBlock')();
    }
  }
});
