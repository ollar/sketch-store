import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeCategory() {
      this.get('model').destroyRecord()
        .then(() => {
          this.send('notify', {
            type: 'info',
            text: this.get('i18n').t('messages.category_removed_success'),
          });
          this.transitionToRoute('categories');
        })
    }
  }
});
