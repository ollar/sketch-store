import Ember from 'ember';

const ImageManageMixin = function(parentType) {
  const _ImageManageMixin = Ember.Mixin.create({
    fileStorage: Ember.inject.service(),

    actions: {
      uploadImage(file) {
        this.get('fileStorage').upload(this.get('model'), file, parentType)
          .then(() => {
            console.log('aa image');
          });
      },

      removeImage(imageModel) {
        return this.get('fileStorage').remove(this.get('model'), imageModel)
          .then(() => console.log('ok'));
      },
    }
  });

  _ImageManageMixin[Ember.NAME_KEY] = 'ImageManageMixin';

  return _ImageManageMixin;
}

export default ImageManageMixin;