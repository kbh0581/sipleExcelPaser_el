const tableAdder = (id,object) => {

    const initTableSpot= document.getElementById(id);
    if(document.getElementById('table') !== null && document.getElementById('table') !== undefined) {
        initTableSpot.removeChild(document.getElementById("table"));
    }
    
    const tableDoc= document.createElement('table');
    
    tableDoc.setAttribute("id","table");
    const headerKey=object.header;
    const list=object.list;
    tableDoc.setAttribute('border','1');
    

    for (let i=0; i< headerKey.length ;i++) {
        let th = document.createElement('th');
        let text = document.createTextNode(headerKey[i]);
        th.appendChild(text);
        tableDoc.appendChild(th);
    }
    for(let j=0; j< list.length;j++){
        let tr = document.createElement('tr');
        tableDoc.appendChild(tr);
        for(let i=0; i< headerKey.length;i++){
            let td = document.createElement('td');
            let text =  document.createTextNode(list[j][headerKey[i]]);
            td.appendChild(text);

            tr.appendChild(td);
        }
    }
    initTableSpot.appendChild(tableDoc);

    
};

module.exports= {
    tableAdder,
};
