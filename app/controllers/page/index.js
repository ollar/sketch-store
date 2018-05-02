import Controller from '@ember/controller';
import destroyModel from '../../utils/destroy-model';

export default Controller.extend({
  actions: {
    removePage() {
      destroyModel(this.get('model'), ['blocks'])
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.page_removed_success'),
          });
          this.transitionToRoute('pages');
        });
    }
  }
});
