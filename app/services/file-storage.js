import { computed } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  firebase: service(),
  store: service(),

  storageRef: computed(function() {
    return this.get('firebase').database.app.storage();
  }),

  upload(path, file) {
    return this.get('storageRef').ref(path).put(file)
      .then((snapshot) => snapshot.metadata)
      .catch(() => false);
  },

  remove(imageModel, path) {
    const _path = (imageModel && imageModel.get('fullPath')) || path;

    if (!_path) throw new Error('no file path specified');
    return this.get('storageRef').ref(_path).delete();
  }
});
