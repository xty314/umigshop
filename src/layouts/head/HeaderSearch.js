import React from "react";

export default class HeaderSearch extends React.Component{
    render(){
     const style={
        height:"30%",
        width:"50%",
    //  border: "1px black solid"
      }
        return   (        
        <div className="site-header__middle container">
        <div className="site-header__logo"><a href="index.html">
        <img src="images/colorlogo.png" alt="" style={style} /></a></div>
        <div className="site-header__search">
          <div className="search">
            <form className="search__form" action="#"><input className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoComplete="off" /> <button className="search__button" type="submit"><svg width="20px" height="20px">
                  <use xlinkHref="images/sprite.svg#search-20" />
                </svg></button>
              <div className="search__border" />
            </form>
          </div>
        </div>
        <div className="site-header__phone">
          <div className="site-header__phone-title">Customer Service</div>
          <div className="site-header__phone-number">(800) 060-0730</div>
        </div>
      </div> )
    
}
}
