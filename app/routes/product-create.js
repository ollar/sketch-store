import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      return this.transitionTo('index');
    }
  },

  model() {
    return this.get('store').createRecord('product');
  },

  renderTemplate(controller, model) {
    let _controller = this.controllerFor('product/edit');

    _controller.set('type', 'product');

    this.render('entity-manage', {
      controller: _controller,
      model: model,
    });
  },
});
