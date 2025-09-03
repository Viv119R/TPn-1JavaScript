const a = parseInt(prompt(`Ingrese un numero`));
if (a % 2 === 0) {
  document.writeln(`El Numero ${a} es divisible por 2`);
} else if (a % 3 === 0) {
  document.writeln(`El Numero ${a} es divisible por 3`);
} else if (a % 5 === 0) {
  document.writeln(`El Numero ${a} es divisible por 5`);
} else if (a % 7 === 0) {
  document.writeln(`El Numero ${a} es divisible por 7`);
} else {
  document.writeln(`El Numero ${a} no es divisible por 2, 3, 5 ni 7`);
}
