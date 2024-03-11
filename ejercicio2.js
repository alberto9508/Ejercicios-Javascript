console.log("ejercicio2 js");


function redireccionar(script) {
    window.location.href = script;
}
function doubleNumbers(arr) {
    
    let doubledArray = arr.map(number => number * 2);
    
   
    console.log(doubledArray);
  }
  
  
  let numbers = [1, 2, 4, 5];
  doubleNumbers(numbers);