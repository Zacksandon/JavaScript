function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);
    var personaQueSeVa = arreglo.shift();
    return personaQueSeVa;
  }
  
  var fila = [1, 2, 3, 4, 5]; 
  var nuevaPersona = 6;     
  var personaQueSubio = proximoEnLaFila(fila, nuevaPersona);
  
  console.log("La persona que subió es:", personaQueSubio);
  console.log("La fila ahora es:", fila); 