import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'entity-manage',
  controllerName: 'entity-manage',

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },
  setupController(controller, model) {
    controller.set('type', 'category');
    this._super(controller, model);
  },
});
