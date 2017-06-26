import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'entity-manage',
  controllerName: 'product/edit',

  setupController(controller, model) {
    controller.set('type', 'product');
    this._super(controller, model);
  },
});
