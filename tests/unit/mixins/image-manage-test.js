import Object from '@ember/object';
import ImageManageMixin from 'sketch-shop/mixins/image-manage';
import { module, test } from 'qunit';

module('Unit | Mixin | image manage');

// Replace this with your real tests.
test('it works', function(assert) {
  let ImageManageObject = Object.extend(ImageManageMixin);
  let subject = ImageManageObject.create();
  assert.ok(subject);
});
