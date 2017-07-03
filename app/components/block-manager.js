import Ember from 'ember';

export default Ember.Component.extend({
  type: Ember.computed.alias('block.type'),
  fileStorage: Ember.inject.service(),

  images: Ember.computed(function() {
    return [];
  }),

  actions: {
    handleTypeChange(newType) {
      return this.set('type', newType);
    },

    uploadImage(images, file) {
      this.uploadImage(images, file);

      if (this.get('images.length')) {
        this.get('images').forEach((image) => {
          if (!file) return;
          this.get('fileStorage').upload(`block/${this.get('block.id')}/${file.name}`, file)
            .then((imageData) => {
              this.set('block.content', imageData.downloadURLs[0]);
            });
        });
      }
    },

    removeImage() {

    },

    removeBlock() {
      return this.get('removeBlock')();
    },
  }
});
