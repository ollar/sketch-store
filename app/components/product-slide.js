import Component from '@ember/component';
import { computed } from '@ember/object';

import stripTags from '../utils/strip-tags';

export default Component.extend({
  classNames: ['product'],

  description: computed('product.blocks.@each.type', function() {
    if (this.get('product.blocks.length')) {
      return stripTags(
        this.get('product.blocks')
          .filter((block) => block.get('type') === 'text')
          .get('firstObject.content.text')
        );
    }

    return null;
  }),

  didRender() {
    this._super(...arguments);

    if (!this.get('image.url')) return;

    this.$().css({
      'background-image': `url(${this.get('image.url')})`,
    });
  }
});
