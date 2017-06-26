import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate(controller, model) {
    let _controller = this.controllerFor('product/edit');

    _controller.set('type', 'product');

    this.render('entity-manage', {
      controller: _controller,
      model: model,
    });
  },
});
