const ej1 = require('./pec1');
const ej2 = require('./pec1');
const value1 = 2020;
const value2 = 1999;
const value3 = 2040;
const value4 = 2000;
const value5 = 2020;
const value6 = 2021;
const value7 = -3;
const times1 = 20;
const times2 = 200;
const times3 = 155;

describe("ex1", () => {
  test('¿' + value1 + ' está entre 2000 y 2020? ' + ej1.ex1(value1), () => {});
  test('¿' + value2 + ' está entre 2000 y 2020? ' + ej1.ex1(value2), () => {});
  test('¿' + value3 + ' está entre 2000 y 2020? ' + ej1.ex1(value3), () => {});
  test('¿' + value4 + ' está entre 2000 y 2020? ' + ej1.ex1(value4), () => {});
  test('¿' + value5 + ' está entre 2000 y 2020? ' + ej1.ex1(value5), () => {});
  test('¿' + value6 + ' está entre 2000 y 2020? ' + ej1.ex1(value6), () => {});
  test('¿' + value7 + ' está entre 2000 y 2020? ' + ej1.ex1(value7), () => {});
});

describe("ex2", () => {
  test('Un grillo canta '+ times1 + ' minutos a una temperatura correcta de ' + ej2.ex2(times1) +'ºC', () => {});
  test('Un grillo canta '+ times2 + ' minutos a una temperatura correcta de ' + ej2.ex2(times2) +'ºC', () => {});
  test('Un grillo canta '+ times3 + ' minutos a una temperatura correcta de ' + ej2.ex2(times3) +'ºC', () => {});
});
