// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2060 - birthYear;
console.log(calcAge(1984));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 23, 25, 27, 29, 1]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem # 2
//Merging two arrays using MDN and concat function

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    debugger;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 23, 25, 27, 29, 1]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Problem: Convert celsius to Kelvin

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIX THE BUG
    //value: Number(prompt('Degrees celsius: ')),
    value: 10,
  };
  // B) FIND THE BUG
  console.table(measurement);
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());
*/

//CODING CHALLENGE # 1

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degree centigrade in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
