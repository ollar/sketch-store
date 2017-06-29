import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['dragover', 'isEmpty'],
  draddover: false,

  isEmpty: true,

  didRender() {
    if (this.get('images.length')) {
      this.set('isEmpty', false);
    } else {
      this.set('isEmpty', true);
    }
  },

  actions: {
    dragEnter(e) {
      e.preventDefault();
      this.set('dragover', true);
    },

    dragOver(e) {
      e.preventDefault();
    },

    dragLeave(e) {
      this.set('dragover', false);
    },

    drop(e) {
      e.preventDefault();
      this.set('dragover', false);
      const files = Array.prototype.slice.call(e.dataTransfer.files);

      files.forEach((file) => {
        this.uploadImage(file);
      });
    },

    removeImage(imageModel) {
      return this.removeImage(imageModel);
    }
  },
});
