import Application from '@ember/application';
import { initialize } from 'sketch-shop/initializers/i18n';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import { run } from '@ember/runloop';

module('Unit | Initializer | i18n', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
