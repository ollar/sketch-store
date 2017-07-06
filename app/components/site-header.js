import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  session: Ember.inject.service(),

  isAuthenticated: Ember.computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
});
