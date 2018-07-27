import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textual-carousel-circular-numbers', 'Integration | Component | textual carousel circular numbers', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{textual-carousel-circular-numbers}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#textual-carousel-circular-numbers}}
      template block text
    {{/textual-carousel-circular-numbers}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
