import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',

  actions: {
    removeProduct(product) {
      this.removeProduct(product);
    }
  }
});
