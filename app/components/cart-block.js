import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cart-wrapper'],
  classNameBindings: ['cartIsOpen'],

  cart: Ember.inject.service(),
  cartIsOpen: false,

  products: Ember.computed('cart.items.[]', function() {
    return this.get('cart').getItems();
  }),

  productsNumber: Ember.computed('products', function() {
    return this.get('products').length;
  }),

  total: Ember.computed('products.@each.price', function() {
    return this.get('products').reduce((sum, product) => {
      return sum + product.get('price');
    }, 0);
  }),

  actions: {
    toggleCart() {
      this.toggleProperty('cartIsOpen');
    },

    removeProduct(product) {
      this.get('cart').remove(product);
    }
  }
});
