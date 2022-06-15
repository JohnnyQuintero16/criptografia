var select = document.getElementById("selectAlgoritmo");

cont = 0;
select.addEventListener('change',(value)=>{
    option = select.value;
    if(cont > 0){
        var div = document.getElementById('template'); 
        while(div.firstChild){ div.removeChild(div.firstChild); 
        }
    }
    cont++;
    if(option == "DES"){
        template = document.querySelector("#algoritmosDES");
        clone = template.content.cloneNode(true);
        div = document.querySelector("#template");
        div.appendChild(clone)
    }else{
        template = document.querySelector("#algoritmos");
        clone = template.content.cloneNode(true);
        div = document.querySelector("#template");
        div.appendChild(clone)
    }  
})

var selectA = document.getElementById("selectAlgoritmoA");
var contA = 0

selectA.addEventListener('change',(value)=>{
    option = selectA.value;
    if(cont > 0){
        var div = document.getElementById('templateA'); 
        while(div.firstChild){ div.removeChild(div.firstChild); 
        }
    }
    cont++;
    if(option == "RSA"){
        template = document.querySelector("#algoritmosRSA");
        clone = template.content.cloneNode(true);
        div = document.querySelector("#templateA");
        div.appendChild(clone)
    }else{
        template = document.querySelector("#algoritmos");
        clone = template.content.cloneNode(true);
        div = document.querySelector("#templateA");
        div.appendChild(clone)
    }  
})