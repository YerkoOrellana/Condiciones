// Parte1
const modificarBorde = () => {
    const foto = document.querySelector("#img-chainsaw")

    if (foto.style.border == '10px solid black') {
        foto.style.border = '0px';
    } else {
        foto.style.border = '10px solid black';
    }
};
// Fin Parte1

// Parte2
const verificar = () => {
    const respuesta = document.querySelector("#respuesta");

    const suma = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    if(suma <= 10){
        respuesta.innerHTML = "Llevas " + suma + " stickers";
    }else{
        respuesta.innerHTML = "Llevas demasiados stickers";
    }
};
// Fin Parte2

// Parte3
const ingresar = () => {
    const mensaje = document.querySelector("#respuesta-select");
    const concat = select1.value + select2.value + select3.value;

    if(concat == 911){
        mensaje.innerHTML = "Password 1 correcta"
    }else if(concat == 714){
        mensaje.innerHTML = "Password 2 correcta"
    }else{
        mensaje.innerHTML = "Password incorrecto"
    }
}
// Fin Parte3