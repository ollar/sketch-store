import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['swiper-slide'],

  didRender() {
    if (this.get('imageUrl'))
      this.$().css({
        'background-image': `url(${this.get('imageUrl')})`,
      });
  },
});
