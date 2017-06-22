import Ember from 'ember';

export default Ember.Service.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  storageRef: Ember.computed(function() {
    return this.get('firebase').database.app.storage().ref();
  }),

  upload(model, file, parentType) {
    return this.get('storageRef').child(`${parentType}/${model.id}/${file.name}`).put(file)
      .then((snapshot) => {
        const imageData = snapshot.metadata;
        const imageModel = this.get('store').createRecord('image', {
            name: imageData.name,
            fullPath: imageData.fullPath,
            url: imageData.downloadURLs[0],
            [parentType]: model,
          });

        model.get('images').pushObject(imageModel);
        imageModel.save();
        model.save();
      })
      .catch((e) => console.log(e));
  },

  remove(model, imageModel) {
    return this.get('storageRef').child(imageModel.get('fullPath'))
      .delete().then(() => {
        model.get('images').removeObject(imageModel);

        imageModel.destroyRecord();
        model.save();
        return true;
      });
  }
});
