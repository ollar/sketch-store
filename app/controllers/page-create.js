import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  blocks: [],
  actions: {
    addBlock() {
      const block = this.get('store').createRecord('block', {
        type: 'text',
      });

      this.get('blocks').pushObject(block);
    },

    handleSubmit() {
      const page = this.get('store').createRecord('page', {
        title: this.get('title'),
        blocks: this.get('blocks'),
        dateCreated: new Date(),
      });

      this.get('blocks').forEach((block) => {
        block.save();
      });

      page.save();
    }
  },
});
