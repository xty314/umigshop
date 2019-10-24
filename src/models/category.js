export default {
    namespace: 'category',
    state:  
    {
        list:[],
        sortby:"",
        categoryqty:"",

    },
    // effect:{
    //   *query({payload},{call,put}){

    //   }
    // },
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };