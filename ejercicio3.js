console.log("ejercicio3 js");



function redireccionar(script) {
    window.location.href = script;
}




function calcularSumaYProducto(arreglo) {
   
    let suma = arreglo.reduce((total, numero) => total + numero, 0);

    
    let producto = arreglo.reduce((total, numero) => total * numero, 1);

    return { suma, producto }; 
}


let numeros = [1, 2, 3, 4];
let resultado = calcularSumaYProducto(numeros);
console.log(`La suma es ${resultado.suma}. El producto es ${resultado.producto}.`);