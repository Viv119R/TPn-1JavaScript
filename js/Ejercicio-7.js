const a = parseInt(prompt(`Ingrese el primer numero`));
const b = parseInt(prompt(`Ingrese el segundo numero numero`));
const c = parseInt(prompt(`Ingrese otro numero`));
if (a>b && a>c){
    document.writeln(`El mayor es ${a}`);
}else if (b>a && b>c){
    document.writeln(`El mayor es ${b}`);
}else{
    document.writeln(`El mayor es ${c}`)
}