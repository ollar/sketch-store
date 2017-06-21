import Ember from 'ember';
import BlockManagerMixin from '../mixins/block-manage';

export default Ember.Controller.extend(BlockManagerMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  images: Ember.computed.alias('model.images'),

  actions: {
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
          text: this.get('i18n').t('messages.category_create_success'),
        });
        this.transitionToRoute('category', category);
      });
    }
  },
});
