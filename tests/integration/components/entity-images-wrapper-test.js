import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('entity-images-wrapper', 'Integration | Component | entity images wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{entity-images-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#entity-images-wrapper}}
      template block text
    {{/entity-images-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
