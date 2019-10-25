
import request from "../services"
import _ from "lodash";

export default {
    namespace: 'item',

    effects:{
      
      *loadItemList(_,{call,put}){ 
   
        const result=yield call(request.getItemList);      
        // const result=yield call(request.getTest);     
        // console.log(JSON.stringify(result.data));
         
        yield put({type:'initItemList',
                    payload:result.data
                  });
      },

    },
    state: {
        list:[],
        sortby:"name",
        currentPage:1,
        itemqty:0,
        currentPageItemList:[],
        itemNumPerPage:20,
        totalPages:1,
        currentItem:{},

    },
  //   subscriptions: {
  //     setup ({dispatch, history}) {
  //   history.listen(( location ) => {
  //     if(location.pathname=="/products"){
  //       let{cat,scat}=location.query;
  //       scat="undefined"?'':scat;
  //       console.log(cat,scat);
        
  //       dispatch({
  //           type:"getItemList",
  //           payload:{
  //               cat:cat,
  //               scat:scat
  //           }
  //       })
  //     }
            
             
              
  //         })
  //     }
  // },

    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
getItemList(state,{payload}){
  const {cat,scat}=payload

  
  const temp = state.list.filter(item => item.cat === cat)

  
  return {
    ...state,
    currentPageItemList: temp
  };
},



     'initItemList'(state, {
       payload
     }) {
       const listnum = payload.length;
       // console.log(listnum);
       const temp = payload.filter(item => item.cat === "SAUCE")
       // console.log(temp);
       console.log(payload);
       return {
         ...state,
         itemqty: listnum,
         list: payload
       };
     },
     },
  };

