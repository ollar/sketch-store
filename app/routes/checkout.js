import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
  cart: service(),

  model() {
    return hash({
      order: this.get('store').createRecord('order'),
    });
  }
});
