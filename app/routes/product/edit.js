import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'entity-manage',
  controllerName: 'product/edit',

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },

  setupController(controller, model) {
    controller.set('type', 'product');
    this._super(controller, model);
  },
});
