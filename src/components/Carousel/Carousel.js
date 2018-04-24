import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    let slideIndex = 1;
    showSlides(slideIndex)

    function plusSlides(n) {
      showSlides(slideIndex += n)
    }

    function currentSlide(n) {
      showSlides(slideIndex = n)
    }

    function showSlides(n) {
      const slides = document.getElementById('mySlides');
      const dots = document.getElementById('dot');
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[slideIndex-1].style.display = 'block';
      dots[slideIndex-1].className += ' active';
    }


    return (
      <div>
        <div className='carousel-container'>

          <div className='mySlides'>
            <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-17-03-04-441978063146.jpg' />
          </div>

          <div>
            <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-13-04-04-411454955005.jpg'  />
          </div>

          <div>
            <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-11-01-04-45865267787.jpg'  />
          </div>

          <div>
            <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-06-04-04-147105646.jpg'  />
          </div>

          <div>
            <img src='https://www.flightclub.com/media/upload/slideshow/items/2018-04-02-03-04-07820040147.jpg'  />
          </div>

          <a className='prev' onClick='plusSlides(-1)'>&#10094;</a>
          <a className='next' onClick='plusSlides(1)'>&#10095;</a>
        </div>
        {/* <br> */}
        <div>
          <span className='dot' onClick='currenSlide(1)'></span>
          <span className='dot' onClick='currenSlide(2)'></span>
          <span className='dot' onClick='currenSlide(3)'></span>
          <span className='dot' onClick='currenSlide(4)'></span>
          <span className='dot' onClick='currenSlide(5)'></span>
        </div>
      </div>
    )
  }
}