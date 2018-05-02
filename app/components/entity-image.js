import Component from '@ember/component';

export default Component.extend({
  classNames: ['swiper-slide'],

  didRender() {
    if (this.get('imageUrl'))
      this.$().css({
        'background-image': `url(${this.get('imageUrl')})`,
      });
  },

  click() {
    if (this.handleClick) this.handleClick();
  },
});
