import Ember from 'ember';
import BlockManagerMixin from '../mixins/block-manage';

export default Ember.Controller.extend(BlockManagerMixin, {
  title: Ember.computed.alias('model.title'),
  blocks: Ember.computed.alias('model.blocks'),
  actions: {
    handleSubmit() {
      const page = this.get('model');

      page.setProperties({
        dateCreated: new Date(),
        modified: new Date(),
      });

      this.get('blocks').forEach((block) => {
        block.save();
      });

      page.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t('messages.page_create_success'),
        });
        this.transitionToRoute('page', page);
      });
    }
  },
});
