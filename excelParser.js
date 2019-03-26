
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
    let map ='';
    try {
        for(let i = ref[0];i<ref[1];i++){
                tempArray.push("A"+i);
        }  
         //console.log(tempArray);
        map = tempArray.map(s=>JSON.parse(workseet[s].w).data);
        map=arrayJsonMerge(map);
         //value 값
    } catch (error) {
        return {'flag' : false ,'msg' : `${error}` };
    }
 
    
    const key= Object.keys(map[0]); //header 값
    const values = map;        
    return {'flag' : true, 'header':key,'list':values};

}
const exceltoJsonExport = (json) => {
    const newworkbook=xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newworkbook,xlsx.utils.json_to_sheet(json),"NewExcel");
    xlsx.writeFile(newworkbook,'./test.xlsx');
    xlsx.writeFile(newworkbook,'test.xlsx');
    return xlsx;
        
};





module.exports = {
    arrayJsonMerge,
    excelRead,
    excelWorkseetParser,
    exceltoJsonExport

};