import React from 'react';
import HeaderBottomItem from "./HeaderBottomItem"

import Link from "umi/link";
import { connect } from 'dva';



class HeaderBottom extends React.Component{

  

    componentDidMount(){
          
          }
    render(){
      const style={
        width:"60%",
        height:"20%",
        marginRight:"-100px"
      }
        return(
        <div className="site-header__nav-panel">
        <div className="nav-panel">
          <div className="nav-panel__container container">
            <div className="nav-panel__row">
         {/* .nav-links */}
         <Link to="./"><img src="images/logomall.png" alt="" style={style} /></Link>
              <div className="nav-panel__nav-links nav-links">
      
                <ul className="nav-links__list">
                <li className="nav-links__item"><Link to="./"><span>Home</span></Link></li>
     
                  <li className="nav-links__item nav-links__item--with-submenu"><a ><span>Category <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg></span></a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                      {this.props.category.list.map((category,i)=>{
                          return(<HeaderBottomItem name={category.name} sub={category.sub}></HeaderBottomItem>)
                      })}
                      
                  
                      
                   
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item nav-links__item--with-submenu">
                  <a href='/#'><span>Blog <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg>
                        </span>
                        </a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                        <li><a href='/#'>Blog Classic</a></li>
                        <li><a href='/#'>Blog Grid</a></li>
                        <li><a href='/#'>Blog List</a></li>
                        <li><a href='/#'>Blog Left Sidebar</a></li>
                        <li><a href='/#'>Post Page</a></li>
                        <li><a href='/#'>Post Without Sidebar</a>
                        </li>
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item nav-links__item--with-submenu">
                  <a href="#">
                  <span>Pages <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg>
                        </span>
                        </a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Contact Us Alt</li>
                        <li>404</li>
                        <li>Terms And Conditions
                        </li>
                        <li>FAQ</li>
                        <li>Components</li>
                        <li>Typography</li>
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item">
<Link to={{
    pathname:"/test",
    query:{
        name:'name1',
        id:'id123',
    }
}}> to query obj </Link></li>
                  <li className="nav-links__item"><Link to="/test"><span>Buy
                        Theme</span></Link></li>
                </ul>
              </div>{/* .nav-links / end */}
              <div className="nav-panel__indicators">
                <div className="indicator indicator--trigger--click"><button type="button" className="indicator__button"><span className="indicator__area"><svg className="indicator__icon" width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#search-20" />
                      </svg> <svg className="indicator__icon indicator__icon--open" width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#cross-20" />
                      </svg></span></button>
                  <div className="indicator__dropdown">
                    <div className="drop-search">
                      <form action="#" className="drop-search__form"><input className="drop-search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoComplete="off" /> <button className="drop-search__button drop-search__button--submit" type="submit"><svg width="20px" height="20px">
                            <use xlinkHref="images/sprite.svg#search-20" />
                          </svg></button></form>
                    </div>
                  </div>
                </div>
                <div className="indicator"><a href='/#' className="indicator__button"><span className="indicator__area"><svg width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#heart-20" />
                      </svg> <span className="indicator__value">0</span></span></a></div>
                <div className="indicator indicator--trigger--click"><a href='/#' className="indicator__button"><span className="indicator__area"><svg width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#cart-20" />
                      </svg> <span className="indicator__value">3</span></span></a>
                  <div className="indicator__dropdown">
                    {/* .dropcart */}
                    <div className="dropcart">
                      <div className="dropcart__products-list">
                        <div className="dropcart__product">
                          <div className="dropcart__product-image"><a href='/#'><img src="images/products/product-1.jpg" alt="true" /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href='/#'>Electric Planer Brandix
                                KL370090G 300 Watts</a></div>
                            <ul className="dropcart__product-options">
                              <li>Color: Yellow</li>
                              <li>Material: Aluminium</li>
                            </ul>
                            <div className="dropcart__product-meta"><span className="dropcart__product-quantity">2</span> x <span className="dropcart__product-price">$699.00</span></div>
                          </div><button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"><svg width="10px" height="10px">
                              <use xlinkHref="images/sprite.svg#cross-10" />
                            </svg></button>
                        </div>
                        <div className="dropcart__product">
                          <div className="dropcart__product-image"><a href='/#'><img src="images/products/product-2.jpg" alt="true" /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href='/#'>Undefined Tool IRadix DPS3000SY
                                2700 watts</a></div>
                            <div className="dropcart__product-meta"><span className="dropcart__product-quantity">1</span> x <span className="dropcart__product-price">$849.00</span></div>
                          </div><button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"><svg width="10px" height="10px">
                              <use xlinkHref="images/sprite.svg#cross-10" />
                            </svg></button>
                        </div>
                        <div className="dropcart__product">
                          <div className="dropcart__product-image"><a href='/#'><img src="images/products/product-5.jpg" alt="true" /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href='/#'>Brandix Router Power Tool
                                2017ERXPK</a></div>
                            <ul className="dropcart__product-options">
                              <li>Color: True Red</li>
                            </ul>
                            <div className="dropcart__product-meta"><span className="dropcart__product-quantity">3</span> x <span className="dropcart__product-price">$1,210.00</span>
                            </div>
                          </div><button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"><svg width="10px" height="10px">
                              <use xlinkHref="images/sprite.svg#cross-10" />
                            </svg></button>
                        </div>
                      </div>
                      <div className="dropcart__totals">
                        <table>
                          <tbody><tr>
                              <th>Subtotal</th>
                              <td>$5,877.00</td>
                            </tr>
                            <tr>
                              <th>Shipping</th>
                              <td>$25.00</td>
                            </tr>
                            <tr>
                              <th>Tax</th>
                              <td>$0.00</td>
                            </tr>
                            <tr>
                              <th>Total</th>
                              <td>$5,902.00</td>
                            </tr>
                          </tbody></table>
                      </div>
                      <div className="dropcart__buttons"><a className="btn btn-secondary" href="cart.html">View Cart</a> <a className="btn btn-primary" href="checkout.html">Checkout</a></div>
                    </div>{/* .dropcart / end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

const mapStateToProps=({ item,setting,category}) => ({item,setting,category});
// export default Products;
export default connect(mapStateToProps)(HeaderBottom);
