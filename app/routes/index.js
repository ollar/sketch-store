import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.get('store').findAll('category'),
    });
  },
});
