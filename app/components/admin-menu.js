import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['admin-menu', 'pure-menu', 'pure-menu-horizontal'],

  session: Ember.inject.service(),

  actions: {
    logout() {
      this.get('session').close();
    }
  }
});
