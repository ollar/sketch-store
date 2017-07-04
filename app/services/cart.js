import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  _getSessionItems() {
    let items = sessionStorage.getItem('cartItems');
    items = items ? JSON.parse(items) : [];

    return items;
  },

  init() {
    this._super(...arguments);
    const items = this._getSessionItems();
    this.set('items', items);
  },

  getItems() {
    return this.get('items');
  },

  add(product) {
    const items = this._getSessionItems();

    items.push(product);
    sessionStorage.setItem('cartItems', JSON.stringify(items));
    this.get('items').pushObject(product);
  },

  remove(product) {
    this.get('items').removeObject(product);
  }
});
