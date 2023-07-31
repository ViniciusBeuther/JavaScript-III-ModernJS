"use strict";

var somaPond = 0;
var accumPond = 0;
var mediaAritmetica = function mediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  sum = numbers.reduce(function (accum, soma) {
    return accum + soma;
  }, 0);
  return sum / numbers.length;
};
var calcularPonderada = function calcularPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  somaNotas = entries.reduce(function (acumulador, _ref) {
    var nota = _ref.nota,
      peso = _ref.peso;
    return acumulador + nota * peso;
  }, 0);
  somaPeso = entries.reduce(function (acumulador, _ref2) {
    var nota = _ref2.nota,
      peso = _ref2.peso;
    return acumulador + peso;
  }, 0);
  return somaNotas / somaPeso;
};
var calcMediana = function calcMediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var arrayOrganizado = [].concat(numeros);
  arrayOrganizado.sort(function (a, b) {
    return a - b;
  });
  var meio = arrayOrganizado[0];
  var tamanho = arrayOrganizado.length;
  var metade = Math.floor(tamanho / 2);
  if (tamanho % 2 === 0) {
    meio = arrayOrganizado[metade];
    meio += arrayOrganizado[metade - 1];
    console.log(arrayOrganizado);
    return meio / 2;
  } else {
    meio = arrayOrganizado[metade];
    console.log(arrayOrganizado);
    return meio;
  }
};
console.log("Media \xE9: ".concat(mediaAritmetica(2, 3, 7, 9, 10)));
console.log("M\xE9dia ponderada: ".concat(calcularPonderada({
  nota: 9.0,
  peso: 3.0
}, {
  nota: 7,
  peso: 5
}, {
  nota: 10,
  peso: 2
})));
console.log("Mediana: ".concat(calcMediana(1, 2, 3, 7, 6, 4, 9, 10, 5, 13, 15)));
