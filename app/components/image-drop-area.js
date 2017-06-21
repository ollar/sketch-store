import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['dragover'],
  draddover: false,

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
        console.log(file);
      });
    },
  },
});
