import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import BlockManagerMixin from '../mixins/block-manage';
import ImageManageMixin from '../mixins/image-manage';

export default Controller.extend(BlockManagerMixin, ImageManageMixin, {
  blocks: computed.alias('model.blocks'),
  images: computed.alias('model.images'),
  fileStorage: service(),

  actions: {
    handleSubmit() {
      const model = this.get('model');
      const entity = this.get('type');
      model.set('dateCreated', new Date());
      model.set('modified', new Date());

      if (this.get('blocks.length')) {
        this.get('blocks').forEach((block) => {

          if (block.get('type') === 'image') {
            const file = block.get('file');
            if (!file) return;
            this.get('fileStorage').upload(`block/${block.id}/${file.name}`, file)
            .then((imageData) => {
              block.set('content', {
                url: imageData.downloadURLs[0],
                fullPath: imageData.fullPath,
              });
              block.save();
            });
          } else {
            block.save();
          }
        });
      }

      if (this.get('images.length')) {
        this.get('images').forEach((image) => {
          const file = image.get('file');
          if (!file) return;
          this.get('fileStorage').upload(`${entity}/${model.id}/${file.name}`, file)
            .then((imageData) => {
              image.setProperties({
                name: imageData.name,
                fullPath: imageData.fullPath,
                url: imageData.downloadURLs[0],
                [entity]: model,
              });

              image.save();
            });
        });
      }

      model.save().then(() => {
        this.send('notify', {
          type: 'success',
          text: this.get('i18n').t(`messages.${entity}_create_success`),
        });
        this.transitionToRoute(entity, model.get('alias'));
      });
    },

    revertChanges() {
      this.get('model').rollbackAttributes();
      history.back();
    }
  },
});
