import Ember from 'ember';
import EntityManagerConrtroller from '../entity-manage';

export default EntityManagerConrtroller.extend({
  init() {
    this._super(...arguments);
    this.set('categories', this.get('store').findAll('category'));
  },

  categoryId: Ember.computed.readOnly('model.category.id'),
  category: Ember.computed.readOnly('model.category'),

  actions: {
    handleCategoryChange(categoryId) {
      if (this.get('category.content')) {
        let category = this.get('store').peekRecord('category', this.get('categoryId'));
        category.get('products').removeObject(this.model);
        category.save();
      }

      this.get('store').findRecord('category', categoryId).then((category) => {
        this.get('model').set('category', category);
        category.save();
        return this.get('model').save();
      });
    },
  }
});
