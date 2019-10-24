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
        // getExampleData:'/api/example/data',
        getItemList:'/api/item?branch=1',
        farro:"http://farroapi.gpos.co.nz:800/api/branches",
        wucha:"http://wuchaapi.gpos.co.nz/api/salesbranchreport/daterange"
    })
