import React from 'react';  
import { connect } from 'dva';
import ProductList from './productlist';
import { loadPartialConfig } from '@babel/core';

// const Products = ({ dispatch, products }) => {
class Products extends React.Component{
    constructor(props) {
        super(props)
      };
   handleDelete=(id)=>{
  console.log(window.g_app._store.getState());
  
      this.props.dispatch({
        type: 'products/delete',
        payload: id,
      });
    };
    handleClick=()=>{
        // console.log(window.g_app._store.getState());
        
            this.props.dispatch({
              type: 'products/addproduct',
              payload: {id:5,
            name:"hhe"},
            });
            console.log(window.g_app._store.getState());
          };
    render(){
        return (
            <div>
            <button onClick={this.handleClick}></button>
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete} products={this.props.products} />
            </div>
          );
    }
   
  };
  
  const mapStateToProps=({ products }) => ({products});
  // export default Products;
  export default connect(mapStateToProps)(Products);