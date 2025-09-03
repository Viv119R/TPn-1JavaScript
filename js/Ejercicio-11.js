const a = parseInt(prompt(`Ingrese un numero`));
let div = false;
if (a % 2 === 0) {
  document.writeln(`El numero ${a} es divisible por 2 <br>`);
  div = true;
} 
if (a % 3 === 0) {
  document.writeln(`El numero ${a} es divisible por 3 <br>`);
  div = true;
} 
if (a % 5 === 0) {
  document.writeln(`El numero ${a} es divisible por 5 <br>`);
  div = true;
} 
if (a % 7 === 0) {
  document.writeln(`El numero ${a} es divisible por 7 <br>`);
  div = true;
}
if (div==false){
  document.writeln(`El numero ${a} no es divisible por 2, 3, 5 o 7 <br>`); 
}
