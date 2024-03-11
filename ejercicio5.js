console.log("ejercicio5 js");


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(people.indexOf("Dani"), 1);

people.splice(people.indexOf("Juan"), 1);

let index = people.indexOf("Luis");
people.unshift(people.splice(index, 1)[0]);

people.push("Alberto");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}

let indexMaria = people.indexOf("Maria");
console.log("El índice de 'Maria' es: " + indexMaria);
