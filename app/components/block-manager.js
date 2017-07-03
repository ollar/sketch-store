import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['block-manager'],
  classNameBindings: ['type'],

  type: Ember.computed.alias('block.type'),
  fileStorage: Ember.inject.service(),

  images: Ember.computed(function() {
    if (this.get('block.type') === 'image' && this.get('block.content.url')) {
      return [
        {
          url: this.get('block.content.url'),
          fullPath: this.get('block.content.fullPath'),
        },
      ];
    }
    return [];
  }),

  actions: {
    handleTypeChange(newType) {
      return this.set('type', newType);
    },

    uploadImage(files) {
      let file;

      if (files.length >= 1) {
        file = files[0];
      } else {
        return;
      }

      const image = {
        url: URL.createObjectURL(file),
      };

      this.set('block.file', file);
      this.set('block.content', '');
      this.get('images').pushObject(image);
    },

    removeImage(image) {
      if (this.get('block.content.fullPath')) {
        this.get('fileStorage').remove(null, this.get('block.content.fullPath'));
      }

      this.get('images').removeObject(image);
      this.set('block.file', null);
      this.set('block.content', '');
    },

    removeBlock() {
      return this.get('removeBlock')();
    },
  }
});
