import Ember from 'ember';

export default Ember.Service.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  storageRef: Ember.computed(function() {
    return this.get('firebase').database.app.storage().ref();
  }),

  upload(path, file) {
    return this.get('storageRef').child(path).put(file)
      .then((snapshot) => snapshot.metadata)
      .catch((e) => console.log(e));
  },

  remove(imageModel) {
    return this.get('storageRef').child(imageModel.get('fullPath'))
      .delete();
  }
});
