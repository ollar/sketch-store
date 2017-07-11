import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['swiper-slide', 'product'],

  description: Ember.computed('product.blocks.@each.content', function() {
    if (this.get('product.blocks.length')) {
      return this.get('product.blocks.firstObject.content.text');
    }

    return null;
  }),

  image: Ember.computed('product.images.[]', function() {
    return this.get('product.images.firstObject');
  }),
});
