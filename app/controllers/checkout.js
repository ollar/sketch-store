import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  phone: '',

  actions: {
    handleSubmit() {
      const model = this.get('model');
      const order = model.order;

      model.products.forEach((_model) => {
        order.get('products').pushObject(_model);
      })

      order.setProperties({
        email: this.get('email'),
        phone: this.get('phone'),
      });

      order.save();
    }
  }
});
