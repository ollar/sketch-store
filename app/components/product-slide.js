import Ember from 'ember';
import stripTags from '../utils/strip-tags';

export default Ember.Component.extend({
  classNames: ['product'],

  description: Ember.computed('product.blocks.@each.content', function() {
    if (this.get('product.blocks.length')) {
      return stripTags(this.get('product.blocks.firstObject.content.text'));
    }

    return null;
  }),

  image: Ember.computed('product.images.[]', function() {
    return this.get('product.images.firstObject');
  }),
});
