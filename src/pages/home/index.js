import React from "react";
import Carousel from '../../components/Carousel';
import { Carousel as AntdCarousel } from 'antd';
// require('./index.css');
export default class Home extends React.Component{
    render(){
        return (
            <div className="site__body">
            {/* .block-slideshow */}
            <div className="block-slideshow block-slideshow--layout--full block">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                  {/* <Carousel></Carousel> */}
<AntdCarousel autoplay="true">  

    <div>
       
jkljfklasjfkljasdf
   
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div></AntdCarousel>

            </div>
                </div>
              </div>
            </div>{/* .block-slideshow / end */}
            {/* .block-features */}
            <div className="block block-features block-features--layout--boxed">
              <div className="container">
                <div className="block-features__list">
                  <div className="block-features__item">
                    <div className="block-features__icon"><svg width="48px" height="48px">
                        <use xlinkHref="images/sprite.svg#fi-free-delivery-48" />
                      </svg></div>
                    <div className="block-features__content">
                      <div className="block-features__title">Free Shipping</div>
                      <div className="block-features__subtitle">For orders from $50</div>
                    </div>
                  </div>
                  <div className="block-features__divider" />
                  <div className="block-features__item">
                    <div className="block-features__icon"><svg width="48px" height="48px">
                        <use xlinkHref="images/sprite.svg#fi-24-hours-48" />
                      </svg></div>
                    <div className="block-features__content">
                      <div className="block-features__title">Support 24/7</div>
                      <div className="block-features__subtitle">Call us anytime</div>
                    </div>
                  </div>
                  <div className="block-features__divider" />
                  <div className="block-features__item">
                    <div className="block-features__icon"><svg width="48px" height="48px">
                        <use xlinkHref="images/sprite.svg#fi-payment-security-48" />
                      </svg></div>
                    <div className="block-features__content">
                      <div className="block-features__title">100% Safety</div>
                      <div className="block-features__subtitle">Only secure payments</div>
                    </div>
                  </div>
                  <div className="block-features__divider" />
                  <div className="block-features__item">
                    <div className="block-features__icon"><svg width="48px" height="48px">
                        <use xlinkHref="images/sprite.svg#fi-tag-48" />
                      </svg></div>
                    <div className="block-features__content">
                      <div className="block-features__title">Hot Offers</div>
                      <div className="block-features__subtitle">Discounts up to 90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* .block-features / end */}
            {/* .block-products-carousel */}
            <div className="block block-products-carousel" data-layout="grid-5">
              <div className="container">
                <div className="block-header">
                  <h3 className="block-header__title">Featured Products</h3>
                  <div className="block-header__divider" />
                  <ul className="block-header__groups-list">
                    <li><button type="button" className="block-header__group block-header__group--active">All</button></li>
                    <li><button type="button" className="block-header__group">Power Tools</button></li>
                    <li><button type="button" className="block-header__group">Hand Tools</button></li>
                    <li><button type="button" className="block-header__group">Plumbing</button></li>
                  </ul>
                  <div className="block-header__arrows-list"><button className="block-header__arrow block-header__arrow--left" type="button"><svg width="7px" height="11px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11" />
                      </svg></button> <button className="block-header__arrow block-header__arrow--right" type="button"><svg width="7px" height="11px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11" />
                      </svg></button></div>
                </div>
                <div className="block-products-carousel__slider">
                  <div className="block-products-carousel__preloader" />
                  <div className="owl-carousel">
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__badges-list">
                            <div className="product-card__badge product-card__badge--new">New</div>
                          </div>
                          <div className="product-card__image"><img src="images/products/product-1.jpg" alt="true" /></div>
                          <div className="product-card__info">
                            <div className="product-card__name">Electric Planer
                                Brandix KL370090G 300 Watts</div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">9 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$749.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__badges-list">
                            <div className="product-card__badge product-card__badge--hot">Hot</div>
                          </div>
                          <div className="product-card__image">   <img src="images/products/product-2.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Undefined Tool IRadix
                                DPS3000SY 2700 Watts   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">11 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$1,019.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-3.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Drill Screwdriver
                                Brandix ALX7054 200 Watts   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">9 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$850.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__badges-list">
                            <div className="product-card__badge product-card__badge--sale">Sale</div>
                          </div>
                          <div className="product-card__image">   <img src="images/products/product-4.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Drill Series 3
                                Brandix KSR4590PQS 1500 Watts   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">7 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices"><span className="product-card__new-price">$949.00</span> <span className="product-card__old-price">$1189.00</span></div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-5.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Router Power
                                Tool 2017ERXPK   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">9 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$1,700.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-6.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Drilling
                                Machine DM2019KW4 4kW   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">7 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$3,199.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-7.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Pliers   
                            </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">4 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$24.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-8.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Water Hose 40cm   
                            </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">4 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$15.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-9.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Spanner Wrench   
                            </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">9 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$19.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-10.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Water Tap   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">11 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$15.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-11.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Hand Tool Kit   
                            </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">9 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$149.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-12.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Ash's Chainsaw
                                3.5kW   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">11 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$666.99</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-13.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Angle Grinder
                                KZX3890PQW   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">4 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$649.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-14.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Air
                                Compressor DELTAKX500   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">7 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$1,800.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-products-carousel__column">
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-15.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Electric
                                Jigsaw JIG7000BQ   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">4 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$290.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block-products-carousel__cell">
                        <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#quickview-16" />
                            </svg> <span className="fake-svg-icon" /></button>
                          <div className="product-card__image">   <img src="images/products/product-16.jpg" alt="true" />   </div>
                          <div className="product-card__info">
                            <div className="product-card__name">   Brandix Screwdriver
                                SCREW1500ACC   </div>
                            <div className="product-card__rating">
                              <div className="rating">
                                <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal" />
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                      </use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon" />
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-card__rating-legend">11 Reviews</div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                            <div className="product-card__prices">$1,499.00</div>
                            <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To
                                Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
                              <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
                                  <use xlinkHref="images/sprite.svg#compare-16" />
                                </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* .block-products-carousel / end */}
            {/* .block-banner */}
            <div className="block block-banner">
              <div className="container"><a   className="block-banner__body">
                  <div className="block-banner__image block-banner__image--desktop" style={{backgroundImage: 'url("images/banners/banner-1.jpg")'}} />
                  <div className="block-banner__image block-banner__image--mobile" style={{backgroundImage: 'url("images/banners/banner-1-mobile.jpg")'}} />
                  <div className="block-banner__title">Hundreds<br className="block-banner__mobile-br" />Hand Tools</div>
                  <div className="block-banner__text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>
                  <div className="block-banner__button"><span className="btn btn-sm btn-primary">Shop Now</span></div>
                  </a> </div>
            </div>{/* .block-banner / end */}
   
     
    </div>
        )
    }
}