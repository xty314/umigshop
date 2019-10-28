import React from 'react';
import {connect} from 'dva';

import withRouter from 'umi/withRouter'; 
class Item extends React.Component{
    render(){
        const ThisPageItem=this.props.item.currentItem;
        console.log(ThisPageItem);
        
        return(    
        <div className="site__body">
  <div className="page-header">
    <div className="page-header__container container">
      <div className="page-header__breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item active" aria-current="page">{ThisPageItem.description}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div className="block">
    <div className="container">
      <div className="product product--layout--columnar" data-layout="columnar">
        <div className="product__content">
          {/* .product__gallery */}
          <div className="product__gallery">
            <div className="product-gallery">
              <div className="product-gallery__featured">
                <div className="owl-carousel" id="product-image"><a href="images/products/product-16.html" target="_blank"><img src="images/products/product-16.jpg" alt /> </a><a href="images/products/product-16-1.html" target="_blank"><img src="images/products/product-16-1.jpg" alt /> </a><a href="images/products/product-16-2.html" target="_blank"><img src="images/products/product-16-2.jpg" alt /> </a><a href="images/products/product-16-3.html" target="_blank"><img src="images/products/product-16-3.jpg" alt /> </a><a href="images/products/product-16-4.html" target="_blank"><img src="images/products/product-16-4.jpg" alt /></a></div>
              </div>
              <div className="product-gallery__carousel">
                <div className="owl-carousel" id="product-carousel"><a href="#" className="product-gallery__carousel-item"><img className="product-gallery__carousel-image" src="images/products/product-16.jpg" alt /> </a><a href="#" className="product-gallery__carousel-item"><img className="product-gallery__carousel-image" src="images/products/product-16-1.jpg" alt /> </a><a href="#" className="product-gallery__carousel-item"><img className="product-gallery__carousel-image" src="images/products/product-16-2.jpg" alt /> </a><a href="#" className="product-gallery__carousel-item"><img className="product-gallery__carousel-image" src="images/products/product-16-3.jpg" alt /> </a><a href="#" className="product-gallery__carousel-item"><img className="product-gallery__carousel-image" src="images/products/product-16-4.jpg" alt /></a></div>
              </div>
            </div>
          </div>{/* .product__gallery / end */}
          {/* .product__info */}
          <div className="product__info">
            <div className="product__wishlist-compare"><button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Wishlist"><svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#wishlist-16" />
                </svg></button> <button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Compare"><svg width="16px" height="16px">
                  <use xlinkHref="images/sprite.svg#compare-16" />
                </svg></button></div>
            <h1 className="product__name">{ThisPageItem.description}</h1>
            <div className="product__rating">
              <div className="product__rating-stars">
                <div className="rating">
                  <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                      <g className="rating__fill">
                        <use xlinkHref="images/sprite.svg#star-normal" />
                      </g>
                      <g className="rating__stroke">
                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
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
                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
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
                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
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
                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
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
                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
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
              </div>
              <div className="product__rating-legend"><a href="#">7 Reviews</a><span>/</span><a href="#">Write A Review</a></div>
            </div>
            <div className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis
              convallis lorem erat at purus. Maecenas eu varius nisi.</div>
            <ul className="product__features">
              <li>Speed: 750 RPM</li>
              <li>Power Source: Cordless-Electric</li>
              <li>Battery Cell Type: Lithium</li>
              <li>Voltage: 20 Volts</li>
              <li>Battery Capacity: 2 Ah</li>
            </ul>
            <ul className="product__meta">
              <li className="product__meta-availability">Availability: <span className="text-success">In
                  Stock</span></li>
              <li>Brand: <a href="#">Wakita</a></li>
              <li>SKU: 83690/32</li>
            </ul>
          </div>{/* .product__info / end */}
          {/* .product__sidebar */}
          <div className="product__sidebar">
            <div className="product__availability">Availability: <span className="text-success">In
                Stock</span></div>
            <div className="product__prices">{ThisPageItem.price}</div>{/* .product__options */}
            <form className="product__options">
              <div className="form-group product__option"><label className="product__option-label">Color</label>
                <div className="input-radio-color">
                  <div className="input-radio-color__list"><label className="input-radio-color__item input-radio-color__item--white" style={{color: '#fff'}} data-toggle="tooltip" title="White"><input type="radio" name="color" /> <span /></label> <label className="input-radio-color__item" style={{color: '#ffd333'}} data-toggle="tooltip" title="Yellow"><input type="radio" name="color" /> <span /></label> <label className="input-radio-color__item" style={{color: '#ff4040'}} data-toggle="tooltip" title="Red"><input type="radio" name="color" />
                      <span /></label> <label className="input-radio-color__item input-radio-color__item--disabled" style={{color: '#4080ff'}} data-toggle="tooltip" title="Blue"><input type="radio" name="color" disabled="disabled" />
                      <span /></label></div>
                </div>
              </div>
              <div className="form-group product__option"><label className="product__option-label">Material</label>
                <div className="input-radio-label">
                  <div className="input-radio-label__list"><label><input type="radio" name="material" /> <span>Metal</span></label> <label><input type="radio" name="material" /> <span>Wood</span></label>
                    <label><input type="radio" name="material" disabled="disabled" />
                      <span>Plastic</span></label></div>
                </div>
              </div>
              <div className="form-group product__option"><label className="product__option-label" htmlFor="product-quantity">Quantity</label>
                <div className="product__actions">
                  <div className="product__actions-item">
                    <div className="input-number product__quantity"><input id="product-quantity" className="input-number__input form-control form-control-lg" type="number" min={1} defaultValue={1} />
                      <div className="input-number__add" />
                      <div className="input-number__sub" />
                    </div>
                  </div>
                  <div className="product__actions-item product__actions-item--addtocart"><button className="btn btn-primary btn-lg">Add to cart</button></div>
                  <div className="product__actions-item product__actions-item--wishlist"><button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Wishlist"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16" />
                      </svg></button></div>
                  <div className="product__actions-item product__actions-item--compare"><button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Compare"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#compare-16" />
                      </svg></button></div>
                </div>
              </div>
            </form>{/* .product__options / end */}
          </div>{/* .product__end */}
          <div className="product__footer">
            <div className="product__tags tags">
              <div className="tags__list"><a href="#">Mounts</a> <a href="#">Electrodes</a> <a href="#">Chainsaws</a></div>
            </div>
            <div className="product__share-links share-links">
              <ul className="share-links__list">
                <li className="share-links__item share-links__item--type--like"><a href="#">Like</a>
                </li>
                <li className="share-links__item share-links__item--type--tweet"><a href="#">Tweet</a></li>
                <li className="share-links__item share-links__item--type--pin"><a href="#">Pin
                    It</a></li>
                <li className="share-links__item share-links__item--type--counter"><a href="#">4K</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="product-tabs">
        <div className="product-tabs__list"><a href="#tab-description" className="product-tabs__item product-tabs__item--active">Description</a> <a href="#tab-specification" className="product-tabs__item">Specification</a> <a href="#tab-reviews" className="product-tabs__item">Reviews</a></div>
        <div className="product-tabs__content">
          <div className="product-tabs__pane product-tabs__pane--active" id="tab-description">
            <div className="typography">
              <h3>Product Full Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam
                non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed
                purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales
                turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper
                felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet
                molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis
                eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue.
                Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante
                vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae
                tellus.</p>
              <h3>Etiam lacus lacus mollis in mattis</h3>
              <p>Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis
                accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus,
                vulputate et eros a, rhoncus laoreet orci. Proin sapien neque, commodo at porta
                in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin
                nisl molestie eget.</p>
              <p>Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec
                pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor,
                cursus in nulla ut, laoreet commodo quam. Pellentesque et ornare sapien. In ac
                est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit
                amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt
                turpis, sit amet fringilla odio scelerisque non.</p>
            </div>
          </div>
          <div className="product-tabs__pane" id="tab-specification">
            <div className="spec">
              <h3 className="spec__header">Specification</h3>
              <div className="spec__section">
                <h4 className="spec__section-title">General</h4>
                <div className="spec__row">
                  <div className="spec__name">Material</div>
                  <div className="spec__value">Aluminium, Plastic</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Engine Type</div>
                  <div className="spec__value">Brushless</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Battery Voltage</div>
                  <div className="spec__value">18 V</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Battery Type</div>
                  <div className="spec__value">Li-lon</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Number of Speeds</div>
                  <div className="spec__value">2</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Charge Time</div>
                  <div className="spec__value">1.08 h</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Weight</div>
                  <div className="spec__value">1.5 kg</div>
                </div>
              </div>
              <div className="spec__section">
                <h4 className="spec__section-title">Dimensions</h4>
                <div className="spec__row">
                  <div className="spec__name">Length</div>
                  <div className="spec__value">99 mm</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Width</div>
                  <div className="spec__value">207 mm</div>
                </div>
                <div className="spec__row">
                  <div className="spec__name">Height</div>
                  <div className="spec__value">208 mm</div>
                </div>
              </div>
              <div className="spec__disclaimer">Information on technical characteristics, the delivery
                set, the country of manufacture and the appearance of the goods is for reference
                only and is based on the latest information available at the time of
                publication.</div>
            </div>
          </div>
          <div className="product-tabs__pane" id="tab-reviews">
            <div className="reviews-view">
              <div className="reviews-view__list">
                <h3 className="reviews-view__header">Customer Reviews</h3>
                <div className="reviews-list">
                  <ol className="reviews-list__content">
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__avatar"><img src="images/avatars/avatar-1.jpg" alt /></div>
                        <div className="review__content">
                          <div className="review__author">Samantha Smith</div>
                          <div className="review__rating">
                            <div className="rating">
                              <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                  <g className="rating__fill">
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                          </div>
                          <div className="review__text">Phasellus id mattis nulla. Mauris
                            velit nisi, imperdiet vitae sodales in, maximus ut
                            lectus. Vivamus commodo scelerisque lacus, at porttitor
                            dui iaculis id. Curabitur imperdiet ultrices fermentum.
                          </div>
                          <div className="review__date">27 May, 2018</div>
                        </div>
                      </div>
                    </li>
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__avatar"><img src="images/avatars/avatar-2.jpg" alt /></div>
                        <div className="review__content">
                          <div className="review__author">Adam Taylor</div>
                          <div className="review__rating">
                            <div className="rating">
                              <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                  <g className="rating__fill">
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                          </div>
                          <div className="review__text">Aenean non lorem nisl. Duis tempor
                            sollicitudin orci, eget tincidunt ex semper sit amet.
                            Nullam neque justo, sodales congue feugiat ac, facilisis
                            a augue. Donec tempor sapien et fringilla facilisis. Nam
                            maximus consectetur diam. Nulla ut ex mollis, volutpat
                            tellus vitae, accumsan ligula.</div>
                          <div className="review__date">12 April, 2018</div>
                        </div>
                      </div>
                    </li>
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__avatar"><img src="images/avatars/avatar-3.jpg" alt /></div>
                        <div className="review__content">
                          <div className="review__author">Helena Garcia</div>
                          <div className="review__rating">
                            <div className="rating">
                              <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                                  <g className="rating__fill">
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                                    <use xlinkHref="images/sprite.svg#star-normal">
                                    </use>
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
                          </div>
                          <div className="review__text">Duis ac lectus scelerisque quam
                            blandit egestas. Pellentesque hendrerit eros laoreet
                            suscipit ultrices.</div>
                          <div className="review__date">2 January, 2018</div>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="reviews-list__pagination">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled"><a className="page-link page-link--with-arrow" href="#" aria-label="Previous"><svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" width="8px" height="13px">
                            <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13">
                            </use>
                          </svg></a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link page-link--with-arrow" href="#" aria-label="Next"><svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" width="8px" height="13px">
                            <use xlinkHref="images/sprite.svg#arrow-rounded-right-8x13">
                            </use>
                          </svg></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <form className="reviews-view__form">
                <h3 className="reviews-view__header">Write A Review</h3>
                <div className="row">
                  <div className="col-12 col-lg-9 col-xl-8">
                    <div className="form-row">
                      <div className="form-group col-md-4"><label htmlFor="review-stars">Review
                          Stars</label> <select id="review-stars" className="form-control">
                          <option>5 Stars Rating</option>
                          <option>4 Stars Rating</option>
                          <option>3 Stars Rating</option>
                          <option>2 Stars Rating</option>
                          <option>1 Stars Rating</option>
                        </select></div>
                      <div className="form-group col-md-4"><label htmlFor="review-author">Your
                          Name</label> <input type="text" className="form-control" id="review-author" placeholder="Your Name" /></div>
                      <div className="form-group col-md-4"><label htmlFor="review-email">Email
                          Address</label> <input type="text" className="form-control" id="review-email" placeholder="Email Address" /></div>
                    </div>
                    <div className="form-group"><label htmlFor="review-text">Your Review</label>
                      <textarea className="form-control" id="review-text" rows={6} defaultValue={""} />
                    </div>
                    <div className="form-group mb-0"><button type="submit" className="btn btn-primary btn-lg">Post Your Review</button></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/* .block-products-carousel */}
  <div className="block block-products-carousel" data-layout="grid-5">
    <div className="container">
      <div className="block-header">
        <h3 className="block-header__title">Related Products</h3>
        <div className="block-header__divider" />
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-1.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Electric Planer
                      Brandix KL370090G 300 Watts</a></div>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-2.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Undefined Tool IRadix
                      DPS3000SY 2700 Watts</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-3.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Drill Screwdriver
                      Brandix ALX7054 200 Watts</a></div>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__badges-list">
                  <div className="product-card__badge product-card__badge--sale">Sale</div>
                </div>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-4.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Drill Series 3
                      Brandix KSR4590PQS 1500 Watts</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-5.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Router Power
                      Tool 2017ERXPK</a></div>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-6.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Drilling
                      Machine DM2019KW4 4kW</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-7.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Pliers</a>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-8.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Water Hose 40cm</a>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-9.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Spanner Wrench</a>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-10.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Water Tap</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-11.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Hand Tool Kit</a>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-12.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Ash's Chainsaw
                      3.5kW</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-13.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Angle Grinder
                      KZX3890PQW</a></div>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-14.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Air
                      Compressor DELTAKX500</a></div>
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
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-15.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Electric
                      Jigsaw JIG7000BQ</a></div>
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
          </div>
          <div className="block-products-carousel__column">
            <div className="block-products-carousel__cell">
              <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                    <use xlinkHref="images/sprite.svg#quickview-16" />
                  </svg> <span className="fake-svg-icon" /></button>
                <div className="product-card__image"><a href="product.html"><img src="images/products/product-16.jpg" alt /></a></div>
                <div className="product-card__info">
                  <div className="product-card__name"><a href="product.html">Brandix Screwdriver
                      SCREW1500ACC</a></div>
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
                  <div className="product-card__prices">{ThisPageItem.price}</div>
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
</div>
)
    }
}


const mapStateToProps=({ item,setting,category}) => ({item,setting,category});
// export default Products;
export default withRouter(connect(mapStateToProps)(Item ));