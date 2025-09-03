const a = parseInt(prompt(`Ingrese un numero`));
let b = 0;
b = a % 2
if (b === 0){
    document.writeln(`El Numero ${a} es divisible por 2`);
}else{
    document.writeln(`El Numero ${a} no es divisible por 2`)
}