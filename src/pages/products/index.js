import React from "react";
import ItemCard from '../../components/ItemCard';
import Pagecontainer from '../../components/Pagecontainer'
import { connect } from 'dva';
// import ItemList from "../../../mock/items.json"
import withRouter from 'umi/withRouter';

class Products extends React.Component{
//   componentWillReceiveProps(nextProps){
//     let{cat,scat}=this.props.location.query;
//     console.log(this.props.location)
 
//     scat="undefined"?'':scat;
// this.componentDidMount();
//     // this.props.dispatch({
//     //     type:"item/getItemList",
//     //     payload:{
//     //         cat:cat,
//     //         scat:scat
//     //     }
//     // })
  
// }
// componentDidUpdate(){
//   let{cat,scat}=this.props.location.query;
//      console.log(this.props.location)
  
//      scat="undefined"?'':scat;

//     const a= ()=>this.props.dispatch({
//          type:"item/getItemList",
//          payload:{
//              cat:cat,
//              scat:scat
//          }
//      })

// }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.location.search);// 修改url进入的，这里能正确获取到新用户id
    // console.log(this.props.location.search);
    return true;
  }

    componentDidMount(){

     let{cat,scat}=this.props.location.query;
 
  
     scat="undefined"?'':scat;

  //  ()=>this.props.dispatch({
  //        type:"item/getItemList",
  //        payload:{
  //            cat:cat,
  //            scat:scat
  //        }
  //    })
  
    };





    render(){
        return(  
        <div className="site__body" >
  <div className="page-header">
    <div className="page-header__container container">
      <div className="page-header__breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item"><a href="#">{this.props.location.query.cat}</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item active" aria-current="page">Screwdrivers</li>
          </ol>
        </nav>
      </div>
      <div className="page-header__title">
        <h1>Screwdrivers</h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="block">
          <div className="products-view">
            <div className="products-view__options">
              <div className="view-options">
                <div className="view-options__layout">
                  <div className="layout-switcher">
                    <div className="layout-switcher__list"><button data-layout="grid-4-full" data-with-features="false" title="Grid" type="button" className="layout-switcher__button layout-switcher__button--active"><svg width="16px" height="16px">
                          <use xlinkHref="images/sprite.svg#layout-grid-16x16" />
                        </svg></button> <button data-layout="grid-4-full" data-with-features="true" title="Grid With Features" type="button" className="layout-switcher__button"><svg width="16px" height="16px">
                          <use xlinkHref="images/sprite.svg#layout-grid-with-details-16x16">
                          </use>
                        </svg></button> <button data-layout="list" data-with-features="false" title="List" type="button" className="layout-switcher__button"><svg width="16px" height="16px">
                          <use xlinkHref="images/sprite.svg#layout-list-16x16" />
                        </svg></button></div>
                  </div>
                </div>
                <div className="view-options__legend">Showing 6 of 98 products</div>
                <div className="view-options__divider" />
                <div className="view-options__control">
                <Pagecontainer></Pagecontainer><label >Sort By</label>
                  <div><select className="form-control form-control-sm">
                      <option value>Default</option>
                      <option value>Name (A-Z)</option>
                    </select></div>
                </div>
                <div className="view-options__control"><label >Show</label>
                  <div><select className="form-control form-control-sm">
                      <option value>12</option>
                      <option value>24</option>
                    </select></div>
                </div>
              </div>
            </div>
            <div className="products-view__list products-list" data-layout="grid-4-full" data-with-features="false">
              <div className="products-list__body">
           
                {this.props.item.currentPageItemList.map((item,i)=>{
                  return( <ItemCard name={item.description} price={item.price} key={this.props.location.search+i} code={item.code}></ItemCard>) 
                })}
             </div>
            </div>
            
            <div className="products-view__pagination">
            <Pagecontainer></Pagecontainer>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                <a className="page-link page-link--with-arrow" href="#" aria-label="Previous"><svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" width="8px" height="13px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13" />
                    </svg></a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link page-link--with-arrow" href="#" aria-label="Next"><svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" width="8px" height="13px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-right-8x13" />
                    </svg></a></li>
              </ul>
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
export default withRouter(connect(mapStateToProps)(Products ));
