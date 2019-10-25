export default {
    namespace: 'setting',
    state:  
    {
  
        isloadingcategory:false,
        

    },
    // subscriptions: {
    //   setup(some) {
    //     console.log(some);
    //     const { dispatch, history }=some;
    //     return history.listen(({ pathname, query }) => {
     
      
          
    //       if (pathname === '/test') {
    //         dispatch({
    //           type: 'loadedcategory',
              
    //         });
    //       } else if (pathname === "/saleOrder/detail") {
    //         dispatch({
    //           type: 'fetchDetail',
    //           payload: query,
    //         });
    //       }
    //     });
    //   },
    //   // 订阅监听，比如我们监听路由，进入页面就如何，可以在这写
    //   // setup({
    //   //   dispatch,
    //   //   history,
    //   // }) {
    //   // //   console.log(history);
    //   // // console.log(history.location.query);


    //   //   return history.listen(async ({
    //   //     pathname,
    //   //     search,
    //   //     query
    //   //   }) => {
    //   //     // console.log(query);
    //   //     console.log("555");
          
    //   //     if (pathname === "/test") { // 当进入testdemo这路由，就会触发fetchUser方法
    //   //        dispatch({
    //   //         type: 'loadedcategory',
    //   //       })
    //   //     }
    //   //   })
    //   // },
    // },
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
      loadedcategory(state,{payload}){
        return Object.assign({},state,{
          isloadingcategory:true,
        })
      }
    },
  };