import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),

  actions: {
    addBlock() {
      const block = this.get('store').createRecord('block', {
        type: 'text',
        category: this.get('model'),
      });

      this.get('blocks').pushObject(block);
    },

    handleSubmit() {
      const category = this.get('model');
      this.get('blocks').forEach((block) => {
        block.save();
      });

      category.set('modified', new Date());
      category.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.category_edit_success'),
        });
        this.transitionToRoute('category', category);
      });
    }
  }
});
