import Ember from 'ember';
import BlockManagerMixin from '../../mixins/block-manage';
import ImageManageMixin from '../../mixins/image-manage';

export default Ember.Controller.extend(BlockManagerMixin, ImageManageMixin('category'), {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),

  actions: {
    handleSubmit() {
      const category = this.get('model');
      this.get('blocks').forEach((block) => {
        block.save();
      });

      category.set('modified', new Date());
      category.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.category_edit_success'),
        });
        this.transitionToRoute('category', category);
      });
    }
  }
});
