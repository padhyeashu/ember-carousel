# ember-simplified-carousel

Ember Simplified Carousel is a carousel component written in ember with a focus to use carousel or slider functionality flexibly, easily and with less amount of code.

## Installation

* ember install ember-simplified-carousel

## Features overview
* Image Carousel.
* Textual Carousel.
* Textual Carousel with numbers.
* Textual Carousel with rounded numbers.
* Can easily override css as per requirement.

## Usage
* Image Carousel
*  template:
  ```hbs
  {{image-carousel
  	imageSlider=imageSlider
  	class="carousel"
  }}
  ```
  Create array of objects with path, value & active properties as given in below example for image carousel.
*  component:
```js
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
  ```
* Textual carousel
    template:
    ```hbs
    {{textual-carousel
    	textualSlider=textualSlider
    	class="carousel"
    }}
    ```
* Textual Carousel with rounded numbers
  template:
  ``` hbs  
  {{textual-carousel-rounded-numbers
    textualSlider=textualSlider1
    class="carousel"
  }}
  ```

* Textual Carousel with numbers
  template:
  ```hbs
  {{textual-carousel-with-numbers
    textualSlider=textualSlider2
    class="carousel"
  }}
  ```
Create array of objects with title, data, value & active properties as given in below example for Textual carousel, Textual Carousel with rounded numbers and numbers.  
*  component:
  ```js
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
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
