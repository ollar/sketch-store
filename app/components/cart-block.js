import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  classNames: ['cart-wrapper'],
  classNameBindings: ['cartIsOpen'],

  cart: Ember.inject.service(),
  cartIsOpen: false,

  products: Ember.computed('cart.items.[]', function() {
    return DS.PromiseArray.create({
      promise: this.get('cart').getItems(),
    });
  }),

  productsNumber: Ember.computed('cart.items.[]', 'products.isFulfilled', function() {
    return this.get('cart.items.length');
  }),

  total: Ember.computed('products.@each.price', function() {
    return this.get('products').reduce((sum, product) => {
      return sum + product.get('qty') * product.get('price');
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
