import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return Ember.RSVP.hash({
  //     product: this.get('store').createRecord('product'),
  //     categories: this.get('store').findAll('category'),
  //   });
  // },

  model() {
    console.log(this)
    return this.get('store').createRecord('product');
  },

  renderTemplate(controller, model) {
    let _controller = this.controllerFor('entity-manage');

    _controller.set('type', 'product');

    this.render('entity-manage', {
      controller: _controller,
      model: model,
    });
  },
});
