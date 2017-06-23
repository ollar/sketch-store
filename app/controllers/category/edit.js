import Ember from 'ember';
import BlockManagerMixin from '../../mixins/block-manage';
import ImageManageMixin from '../../mixins/image-manage';

export default Ember.Controller.extend(BlockManagerMixin, ImageManageMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),
  fileStorage: Ember.inject.service(),

  actions: {
    removeImage(imageModel) {
      return this.get('fileStorage').remove(imageModel)
        .then(() => {
          this.get('model.images').removeObject(imageModel);
          imageModel.destroyRecord();
          this.get('model').save();
          return true;
        });
    },

    handleSubmit() {
      const category = this.get('model');
      this.get('blocks').forEach((block) => {
        block.save();
      });

      this.get('images').forEach((image) => {
        const file = image.get('file');
        const model = this.get('model');
        if (!file) return;
        this.get('fileStorage').upload(`category/${model.id}/${file.name}`, file)
          .then((imageData) => {
            image.setProperties({
              name: imageData.name,
              fullPath: imageData.fullPath,
              url: imageData.downloadURLs[0],
              category: model,
            });

            image.save();
          });
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
