import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  email: '',
  phone: '',

  cart: Ember.inject.service(),

  products: Ember.computed('cart.items.[]', function() {
    return DS.PromiseArray.create({
      promise: this.get('cart').getItems(),
    });
  }),

  actions: {
    removeProduct(product) {
      this.get('cart').remove(product);
    },

    handleSubmit() {
      const model = this.get('model');
      const order = model.order;

      this.get('products').forEach((_model) => {
        const orderProduct = this.get('store').createRecord('order-product');

        orderProduct.setProperties({
          product: _model,
          qty: _model.get('qty'),
        });

        order.get('products').pushObject(orderProduct.toJSON());
      });

      order.setProperties({
        email: this.get('email'),
        phone: this.get('phone'),
      });

      order.save()
        .then(() => {
          this.get('products').forEach((_model) => {
            this.get('cart').remove(_model);
          });

          this.send('notify', {
            type: 'success',
            text: this.get('i18n').t('messages.thank_you'),
          });

          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.we_will_contact_you'),
          });

          this.transitionToRoute('index');
        });
    }
  }
});
