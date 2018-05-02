import Component from '@ember/component';
import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { run, schedule } from '@ember/runloop';

export default Component.extend({
  classNames: ['cart-wrapper'],
  classNameBindings: ['cartIsOpen'],

  router: service('-routing'),

  cart: service(),
  cartIsOpen: false,

  init() {
    this._super();

    const router = this.get('router');
    router.addObserver('currentRouteName', this, 'closeCart');
  },

  products: computed('cart.items.[]', function() {
    return DS.PromiseArray.create({
      promise: this.get('cart').getItems(),
    });
  }),

  productsNumber: computed('cart.items.[]', 'products.isFulfilled', function() {
    return this.get('cart.items.length');
  }),

  total: computed('products.@each.price', function() {
    return this.get('products').reduce((sum, product) => {
      return sum + product.get('qty') * product.get('price');
    }, 0);
  }),

  closeCart() {
    run(() =>
      schedule('afterRender', () =>
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
