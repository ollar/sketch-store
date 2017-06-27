import Ember from 'ember';
import EntityManagerConrtroller from '../entity-manage';

export default EntityManagerConrtroller.extend({
  init() {
    this._super(...arguments);
    this.set('categories', this.get('store').findAll('category'));
  },

  categoryId: Ember.computed.readOnly('model.category.id'),

  category: Ember.computed.readOnly('model.category'),
  _category: null,

  actions: {
    handleCategoryChange(categoryId) {
      if (this.get('category.content')) {
        this.get('category.products').removeObject(this.get('model'));
      }

      this._category = this.get('categories').find((_category) => _category.id === categoryId);
      this.get('model').set('category', this._category);
    },

    handleSubmit() {
      if (this._category) {
        this._category.get('products').pushObject(this.get('model'));
        this._category.save();
      }

      this._super(...arguments);
    }
  }
});
