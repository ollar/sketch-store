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
      const url = imageModel.get('url');

      if (url.match(url.match('blob:'))) {
        return this.get('model.images').removeObject(imageModel);
      } else {
        return this.get('fileStorage').remove(imageModel)
          .then(() => {
            this.get('model.images').removeObject(imageModel);
            imageModel.destroyRecord();
            this.get('model').save();
            return true;
          });
      }


      return;
    },
  }
});

ImageManageMixin[Ember.NAME_KEY] = 'ImageManageMixin';

export default ImageManageMixin;
