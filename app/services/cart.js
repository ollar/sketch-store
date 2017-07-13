import Ember from 'ember';
import _ from 'lodash/collection';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  items: [],

  itemsSorted: Ember.computed('items.[]', function() {
    return _.countBy(this.get('items'));
  }),

  _getSessionItems() {
    let items = sessionStorage.getItem('cartItems');
    items = items ? JSON.parse(items) : [];

    return items;
  },

  init() {
    this._super(...arguments);
    this.set('items', this._getSessionItems());
  },

  getItems() {
    return Ember.RSVP.all(_.map(this.get('itemsSorted'), (qty, productId) => {
      return this.get('store').findRecord('product', productId).then((product) => {
        product.set('qty', qty);
        return product;
      });
    }));
  },

  add(product) {
    const items = this.get('items');
    items.pushObject(product.id);
    sessionStorage.setItem('cartItems', JSON.stringify(items));
  },

  remove(product) {
    const items = this.get('items');
    items.removeObject(product.get('id'));
    sessionStorage.setItem('cartItems', JSON.stringify(items));
  }
});
