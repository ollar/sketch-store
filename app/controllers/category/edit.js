import Ember from 'ember';
import BlockManagerMixin from '../../mixins/block-manage';

export default Ember.Controller.extend(BlockManagerMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),
  fileStorage: Ember.inject.service(),

  actions: {
    uploadImage(file) {
      this.get('fileStorage').upload(this.get('model'), file, 'category')
        .then(() => {
          console.log('aa image');
        });
    },

    removeImage(imageModel) {
      return this.get('fileStorage').remove(this.get('model'), imageModel)
        .then(() => console.log('ok'));
    },

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
