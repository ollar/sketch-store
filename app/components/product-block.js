import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product-block'],

  image: Ember.computed('product.images', function() {
    return this.get('product.images.firstObject');
  }),
});
