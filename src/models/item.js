import { yieldExpression } from "@babel/types";

export default {
    namespace: 'item',
    state:  
    {
        list:[],
        sortby:"",
        currentPage:1,
        itemqty:"",
        currentPageList:[]

    },
    effect:{
      *getItemList({payload},{call,put}){
        yield call()


      }
    },
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };