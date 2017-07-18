import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  classNames: ['cart-wrapper'],
  classNameBindings: ['cartIsOpen'],

  router: Ember.inject.service('-routing'),

  cart: Ember.inject.service(),
  cartIsOpen: false,

  init() {
    this._super();

    const router = this.get('router');
    router.addObserver('currentRouteName', this, 'closeCart');
  },

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

  closeCart() {
    Ember.run(() =>
      Ember.run.schedule('afterRender', () =>
        this.set('cartIsOpen', false)
      )
    );
  },

  actions: {
    toggleCart() {
      this.toggleProperty('cartIsOpen');
    },

    removeProduct(product) {
      this.get('cart').remove(product);
    }
  }
});
