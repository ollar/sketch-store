import Ember from 'ember';
import BlockManagerMixin from '../mixins/block-manage';
import ImageManageMixin from '../mixins/image-manage';

export default Ember.Controller.extend(BlockManagerMixin, ImageManageMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),

  actions: {
    handleSubmit() {
      const product = this.get('model');
      product.set('dateCreated', new Date());
      product.set('modified', new Date());

      this.get('blocks').forEach((block) => {
        block.save();
      });

      product.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.product_create_success'),
        });
        this.transitionToRoute('product', product);
      });
    }
  },
});
