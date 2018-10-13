import Component from '@ember/component';
import layout from '../templates/components/textual-carousel-rounded-numbers';
import { inject } from '@ember/service';

export default Component.extend({
	layout,
	slider: inject('slide-content'),
  init(){
    this._super(...arguments);
	},
	actions: {
		previousSlide(){
			this.get('slider').previousSlide(this.get('textualSlider'));
		},
		nextSlide() {
			this.get('slider').nextSlide(this.get('textualSlider'));
		},
		slideContent(currentIndex) {
			this.get('slider').slideContent(this.get('textualSlider'), currentIndex);
		}
	}
});
