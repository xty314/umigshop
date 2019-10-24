import http from './http';
import apis from "./api";

function  getItemList(params={}){

    
     return http.get(apis.wucha,params)
}
function  getFarro(params={}){
 
    
     return http.get(apis.farro,params)
}



const request={getItemList,getFarro}

export default request;