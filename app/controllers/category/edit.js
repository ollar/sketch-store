import Ember from 'ember';
import BlockManagerMixin from '../../mixins/block-manage';

export default Ember.Controller.extend(BlockManagerMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),
  fileStorage: Ember.inject.service(),

  actions: {
    uploadImage(file) {
      this.get('fileStorage').upload(file, 'category/' + this.get('model').id + '/images')
        .then((imageData) => {
          var imageModel = this.get('store').createRecord('image', {
            name: imageData.name,
            contentType: imageData.contentType,
            size: imageData.size,
            url: imageData.downloadURLs[0],
          });

          this.get('model.images').pushObject(imageModel);

          imageModel.save();
          this.get('model').save();
        });
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
