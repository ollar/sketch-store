import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-categories-wrapper', 'Integration | Component | index categories wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index-categories-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index-categories-wrapper}}
      template block text
    {{/index-categories-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
