import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

const ImageManageMixin = Mixin.create({
  fileStorage: service(),

  actions: {
    uploadImage(files) {
      files.forEach((file) => {
        const image = this.get('store').createRecord('image', {
          url: URL.createObjectURL(file),
          file: file,
        });

        this.get('images').pushObject(image);
      });
    },

    removeImage(imageModel) {
      const url = imageModel.get('url');

      if (url.match(url.match('blob:'))) {
        return this.get('images').removeObject(imageModel);
      } else {
        return this.get('fileStorage').remove(imageModel)
          .then(() => {
            this.get('images').removeObject(imageModel);
            imageModel.destroyRecord();
            this.get('model').save();
            return true;
          });
      }
    },
  }
});

// ImageManageMixin[Ember.NAME_KEY] = 'ImageManageMixin';

export default ImageManageMixin;
