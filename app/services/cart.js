import { computed } from '@ember/object';
import Service, { inject as service } from '@ember/service';
import _ from 'npm:lodash/collection';
import { all } from 'rsvp';

export default Service.extend({
  store: service(),
  items: computed(() => []),

  itemsSorted: computed('items.[]', function() {
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
    return all(_.map(this.get('itemsSorted'), (qty, productId) => {
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
