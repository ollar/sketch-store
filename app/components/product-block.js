import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.$().attr('contenteditable', true);

    var mySwiper = new Swiper('.images-wrapper', {
      loop: true,
    });
  }
});
