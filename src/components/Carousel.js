import React from 'react';

class Carousel extends React.Component{
    render(){
        return(         
        <div className="block-slideshow__body">
  
        <div className="owl-carousel"><a className="block-slideshow__slide" >
            <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop" style={{backgroundImage: 'url("images/slides/slide-1-full.jpg")'}} />
            <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{backgroundImage: 'url("images/slides/slide-1-mobile.jpg")'}} />
            <div className="block-slideshow__slide-content">
              <div className="block-slideshow__slide-title">Big choice of<br />Plumbing products
              </div>
              <div className="block-slideshow__slide-text">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                molestie.</div>
              <div className="block-slideshow__slide-button"><span className="btn btn-primary btn-lg">Shop Now</span></div>
            </div>
          </a><a className="block-slideshow__slide"  >
            <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop" style={{backgroundImage: 'url("images/slides/slide-2-full.jpg")'}} />
            <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{backgroundImage: 'url("images/slides/slide-2-mobile.jpg")'}} />
            <div className="block-slideshow__slide-content">
              <div className="block-slideshow__slide-title">Screwdrivers<br />Professional Tools
              </div>
              <div className="block-slideshow__slide-text">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                molestie.</div>
              <div className="block-slideshow__slide-button"><span className="btn btn-primary btn-lg">Shop Now</span></div>
            </div>
          </a><a className="block-slideshow__slide"  >
            <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop" style={{backgroundImage: 'url("images/slides/slide-3-full.jpg")'}} />
            <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{backgroundImage: 'url("images/slides/slide-3-mobile.jpg")'}} />
            <div className="block-slideshow__slide-content">
              <div className="block-slideshow__slide-title">One more<br />Unique header</div>
              <div className="block-slideshow__slide-text">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.<br />Etiam pharetra laoreet dui quis
                molestie.</div>
              <div className="block-slideshow__slide-button"><span className="btn btn-primary btn-lg">Shop Now</span></div>
            </div>
          </a></div>
      </div>
   )
    }
}
export default Carousel;