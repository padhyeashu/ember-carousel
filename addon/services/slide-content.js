import Service from '@ember/service';
import {set} from '@ember/object';

export default Service.extend({
    init() {
        this._super(...arguments);
    },
    previousSlide(slider){
			let lastIndex = slider.length - 1;
			let newIndex;
			slider.forEach((slide, index) => {
				if(slide.active) {
					if(index === 0) {
						newIndex = lastIndex;
					}
					else{
						newIndex = index -1;
					}
				}
			});
      this.slideContent(slider, newIndex);
		},
		nextSlide(slider) {
			let lastIndex = slider.length - 1;
			let newIndex;
			slider.forEach((slide, index) => {
				if(slide.active) {
					if(index === lastIndex) {
						newIndex = 0;
					}
					else{
						newIndex = index +1;
					}
				}
			});
			this.slideContent(slider, newIndex);
		},
    slideContent(slider, currentIndex) {
        slider.forEach((button, index) => {
            set(button, 'active', false);
            if(index < currentIndex){
              set(button, 'previous', true);
            }
            else {
              set(button, 'previous', false);
            }
        });
        let obj = slider[currentIndex];
        set(obj, 'active', true);
    }
});
