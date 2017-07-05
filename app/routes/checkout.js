import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      products: this.get('cart').getItems(),
    });
  }
});
