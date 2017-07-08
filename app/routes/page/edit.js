import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },

  renderTemplate(controller, model) {
    let _controller = this.controllerFor('entity-manage');

    _controller.set('type', 'page');

    this.render('entity-manage', {
      controller: _controller,
      model: model,
    });
  },
});
