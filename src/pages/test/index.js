import React from 'react';  
import { connect } from 'dva';
import ProductList from './productlist';
import { loadPartialConfig } from '@babel/core';

// const Products = ({ dispatch, products }) => {
class Products extends React.Component{
    // constructor(props) {
    //     super(props)
    //   };
   handleDelete(id){
  
      this.props.dispatch({
        type: 'products/delete',
        payload: id,
      });
    };
    render(){
        return (
            <div>52
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete} products={this.props.products} />
            </div>
          );
    }
   
  };
  
  // export default Products;
  export default connect(({ products }) => ({
    products,
  }))(Products);