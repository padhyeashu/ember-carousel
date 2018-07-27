import Component from '@ember/component';
import layout from '../templates/components/textual-carousel-with-numbers';
import {set} from '@ember/object';

export default Component.extend({
  layout,
  init(){
    this._super(...arguments);
  },
	actions: {
    slideContent(currentIndex) {
			this.get('textualSlider').forEach((button) => {
				set(button, 'active', false);
			});
			let obj = this.textualSlider[currentIndex];
			set(obj, 'active', true);
		}
	}
});

