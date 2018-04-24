import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ReactCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-17-03-04-441978063146.jpg' />
        </div>
        <div>
          <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-13-04-04-411454955005.jpg' />
        </div>
        <div>
          <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-11-01-04-45865267787.jpg' />
        </div>
        <div>
          <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-06-04-04-147105646.jpg' />
        </div>
        <div>
          <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-02-03-04-07820040147.jpg' />
        </div>
      </Carousel>
    )
  }
}