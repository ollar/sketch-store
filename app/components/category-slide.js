import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['swiper-slide', 'category-slide'],

  init() {
    this._super(...arguments);
    this.get('category.images');
    this.get('category.blocks');
  },

  didRender() {
    this._super(...arguments);
    if (this.get('image.url'))
      this.$().css({
        'background-image': `url(${this.get('image.url')})`,
      });
  },

  description: Ember.computed('category.blocks.@each.content', function() {
    if (this.get('category.blocks.length')) {
      return this.get('category.blocks.firstObject.content.text');
    }

    return null;
  }),

  image: Ember.computed('category.images.[]', function() {
    return this.get('category.images.firstObject');
  }),

});
