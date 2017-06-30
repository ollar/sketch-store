import Ember from 'ember';

export default Ember.Component.extend({
  swiper: null,

  didInsertElement() {
    this._super(...arguments);

    this.set('swiper', new Swiper(this.$('.swiper-container'), {
      effect: 'fade',
      ...this.options,
    }));
  }
});
