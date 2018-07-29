import Service from '@ember/service';
import {set} from '@ember/object';

export default Service.extend({
    init() {
        this._super(...arguments);
    },  
    slideContent(slider, currentIndex) {
        slider.forEach((button) => {
            set(button, 'active', false);
        });
        let obj = slider[currentIndex];
        set(obj, 'active', true);
    }
});
