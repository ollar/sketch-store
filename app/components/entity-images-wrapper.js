import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entity-images-wrapper'],

  init() {
    this._super(...arguments);
    this.applyWrapperHeight = this.applyWrapperHeight.bind(this);
  },

  didInsertElement() {
    this._super(...arguments);

    this.applyWrapperHeight();
    $(window).on('resize', this.applyWrapperHeight);
  },

  willDestroyElement() {
    this._super(...arguments);
    $(window).off('resize', this.applyWrapperHeight);
  },

  applyWrapperHeight() {
    if (this.attrs.fluidImages) {
      if (window.innerWidth < 768) {
        this.$().css({ height: window.innerHeight / 2 });
      } else {
        this.$().css({ height: 'auto' });
      }
    } else {
      this.$().css({ height: window.innerHeight / 2 });
    }
  },
});
