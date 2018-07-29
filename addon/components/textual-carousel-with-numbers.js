import Component from '@ember/component';
import layout from '../templates/components/textual-carousel-with-numbers';
import { inject } from '@ember/service';

export default Component.extend({
	layout,
	slider: inject('slide-content'),
  init(){
    this._super(...arguments);
	},
	actions: {
		slideContent(currentIndex) {
			this.get('slider').slideContent(this.get('textualSlider'), currentIndex);
		}
	}
});

