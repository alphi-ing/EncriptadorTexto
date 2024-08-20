//const textoDeArea = document.getElementById("textoEyDcrip").value;
//LAS LLAVES A UTILIZAR 
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textoDeArea = document.querySelector(".textoescrito");
const textoDelMensaje = document.querySelector(".textosmensaje");

function botoncopiar(){
    var textocopiado = document.getElementById("textomensaje").value; //Capturamos la informacion en un variable para enviarla al porta papeles
    navigator.clipboard.writeText(textocopiado); //Lo que contiene la variable lo pasamos al porta papeles.
}

function botonEmcriptar(){
    const textoEmcriptado = emcriptar(textoDeArea.value);
    textoDelMensaje.value = textoEmcriptado;
    textoDeArea.value = ""; //Borra el texto del TexArea
    textoDelMensaje.style.backgroundImage ="none"; //Quita la imagen del TexAreaMensaje
}

function botonDesemcriptar(){
    const textoEmcriptado = desemcriptar(textoDeArea.value);
    textoDelMensaje.value = textoEmcriptado;
    textoDeArea.value = "";
    if (textoDelMensaje.style.backgroundImage =="none" ) {
    } else {
        textoDelMensaje.style.backgroundImage ="none";
    }
    
}

function emcriptar(cadenaDeTexto) {
    let matrizGeneral = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    cadenaDeTexto = cadenaDeTexto.toLowerCase();

    for(let i = 0; i < matrizGeneral.length; i ++){
        if(cadenaDeTexto.includes(matrizGeneral[i][0])){
            cadenaDeTexto = cadenaDeTexto.replaceAll(matrizGeneral[i][0], matrizGeneral[i][1]);
        }
    }
    return cadenaDeTexto;
}


function desemcriptar(textoaDesencriptar) {
    let matrizGeneral = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoaDesencriptar = textoaDesencriptar.toLowerCase();

    for(let i = 0; i < matrizGeneral.length; i ++){
        if(textoaDesencriptar.includes(matrizGeneral[i][1])){
            textoaDesencriptar = textoaDesencriptar.replaceAll(matrizGeneral[i][1],matrizGeneral[i][0]);
        }
    }
    return textoaDesencriptar;
}

//console.table(matrizGeneral); //Mostrar en la consola del navegador

