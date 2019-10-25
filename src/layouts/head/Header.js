import React from "react";
import HeaderTopbar from "./HeaderTopbar";
import HeaderSearch from "./HeaderSearch";
import HeaderBottom from "./HeaderBottom";
import { connect } from 'dva';
import request from "../../services";


class HeadTop extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  };
componentDidMount() {
  this.props.dispatch({
    type:'category/loadCategoryList'
  })
  const {setting } =this.props;
  console.log(this.props);
  this.props.dispatch({
    type: 'item/loadItemList',
  });
  if (!setting.isloadingcategory) {
    this.props.dispatch({
      type: 'setting/loadedcategory',
    })
  }
}
handleClick=()=>{


console.log(this.props);

    };
hander=()=>{

this.props.dispatch({
  type: 'item/test',
  // payload: {branch:1},
});



  // console.log(window.g_app._store.getState())
}


    render(){
        return   ( <div>

<header className="site__header d-lg-block d-none">
  <div className="site-header">
  {/* .topbar */}
 <HeaderTopbar></HeaderTopbar>
  <button onClick={this.handleClick}>Get State</button>
  <button onClick={this.hander}>Get State</button>
 <HeaderSearch></HeaderSearch>   
 <HeaderBottom></HeaderBottom>
 </div>
</header>
</div>)

    }
}

const mapStateToProps=({ item,setting,category}) => ({item,setting,category});
// export default Products;
export default connect(mapStateToProps)(HeadTop );