import Route from '@ember/routing/route';

export default Route.extend({
  cart: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      order: this.get('store').createRecord('order'),
    });
  }
});
