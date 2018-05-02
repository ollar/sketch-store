import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'header',
  session: service(),

  isAuthenticated: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
});
