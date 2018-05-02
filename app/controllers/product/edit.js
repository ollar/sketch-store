import { computed } from '@ember/object';
import EntityManagerConrtroller from '../entity-manage';

export default EntityManagerConrtroller.extend({
  init() {
    this._super(...arguments);
    this.set('categories', this.get('store').findAll('category'));
  },

  categoryId: computed.readOnly('model.category.id'),
  category: computed.readOnly('model.category'),

  newCategoryId: null,

  actions: {
    handleCategoryChange(categoryId) {
      this.set('newCategoryId', categoryId);
    },

    handleSubmit() {
      if (this.get('category.content')) {
        let category = this.get('store').peekRecord('category', this.get('categoryId'));
        category.get('products').removeObject(this.model);
        category.save();
      }

      if (this.get('newCategoryId')) {
        let category = this.get('store').peekRecord('category', this.get('newCategoryId')); //.then((category) => {
        this.get('model').set('category', category);

        category.get('products').pushObject(this.get('model'));
        category.save();

        return this._super(...arguments);
      } else {
        return this._super(...arguments);
      }
    }
  },
});
