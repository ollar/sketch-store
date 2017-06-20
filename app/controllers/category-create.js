import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),

  actions: {
    addBlock() {
      const block = this.get('store').createRecord('block', {
        type: 'text',
        category: this.model,
      });

      this.get('blocks').pushObject(block);
    },

    handleSubmit() {
      const category = this.get('model');
      category.set('dateCreated', new Date());
      category.set('modified', new Date());

      this.get('blocks').forEach((block) => {
        block.save();
      });

      category.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.page_create_success'),
        });
        this.transitionToRoute('category', category);
      });
    }
  },
});
