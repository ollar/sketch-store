import Ember from 'ember';
import destroyModel from '../../utils/destroy-model';

export default Ember.Controller.extend({
  actions: {
    removeCategory() {
      if (this.get('model.products.content')) {
        this.get('model.products').toArray().forEach((product) => {
          product.set('category', null);
          product.save();
        });
      }

      destroyModel(this.get('model'), ['images', 'blocks'])
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.category_removed_success'),
          });
          this.transitionToRoute('categories');
        });
    }
  }
});
