import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['product-block'],

  image: computed('product.images', function() {
    return this.get('product.images.firstObject');
  }),
});
