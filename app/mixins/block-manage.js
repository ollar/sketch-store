import Mixin from '@ember/object/mixin';

const BlockManageMixin = Mixin.create({
  actions: {
    addBlock(blockType) {
      const block = this.get('store').createRecord('block', {
        type: '',
        [blockType]: this.get('model'),
      });

      this.get('model.blocks').pushObject(block);
    },

    removeBlock(block) {
      this.get('model.blocks').removeObject(block);
    }
  }
});

// BlockManageMixin[Ember.NAME_KEY] = 'BlockManageMixin';

export default BlockManageMixin;
