const tableAdder = (id,object) => {

    const tableDoc= document.getElementById(id);
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
            list[j][headerKey[i]]);
            tr.appendChild(td);
        }
    }

    
};

module.exports= {
    tableAdder,
};
