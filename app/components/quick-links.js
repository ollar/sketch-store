import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['quick-links'],

  session: Ember.inject.service(),

  isAuthenticated: Ember.computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),

  actions: {
    remove() {
      this.get('remove')();
    }
  }
});
