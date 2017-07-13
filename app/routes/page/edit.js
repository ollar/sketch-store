import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'entity-manage',
  controllerName: 'page/edit',

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },

  setupController(controller, model) {
    controller.set('type', 'page');
    this._super(controller, model);
  },
});
