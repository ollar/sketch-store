import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  items: [],

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
    return Ember.RSVP.all(this.get('items').map((productId) => {
      return this.get('store').findRecord('product', productId).then((product) => {
        product.get('images');
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
