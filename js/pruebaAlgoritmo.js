const simetricos = ["DES","3DES","RC5","AES"];
const asimetricos = ["RSA","ECDSA","DSA","DIFFIE-HELLMAN"];

const selectTipo = document.getElementById("selectTipo");
const selectAlgoritmo = document.querySelector("#selectAlgoritmo");

const selectTipo1 = document.getElementById("selectTipo1");
const selectAlgoritmo1 = document.querySelector("#selectAlgoritmo1");

selectTipo.addEventListener('change',()=>{
    limpiar()
    selectAlgoritmo.disabled=false;
    cargarItems(selectTipo.value);
});

selectTipo1.addEventListener('change',()=>{
    limpiar1()
    selectAlgoritmo1.disabled=false;
    cargarItems1(selectTipo1.value);
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

function cargarItems1(tipo){
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
        selectAlgoritmo1.appendChild(opt);
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

limpiar1 = ()=>{
    while(selectAlgoritmo1.options.length > 0){
        selectAlgoritmo1.remove(0)
    }
}



const txtAreaData1 = document.getElementById("txtData1");

txtAreaData1.addEventListener('keyup',()=>{
    document.querySelector("#encriptar").disabled=false;
    document.querySelector("#desencriptar").disabled=false;
})

function abrirArchivo(e){
    document.querySelector("#encriptar").disabled=false;
    document.querySelector("#desencriptar").disabled=false;
  let archivo = e.target.files[0];
  if(archivo){
      let leer = new FileReader();
      
      leer.onload = (e)=>{
          let content = e.target.result; 
          txtAreaData1.innerText = " ";
          txtAreaData1.value = content;
      }

      leer.readAsText(archivo);      
  }else{
      alert("no ha seleccionador el arcvhiv");
  }  
}
window.addEventListener('load', ()=>{
    document.getElementById("txtData").addEventListener('change', abrirArchivo);
    
})