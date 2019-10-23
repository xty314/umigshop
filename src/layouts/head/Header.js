import React from "react";
import HeaderTopbar from "./HeaderTopbar";
import HeaderSearch from "./HeaderSearch";
import HeaderBottom from "./HeaderBottom";


export default class HeadTop extends React.Component{
    render(){
        return   ( <div>



{/* desktop site__header */}
<header className="site__header d-lg-block d-none">
  <div className="site-header">
    {/* .topbar */}
    <HeaderTopbar></HeaderTopbar>
 {/* .topbar / end */}
 <HeaderSearch></HeaderSearch>   
 <HeaderBottom></HeaderBottom>
 </div>
 
</header>{/* desktop site__header / end */}


  
</div>)

    }
}
