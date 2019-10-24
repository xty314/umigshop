export default {
  namespace: 'products',
  state:
    // {
    //     products:[
    //         {name:'dva',id:1},
    //         {name:'antd',id:2}
    //     ]
    // },
    [{
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
        name: 'ssd'
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
        name: 'shdasd'
      },
    ],
  effect: {
    * query({
      payload
    }, {
      call,
      put
    }) {

    }
  },


//   subscriptions: {
//     // 订阅监听，比如我们监听路由，进入页面就如何，可以在这写
//     setup({
//       dispatch,
//       history,
//       query
//     }) {
//       return history.listen(async ({
//         pathname,
//         search,
//         query
//       }) => {
//         if (pathname === "/test") { // 当进入testdemo这路由，就会触发fetchUser方法
//           dispatch({
//             type: 'addproduct',
//             payload: {
//               id: 3,
//               name: "刚赖2"
//             },
//           })
//         }
//       })
//     },
//   },




  reducers: {
    'delete'(state, {
      payload: id
    }) {
      return state.filter(item => item.id !== id);
    },
    'addproduct'(state, {
      payload
    }) {
    //   console.log(select((state) => state.user.islogin ));
      var temp = payload;
    //  console.log(window.g_app._store.getState());
     

      //   console.log(news);
      // Object.assign({}, state, {

      //       ...state,
      //      temp

      //   })
      var a = Object.assign([], state, [
        ...state,
        temp
      ]);
      console.log(a);

      return a;
    },
  },
};