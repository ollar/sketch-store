import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'category/edit',
  model() {
    return this.get('store').createRecord('category');
  }
});
