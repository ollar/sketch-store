import Ember from 'ember';
import destroyModel from '../../utils/destroy-model';

export default Ember.Controller.extend({
  fileStorage: Ember.inject.service(),

  actions: {
    removeProduct() {
      if (this.get('model.images.length')) {
        this.get('model.images').forEach((imageModel) => {
          this.get('fileStorage').remove(imageModel);
        });
      }

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
    }
  }
});
