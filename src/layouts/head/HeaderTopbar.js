import React from "react";

export default class HeadTop extends React.Component{
    render(){
        return   ( 
          <div className="site-header__topbar topbar">
          <div className="topbar__container container">
            <div className="topbar__row">
              <div className="topbar__item topbar__item--link"><a className="topbar-link" href="about-us.html">About Us</a></div>
              <div className="topbar__item topbar__item--link"><a className="topbar-link" href="contact-us.html">Contacts</a></div>
              <div className="topbar__item topbar__item--link"><a className="topbar-link" href="#">Store
                  Location</a></div>
              <div className="topbar__item topbar__item--link"><a className="topbar-link" href="track-order.html">Track Order</a></div>
              <div className="topbar__item topbar__item--link"><a className="topbar-link" href="blog-classic.html">Blog</a></div>
              <div className="topbar__spring" />
              <div className="topbar__item">
                <div className="topbar-dropdown"><button className="topbar-dropdown__btn" type="button">My
                    Account <svg width="7px" height="5px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5" />
                    </svg></button>
                  <div className="topbar-dropdown__body">
                    {/* .menu */}
                    <ul className="menu menu--layout--topbar">
                      <li><a href="account.html">Login</a></li>
                      <li><a href="account.html">Register</a></li>
                      <li><a href="#">Orders</a></li>
                      <li><a href="#">Addresses</a></li>
                    </ul>{/* .menu / end */}
                  </div>
                </div>
              </div>
              <div className="topbar__item">
                <div className="topbar-dropdown"><button className="topbar-dropdown__btn" type="button">Currency: <span className="topbar__item-value">USD</span> <svg width="7px" height="5px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5" />
                    </svg></button>
                  <div className="topbar-dropdown__body">
                    {/* .menu */}
                    <ul className="menu menu--layout--topbar">
                      <li><a href="#">€ Euro</a></li>
                      <li><a href="#">£ Pound Sterling</a></li>
                      <li><a href="#">$ US Dollar</a></li>
                      <li><a href="#">₽ Russian Ruble</a></li>
                    </ul>{/* .menu / end */}
                  </div>
                </div>
              </div>
              <div className="topbar__item">
                <div className="topbar-dropdown"><button className="topbar-dropdown__btn" type="button">Language: <span className="topbar__item-value">EN</span> <svg width="7px" height="5px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5" />
                    </svg></button>
                  <div className="topbar-dropdown__body">
                    {/* .menu */}
                    <ul className="menu menu--layout--topbar menu--with-icons">
                      <li><a href="#">
                          <div className="menu__icon"><img srcSet="images/languages/language-1.png, images/languages/language-1@2x.png 2x" src="images/languages/language-1.png" alt /></div>English
                        </a></li>
                      <li><a href="#">
                          <div className="menu__icon"><img srcSet="images/languages/language-2.png, images/languages/language-2@2x.png 2x" src="images/languages/language-2.png" alt /></div>French
                        </a></li>
                      <li><a href="#">
                          <div className="menu__icon"><img srcSet="images/languages/language-3.png, images/languages/language-3@2x.png 2x" src="images/languages/language-3.png" alt /></div>German
                        </a></li>
                      <li><a href="#">
                          <div className="menu__icon"><img srcSet="images/languages/language-4.png, images/languages/language-4@2x.png 2x" src="images/languages/language-4.png" alt /></div>Russian
                        </a></li>
                      <li><a href="#">
                          <div className="menu__icon"><img srcSet="images/languages/language-5.png, images/languages/language-5@2x.png 2x" src="images/languages/language-5.png" alt /></div>Italian
                        </a></li>
                    </ul>{/* .menu / end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)

    }
}
