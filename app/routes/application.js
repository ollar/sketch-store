import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Route.extend({
  notify: service(),
  notificationTypes: computed(() => ['info', 'success', 'warning', 'alert', 'error']),

  beforeModel() {
    return this.get('session').fetch()
      .catch(() => false);
  },

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
