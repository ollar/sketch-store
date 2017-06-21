import Ember from 'ember';
import BlockManagerMixin from '../../mixins/block-manage';

export default Ember.Controller.extend(BlockManagerMixin, {
  blocks: Ember.computed.alias('model.blocks'),
  title: Ember.computed.alias('model.title'),
  actions: {
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
