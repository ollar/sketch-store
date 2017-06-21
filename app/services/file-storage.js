import Ember from 'ember';

export default Ember.Service.extend({
  firebase: Ember.inject.service(),
  firebase: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.set('storageRef', this.get('firebase').database.app.storage().ref());
  },

  upload(file, path) {
    return this.get('storageRef').child(path + '/' + file.name).put(file).then((snapshot) => {
      // this.get('storageRef').child(path + '/' + file.name)
      //   .getDownloadURL().then(function(url) {
      //     console.log(url)
      //   });

      return snapshot.metadata;
    }).catch((e) => console.log(e));
  }
});
