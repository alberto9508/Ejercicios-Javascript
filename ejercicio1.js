console.log("ejercicio1 js");


function redireccionar(script) {
    window.location.href = script;
}



let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  
  let sentence = arr.join(" "); // une el areglo en una sola cadena
  console.log(sentence); // This is a sentence
}

printOutString();