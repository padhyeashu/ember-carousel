import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textual-carousel-with-numbers', 'Integration | Component | textual carousel with numbers', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{textual-carousel-with-numbers}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#textual-carousel-with-numbers}}
      template block text
    {{/textual-carousel-with-numbers}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
