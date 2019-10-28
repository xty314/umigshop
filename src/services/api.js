import Config from '../shopConfig.json';

// const prefix=Config.apiURL;
const prefix="";
const getApiObj=config=>{
    return (    Object.keys(config).reduce(
        (copy,name)=>{
        copy[name]=`${prefix}`+config[name];
        return copy
    },{}))

    }


export default (getApiObj)({
   
    getItemList:'/api/item',
    getCategoryList:'/api/categories' // query(cat,scat,sscat)
      // getItemList:'/api/item',
       // getCategoryList:'/api/category' // query(cat,scat,sscat)
    })
