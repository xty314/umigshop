import React from "react";
import HeaderTopbar from "./HeaderTopbar";
import HeaderSearch from "./HeaderSearch";
import HeaderBottom from "./HeaderBottom";
import { connect } from 'dva';
import request from "../../services"

class HeadTop extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  };
componentDidMount() {

  const {
    setting
  } = window.g_app._store.getState();
  console.log(setting);
  if (!setting.isloadingcategory) {
    this.props.dispatch({
      type: 'setting/loadedcategory',
    })
  }
}
hander=()=>{
request.getFarro({params:
    {"startdatetime":"2019-10-24",
  "enddatetime":"2019-10-25"}
}).then(res=>{
  console.log(res);
})




  // console.log(window.g_app._store.getState())
}


    render(){
        return   ( <div>

<header className="site__header d-lg-block d-none">
  <div className="site-header">
  {/* .topbar */}
 <HeaderTopbar></HeaderTopbar>
  <button onClick={this.hander}>Get State</button>
 <HeaderSearch></HeaderSearch>   
 <HeaderBottom></HeaderBottom>
 </div>
</header>
</div>)

    }
}

const mapStateToProps=({ setting}) => ({setting});
// export default Products;
export default connect(mapStateToProps)(HeadTop );