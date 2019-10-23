import React from 'react';
import HeaderBottomItem from "./HeaderBottomItem"
import axios from "axios";
import Link from "umi/link";
import Config from '../../shopconfig.json';

const host=Config.apiUrl+"api/category";
class HeaderBottom extends React.Component{

  
    state={
        categories:[]
          }
          componentDidMount(){
            console.log(host);
            let d=[];
              const _this=this;
              axios.get(host)
              .then(function (res) {
             
                let temp=[];
                  for( var i in res.data){
                    if(temp.indexOf(res.data[i].cat)===-1){
                      temp.push(res.data[i].cat)
                    }
                  }
                
                  let temp2=[];
                  for( var k in res.data){
                    if(temp2.indexOf(res.data[k].cat+","+res.data[k].sCat)===-1){
                      temp2.push(res.data[k].cat+","+res.data[k].sCat)
                    }
                  }
          
                    let result=[];
                  for(var i in temp){
                    let tempo={};
                    tempo["name"]=temp[i];
                    let templist=[];
                    for(var j in temp2){
                      let tempo2={};
                      let a=temp2[j].split(',');
            
                      
                      if(a[0]==temp[i]){
                        tempo2["name"]=a[1];
                        let templist2=[];
                        for(var k in res.data){ 
                       
                                         
                          if((res.data[k].cat+","+res.data[k].sCat)==temp2[j]){
                        if(templist2.indexOf(res.data[k].ssCat)==-1){
                          templist2.push(res.data[k].ssCat)
                        }
                            
                           
                          }
                        }
               
                        
                        tempo2["sub"]=templist2;
                       
                      }
                     
                      if(JSON.stringify(tempo2)!=="{}"){
                        templist.push(tempo2)
                      }
                      
                    }
                    tempo["sub"]=templist;
                    result.push(tempo)
                  }
        
        
        console.log(result);
        
                  return result         
              })
              .then(function (res) {
                d=res;
           
              _this.setState(
                { categories:d}
               )
            
              })
              .catch(function (error) {
                  console.log(error);
              })
          
          }
    render(){
        return(
        <div className="site-header__nav-panel">
        <div className="nav-panel">
          <div className="nav-panel__container container">
            <div className="nav-panel__row">
              <div className="nav-panel__logo"><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="120px" height="20px">
                    <path d="M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3
             l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4
             h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17
             C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8
             C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5
             c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3
             L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6
             S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17
             C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3
             c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z
              M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13
             C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7
             c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9
             c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7
             C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9
             c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6
             z" />
                  </svg></a></div>{/* .nav-links */}
              <div className="nav-panel__nav-links nav-links">
                <ul className="nav-links__list">
                <li className="nav-links__item"><a href="/#"><span>Home</span></a></li>
     
                  <li className="nav-links__item nav-links__item--with-submenu"><a href="javascript:void(0);"><span>Category <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg></span></a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                      {this.state.categories.map((category,i)=>{
                          return(<HeaderBottomItem name={category.name} sub={category.sub}></HeaderBottomItem>)
                      })}
                      
                  
                      
                   
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item nav-links__item--with-submenu"><a href="blog-classic.html"><span>Blog <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg></span></a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                        <li><a href="blog-classic.html">Blog Classic</a></li>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="post.html">Post Page</a></li>
                        <li><a href="post-without-sidebar.html">Post Without Sidebar</a>
                        </li>
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item nav-links__item--with-submenu"><a href="#"><span>Pages <svg className="nav-links__arrow" width="9px" height="6px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6">
                          </use>
                        </svg></span></a>
                    <div className="nav-links__menu">
                      {/* .menu */}
                      <ul className="menu menu--layout--classic">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="contact-us-alt.html">Contact Us Alt</a></li>
                        <li><a href="404.html">404</a></li>
                        <li><a href="terms-and-conditions.html">Terms And Conditions</a>
                        </li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="components.html">Components</a></li>
                        <li><a href="typography.html">Typography</a></li>
                      </ul>{/* .menu / end */}
                    </div>
                  </li>
                  <li className="nav-links__item"><a href="contact-us.html"><span>Contact
                        Us</span></a></li>
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
                <div className="indicator"><a href="wishlist.html" className="indicator__button"><span className="indicator__area"><svg width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#heart-20" />
                      </svg> <span className="indicator__value">0</span></span></a></div>
                <div className="indicator indicator--trigger--click"><a href="cart.html" className="indicator__button"><span className="indicator__area"><svg width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#cart-20" />
                      </svg> <span className="indicator__value">3</span></span></a>
                  <div className="indicator__dropdown">
                    {/* .dropcart */}
                    <div className="dropcart">
                      <div className="dropcart__products-list">
                        <div className="dropcart__product">
                          <div className="dropcart__product-image"><a href="product.html"><img src="images/products/product-1.jpg" alt /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href="product.html">Electric Planer Brandix
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
                          <div className="dropcart__product-image"><a href="product.html"><img src="images/products/product-2.jpg" alt /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href="product.html">Undefined Tool IRadix DPS3000SY
                                2700 watts</a></div>
                            <div className="dropcart__product-meta"><span className="dropcart__product-quantity">1</span> x <span className="dropcart__product-price">$849.00</span></div>
                          </div><button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"><svg width="10px" height="10px">
                              <use xlinkHref="images/sprite.svg#cross-10" />
                            </svg></button>
                        </div>
                        <div className="dropcart__product">
                          <div className="dropcart__product-image"><a href="product.html"><img src="images/products/product-5.jpg" alt /></a>
                          </div>
                          <div className="dropcart__product-info">
                            <div className="dropcart__product-name"><a href="product.html">Brandix Router Power Tool
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
export default HeaderBottom;