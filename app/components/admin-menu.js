import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'nav',
  classNames: ['admin-menu', 'pure-menu', 'pure-menu-horizontal'],

  session: service(),

  actions: {
    logout() {
      this.get('session').close();
    }
  }
});
