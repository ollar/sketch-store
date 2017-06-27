import Ember from 'ember';
import EntityManagerConrtroller from '../entity-manage';

export default EntityManagerConrtroller.extend({
  init() {
    this._super(...arguments);
    this.set('categories', this.get('store').findAll('category'));
  },

  categoryId: Ember.computed.readOnly('model.category.id'),

  actions: {
    handleCategoryChange(categoryId) {
      const category = this.get('categories').find((_category) => _category.id === categoryId);
      this.get('model').set('category', category);
    }
  }
});
