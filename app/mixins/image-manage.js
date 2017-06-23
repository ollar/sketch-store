import Ember from 'ember';

const ImageManageMixin = Ember.Mixin.create({
  fileStorage: Ember.inject.service(),

  actions: {
    uploadImage(file) {
      const image = this.get('store').createRecord('image', {
        url: URL.createObjectURL(file),
        file: file,
      });

      this.get('model.images').pushObject(image);
    },

    removeImage(imageModel) {
      this.get('model.images').removeObject(imageModel);
    },
  }
});

ImageManageMixin[Ember.NAME_KEY] = 'ImageManageMixin';

export default ImageManageMixin;
