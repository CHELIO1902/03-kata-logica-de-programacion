var arreglo = [2, 5, 19, 20, 33, 44, 4, 6, 9, 19, 35];

for (var i = 0; i < arreglo.length; i++){
  var numero = arreglo[i];
  if (numero % 2 === 0) {
    console.log("elemento: ", arreglo[i]);
  }
}


var i = 0; // inicializacion - del for
while (i < arreglo.length) { //condicion - del for
  var numero = arreglo[i];
  if (numero % 2 === 0) {
    console.log("elemento con while: ", arreglo[i]);
  }
  i++ // incremento - del for
}