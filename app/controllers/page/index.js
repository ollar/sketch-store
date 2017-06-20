import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removePage() {
      this.get('model').destroyRecord()
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.page_removed_success'),
          });
          this.transitionToRoute('pages');
        })
    }
  }
});
