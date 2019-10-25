import request from '../services'
import categroyFormat from '../utils/categoryformat'
export default {
    namespace: 'category',
    state:  
    {
        list:[],
        sortby:"",
        categoryqty:"",

    },
    effects:{
      *loadCategoryList({payload},{call,put}){
        const res=yield call(request.getCategoryList)
        // console.log(res);
        
        yield put({
          type:'getCategory',
          payload:res.data
        })
      }
    },
    reducers: {

      'getCategory'(state,{payload}){
              return{...state,
              list:  categroyFormat(payload)
            }      
        
      }
    },
  };