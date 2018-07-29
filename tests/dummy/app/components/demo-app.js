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
        this.set('imageSlider', [
            {
                path: 'assets/images/image.jpg',
                value: 1,
                active: true
            },
            {
                path: 'assets/images/image1.jpg',
                value: 2,
                active: false
            },
            {
                path: 'assets/images/image3.jpg',
                value: 3,
                active: false
            }
        ]);
    }
});