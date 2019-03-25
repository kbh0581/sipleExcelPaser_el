
const excel = require('excel');
const xlsx= require('xlsx');


const arrayJsonMerge = (array) => { 
    let resultArray=new Array();
    array.forEach(element => {
        element.forEach(lowerElement=>{
            resultArray.push(lowerElement);
        });
    });
    return resultArray;
};

const excelRead = (path) => {
    let work='';
    try{
        work = xlsx.readFile(path);
    }catch(e){
        return {'flag' : false ,'msg' : `재시도 요청 ${e}` };
    }
    return workseet=work.Sheets["Sheet1"];
};

const excelWorkseetParser = (workseet) =>{
    let ref = workseet["!ref"].replace(/[A-Za-z]*/gi,'').split(":");
    let tempArray = new Array();
    for(let i = ref[0];i<ref[1];i++){
        tempArray.push("A"+i);
    }
    //console.log(tempArray);
    let map = tempArray.map(s=>JSON.parse(workseet[s].w).data);
    
    
    map=arrayJsonMerge(map);
    const key= Object.keys(map[0]); //header 값
    const values = map;             //value 값
    return {'header':key,'list':values};

}




module.exports = {
    arrayJsonMerge,
    excelRead,
    excelWorkseetParser,

};