import Ember from 'ember';
import stripTags from '../utils/strip-tags';

export default Ember.Component.extend({
  classNames: ['product'],

  description: Ember.computed('product.blocks.@each.type', function() {
    if (this.get('product.blocks.length')) {
      return stripTags(
        this.get('product.blocks')
          .filter((block) => block.get('type') === 'text')
          .get('firstObject.content.text')
        );
    }

    return null;
  }),

  image: Ember.computed('product.images.firstObject.url', function() {
    console.log(this.get('product.images.firstObject'))
    return this.get('product.images.firstObject');
  }),

  imageUrl: Ember.computed('image.url', function() {
    console.log(this.get('image.url'))
    console.log('this')
    return '';
  }),

  didRender() {
    this._super(...arguments);

    console.log(this.get('imageUrl'))

    if (!this.get('image.url')) return;

    this.$().css({
      'background-image': `url(${this.get('image.url')})`,
    });
  }
});
