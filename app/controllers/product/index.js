import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import destroyModel from '../../utils/destroy-model';

export default Controller.extend({
  cart: service(),

  isImageModalVisible: false,
  modalImage: null,

  actions: {
    removeProduct() {
      if (this.get('model.category.content')) {
        let category = this.get('store').peekRecord('category', this.get('model.category.id'));
        category.get('products').removeObject(this.get('model'));
        category.save();
      }

      destroyModel(this.get('model'), ['blocks', 'images'])
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.product_removed_success'),
          });
          this.transitionToRoute('products');
        });
    },

    addToCart() {
      this.get('cart').add(this.get('model'));
      this.send('notify', {
        type: 'info',
        text: this.get('i18n').t('messages.product_added_to_cart'),
      })
    },

    showImage(image) {
      this.toggleProperty('isImageModalVisible');
      this.set('modalImage', image);
    },
  }
});
