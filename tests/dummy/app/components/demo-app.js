import Component from '@ember/component';
export default Component.extend({
    init(){
        this._super(...arguments);
        this.set('textualSlider', [
            {
                data: 'Carousel text 1',
                value: 1,
                active: true
            },
            {
                data: 'Carousel text 2',
                value: 2,
                active: false
            },
            {
                data: 'Carousel text 3',
                value: 3,
                active: false
            }
        ]);
        this.set('textualSlider1', [
            {
                data: 'Carousel text 1',
                value: 1,
                active: true
            },
            {
                data: 'Carousel text 2',
                value: 2,
                active: false
            },
            {
                data: 'Carousel text 3',
                value: 3,
                active: false
            }
        ]);
        this.set('textualSlider2', [
            {
                data: 'Carousel text 1',
                value: 1,
                active: true
            },
            {
                data: 'Carousel text 2',
                value: 2,
                active: false
            },
            {
                data: 'Carousel text 3',
                value: 3,
                active: false
            }
        ]);
    }
});