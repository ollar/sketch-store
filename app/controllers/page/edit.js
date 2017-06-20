import Ember from 'ember';

export default Ember.Controller.extend({
  blocks: Ember.computed.alias('model.blocks'),
  actions: {
    addBlock() {
      const block = this.get('store').createRecord('block', {
        type: 'text',
      });

      this.get('blocks').pushObject(block);
    },

    handleSubmit() {
      const page = this.get('model');
      this.get('blocks').forEach((block) => {
        block.save();
      });

      page.set('modified', new Date());
      page.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.page_edit_success'),
        });
        this.transitionToRoute('page', page);
      });
    }
  }
});
