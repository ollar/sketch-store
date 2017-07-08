import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },
  model() {
    return this.get('store').createRecord('category');
  },

  renderTemplate(controller, model) {
    let _controller = this.controllerFor('entity-manage');

    _controller.set('type', 'category');

    this.render('entity-manage', {
      controller: _controller,
      model: model,
    });
  },
});
