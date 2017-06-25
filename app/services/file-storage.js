import Ember from 'ember';

export default Ember.Service.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  storageRef: Ember.computed(function() {
    return this.get('firebase').database.app.storage();
  }),

  upload(path, file) {
    return this.get('storageRef').ref(path).put(file)
      .then((snapshot) => snapshot.metadata)
      .catch((e) => console.log(e));
  },

  remove(imageModel, path) {
    const _path = (imageModel && imageModel.get('fullPath')) || path;

    if (!_path) throw new Error('no file path specified');
    return this.get('storageRef').ref(_path).delete();
  }
});
