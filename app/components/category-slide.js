import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.get('category.images');
    this.get('category.blocks');
  },

  didRender() {
    this._super(...arguments);
    if (this.get('image.url'))
      this.$().css({
        'background': `url(${this.get('image.url')}) no-repeat center`,
      });
  },

  classNames: ['swiper-slide'],

  description: Ember.computed('category.blocks.@each', function() {
    console.log(this.get('category.blocks.firstObject.content'))
    return this.get('category.blocks.firstObject').content.text;
  }),

  image: Ember.computed('category.images.[]', function() {
    return this.get('category.images.firstObject');
  }),

});
