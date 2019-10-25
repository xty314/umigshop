import axios from 'axios';
import Config from '../shopConfig.json';

axios.defaults.baseURL=Config.apiURL;
// axios.defaults.withCredentials=true;
axios.defaults.timeout=10000000;
axios.interceptors.request.use(config=>{



    return config;
})
// axios.interceptors.response.use(response=>{

//    if(response.data.retcode===200||response.data.retcode==='200'){
//        return response.data.data||response.data
//    }else{
//        throw Error(response.data.msg)
//    }
// })
export default axios;