# Conceptos useReducer

## Función pura:

Son aquellas que solo operan utilizando solo los páramtros de entrada
sin recurrir ni afectar a ningún otro elemento fuera de ellas.
Debe cumplir dos condiciones:

1. Dados unos párametros de entrada de indéntico valor, siempre devolverá el mismo resultado.
2. El cómputo de la función, su lógica, implica ningún efecto observable colateral fuera de ella. ( no debe alterar nada, solo debe devolver algo)

### Ejemplos

```
// funciones puras
function suma(a, b) {
    eturn a + b;
}
function addNumberToArr2(arr, n) {
    return [...arr, n]
}
// funcions que no son puras
function randomSum(a, b) {
    // No es pura porque no devuelve el mismo valor cuando los párametro son iguales
    return a + b + Math.random()
}
function getTime() {
    // Porque nunca va a devolver el mismo valor
    return Date.now()
}
function addNumberToArray(arr, n) {
    arr.push(n)
    // No es pura porque muta el arreglo con el push
    return arr;
}
```

## Reducer puro

1. Retornará el mismo estado, si se dispara la misma acción, con el mismo payload.
2. Los párametro de entrada (state,action) no deben ser mutados. Se debe utilizar funciones que no modifiquen el valor original como filter, map, find, reduce

## ¿Cuándo usar un useReducer?

- Cuando se tiene una lógica compleja que involucra subvalores.
- Cuando el próximo estado depende del anterior.
- Cuando sobre un estado se realizan muchas acciones distintas para actualizarlo.
