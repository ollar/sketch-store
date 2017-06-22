import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'product/edit',
  model() {
    return this.get('store').createRecord('product');
  },
});
