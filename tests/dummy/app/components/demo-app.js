import Component from '@ember/component';
export default Component.extend({
    init(){
        this._super(...arguments);
        this.set('textualSlider', [
            {
                title: 'Carousel title 1',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 1,
                active: true
            },
            {
                title: 'Carousel title 2',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 2,
                active: false
            },
            {
                title: 'Carousel title 3',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 3,
                active: false
            }
        ]);
        this.set('textualSlider1', [
            {
                title: 'Carousel title 1',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 1,
                active: true
            },
            {
                title: 'Carousel title 2',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 2,
                active: false
            },
            {
                title: 'Carousel title 3',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 3,
                active: false
            }
        ]);
        this.set('textualSlider2', [
            {
                title: 'Carousel title 1',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 1,
                active: true
            },
            {
                title: 'Carousel title 2',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
                value: 2,
                active: false
            },
            {
                title: 'Carousel title 3',
                data: 'This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content. This is demo content.',
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
                path: 'assets/images/image4.jpg',
                value: 3,
                active: false
            }
        ]);
    }
});
