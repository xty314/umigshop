
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
      * test(_, { take, put }) {
        while (true) {
          const { location } = yield take('onRouteChange');
          console.log(location);
          
          /*
          * 每次路由变化，这里的逻辑都会执行一遍。可以吧原本要写在history.listen中的逻辑放在这里。
          * 这里的location是目标路由的路由信息。
          * */
          yield put({
            type: 'changeState',
            payload :{
              location
            }
          })
  
        }
      },

    },
    state: {
        list:[],
        sortby:"name",
        currentPage:1,
        itemqty:0,
        currentPageItemList:[],
        
        // totalPages:1,
        pageConfig:{    
          itemNumPerPage:20,    
          currentPage: 1, //当前页码
          groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
          startPage: 1,  //分组开始页码
          totalPages:1 //总页数
        },
        currentItem:{},

    },

    subscriptions: {
      setup ({dispatch, history}) {
    history.listen(( location ) => {
      if(location.pathname=="/products"){
        let{cat,scat}=location.query;
        scat="undefined"?'':scat;

    
        
        dispatch({
            type:"getItemList",
            payload:{
                cat:cat,
                scat:scat
            }
        })
      }else if (location.pathname=="/item") {
    
        
        let {code}=location.query;
        dispatch({
          type:"getItemPage",
          payload:{
             code:code
          }
      })
      }
            
             
              
          })
      }
  },

    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
      getItemPage(state,{payload}){
        const {code}=payload
   
        const temp = _.find(state.currentPageItemList, function(o) { return o.code==code });
        // const temp = state.currentPageItemList.filter(item => item.code === code);
      
        return {
          ...state,
          currentItem:temp ,
          
          //currentItem:currentPageItems
        };
      },
      getCurrentPage(state,{payload}){
        const {currentPage}=payload;

        const currentPageList=_.chunk(state.currentPageItemList,state.pageConfig.itemNumPerPage);
        const currentPageItems=state.currentPageItemList.length<state.pageConfig.itemNumPerPage?state.currentPageItemList:currentPageList[currentPage-1];
return{
  ...state,
  currentPageItemList:currentPageItems ,
  pageConfig:{
   ... state.pageConfig,   
    currentPage: currentPage, //当前页码

  }


}
      },
getItemList(state,{payload}){
  const {cat,scat}=payload

  
  const temp = state.list.filter(item => item.cat === cat);
const currentPageList=_.chunk(temp,state.pageConfig.itemNumPerPage);

const currentPageItems=temp.length<state.pageConfig.itemNumPerPage?temp:currentPageList[state.currentPage-1];

  return {
    ...state,
    currentPageItemList:currentPageItems ,
    pageConfig:{
      itemNumPerPage:20,    
      currentPage: 1, //当前页码
      groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
      startPage: 1,  //分组开始页码
      totalPages: Math.ceil(temp.length/state.pageConfig.itemNumPerPage) //总页数
    }

    //currentItem:currentPageItems
  };
},



     'initItemList'(state, {
       payload
     }) {
       const listnum = payload.length;
       // console.log(listnum);
       const temp = payload.filter(item => item.cat === "SAUCE")
       // console.log(temp);

       return {
         ...state,
         itemqty: listnum,
         list: payload
       };
     },
     },
  };

