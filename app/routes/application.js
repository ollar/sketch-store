import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),
  notificationTypes: ['info', 'success', 'warning', 'alert', 'error'],

  actions: {
    error(e) {
      alert(e);
    },
    notify({type, text}) {
      if (this.get('notificationTypes').indexOf(type) === -1) {
        return this.send('error', text);
      }
      return this.get('notify')[type](text);
    }
  },
});
