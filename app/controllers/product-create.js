import Ember from 'ember';
import BlockManagerMixin from '../mixins/block-manage';
import ImageManageMixin from '../mixins/image-manage';

export default Ember.Controller.extend(BlockManagerMixin, ImageManageMixin('product'), {
});
