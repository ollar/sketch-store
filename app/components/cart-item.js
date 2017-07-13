import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    removeProduct(product) {
      this.removeProduct(product);
    }
  }
});
