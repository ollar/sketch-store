import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'page/edit',
  model() {
    return this.get('store').createRecord('page');
  }
});
