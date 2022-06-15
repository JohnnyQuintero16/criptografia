const simetricos = ["DES","3DES","RC5","AES"];
const asimetricos = ["RSA","ECDSA","DSA","DIFFIE-HELLMAN"];

const selectTipo = document.getElementById("selectTipo");
const selectAlgoritmo = document.querySelector("#selectAlgoritmo");

selectTipo.addEventListener('change',()=>{
    limpiar()
    selectAlgoritmo.disabled=false;
    cargarItems(selectTipo.value);
});

function cargarItems(tipo){
    var n = 0;
    var arrayalgoritmos = [];
    if(tipo == "asimetrico"){
        arrayalgoritmos = cargarCombo(asimetricos);
    }else{
        arrayalgoritmos = cargarCombo(simetricos);
    }
    for (var line = 0; line < arrayalgoritmos.length; line++) {
        var opt = document.createElement('option');
        opt.innerHTML = arrayalgoritmos[line];
        opt.value = arrayalgoritmos[line];
        selectAlgoritmo.appendChild(opt);
      }
}

cargarCombo = (data)=>{
    var array = [];
    for(var i = 0; i < 4; i++){
        array.push(data[i]);
    }
    return array;
}

limpiar = ()=>{
    while(selectAlgoritmo.options.length > 0){
        selectAlgoritmo.remove(0)
    }
}