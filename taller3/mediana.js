function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}
function EncontrarMediana(lista){
    if (esPar (lista.length)){
        const mitadLista = parseInt(lista.length/2);
        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        return mediana;
    }else{
        const mitadLista = parseInt(lista.length/2);
        mediana = lista[mitadLista];
        console.log("Soy el else");
        return mediana;
    }
    
}

