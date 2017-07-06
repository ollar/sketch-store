import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  password: '',

  actions: {
    handleSubmit() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.get('email'),
        password: this.get('password'),
      })
      .then(() => {
        this.send('notify', {
          type: 'info',
          text: this.get('i18n').t('messages.welcome_default'),
        });
        this.transitionToRoute('index');
      })
      .catch((e) => {
        this.send('notify', {
          type: 'error',
          text: e.toString(),
        });
      });
    }
  },

});
