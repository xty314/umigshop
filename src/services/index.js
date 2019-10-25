import http from './http';
import apis from "./api";

function  getItemList(params={}){

    
     return http.get(apis.getItemList,params)
}
function  getFarro(params={}){
 
    
     return http.get(apis.farro,params)
}

function  getCategoryList(params={}){
 
    
     return http.get(apis.getCategoryList,params)
}


const request={getItemList, getCategoryList}

export default request;