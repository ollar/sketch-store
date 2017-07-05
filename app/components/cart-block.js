import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cart-wrapper'],
  classNameBindings: ['cartIsOpen'],

  cart: Ember.inject.service(),
  cartIsOpen: false,

  products: Ember.computed(function() {
    return this.get('cart').getItems();
  }),

  productsNumber: Ember.computed('products.[]', function() {
    return this.get('products').length;
  }),

  actions: {
    toggleCart() {
      this.toggleProperty('cartIsOpen');
    }
  }
});
