import Ember from 'ember';
import EntityManagerConrtroller from '../entity-manage';

export default EntityManagerConrtroller.extend({
  init() {
    this._super(...arguments);
    this.set('categories', this.get('store').findAll('category'));
  },

  categoryId: Ember.computed('model.category', function() {
    return this.get('model').get('category').then((cat) => {
      console.log('meou', cat);
    });
  }),

  category: Ember.computed.alias('model.category'),

  // categoryId: '-KnT2rL8SgTZBsmlug0y',

  actions: {
    handleCategoryChange(categoryId) {
      const category = this.get('categories').find((_category) => _category.id === categoryId);
      this.get('model').set('category', category);
    }
  }
});
