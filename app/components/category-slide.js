import Component from '@ember/component';
import { computed } from '@ember/object';

import stripTags from '../utils/strip-tags';

export default Component.extend({
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

  description: computed('category.blocks.@each.content', function() {
    if (this.get('category.blocks.length')) {
      return stripTags(this.get('category.blocks.firstObject.content.text'));
    }

    return null;
  }),

  image: computed('category.images.[]', function() {
    return this.get('category.images.firstObject');
  }),

});
