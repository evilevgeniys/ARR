function getPipesParameters() {
  let array = [];

  function getParametrs(){
    let pipe = array.find(item => item.cons == consump);
    if(pipe !== undefined){
      //выводим значения скорости и удельного сопротивления
      document.getElementById('pipe.speed').innerHTML = pipe.speed;
      document.getElementById('pipe.res').innerHTML = pipe.res;
    }
    else {
      //проверяем - больше ли значение расхода, чем последний элемент в массиве
      if(consump > array[array.length - 1].cons){
        //выскакивает предупреждение о том, что нужно взять больший диаметр
        alert('Выберите больший диаметр!');
      } 
      else if(consump < array[0].cons){
        alert('Выберите меньший диаметр!');
      }
      else {
        for (let i = 0; consump > array[i].cons; i++){
          let j = i + 1;
          if(consump < array[j].cons){
            //Проводим интерполяцию;
            let speed = array[i].speed + (array[j].speed - array[i].speed) * (consump - array[i].cons) / (array[j].cons - array[i].cons);
            let res = array[i].res + (array[j].res - array[i].res) * (consump - array[i].cons) / (array[j].cons - array[i].cons);
            //выводим значения скорости и удельного сопротивления
            document.getElementById('pipe.speed').innerHTML = speed.toFixed(3);
            document.getElementById('pipe.res').innerHTML = res.toFixed(3);
          }
        }
      }
    }
  }

  //считываем выбранный тип трубы
  let pipeId = document.getElementById("pipes").value;
  console.log(pipeId);

  //считываем выбранный диаметр трубы
  let diameterId = document.getElementById("diameter").value;
  console.log(diameterId);

  //считываем введенное значение расхода
  let consump = document.getElementById('consumption').value;
  console.log(consump);
  
  switch(pipeId) {
    case 'poliprop':
      switch(diameterId) {
        case "1" :
             array = [
            {cons: 4.3, speed: 0.01, res: 2},
            {cons: 8.6, speed: 0.03, res: 3},
            {cons: 17.2, speed: 0.06, res: 6},
            {cons: 25.8, speed: 0.08, res: 10},
            {cons: 34.4, speed:  0.11, res: 25},
            {cons: 43, speed: 0.14, res: 36},
            {cons: 51.6, speed:  0.17, res: 49},
            {cons: 60.2, speed:  0.19, res: 64},
            {cons: 68.8, speed:  0.22, res: 80},
            {cons: 77.4, speed:  0.25, res: 98},
            {cons: 86, speed:  0.28, res: 118},
            {cons: 94.6, speed:  0.3, res: 139},
            {cons: 103.2, speed:  0.33, res: 161},
            {cons: 111.8, speed:  0.38, res: 185},
            {cons: 120.4, speed:  0.39, res: 210}
          ]

          break;

          case "2":
            array = [
            {cons: 4.3, speed: 0.01, res: 1},
            {cons: 8.6, speed: 0.02	, res: 1},
            {cons: 17.2, speed: 0.04, res: 3},
            {cons: 25.8, speed: 0.05, res: 4},
            {cons: 34.4, speed: 0.07, res: 5},
            {cons: 43, speed: 0.09, res: 13},
            {cons: 51.6, speed: 0.11, res: 18},
            {cons: 60.2, speed: 0.12, res: 23},
            {cons: 68.8, speed: 0.14, res: 29},
            {cons: 77.4, speed: 0.16, res: 35},
            {cons: 86, speed: 0.18, res: 42},
            {cons: 94.6, speed: 0.2	, res: 49},
            {cons: 103.2, speed: 0.21, res: 57},
            {cons: 111.8, speed: 0.23, res: 66},
            {cons: 120.4, speed: 0.25, res: 74},
            {cons: 129, speed: 0.27, res: 84},
            {cons: 137.6, speed: 0.29, res: 94},
            {cons: 146.2, speed: 0.30, res: 104},
            {cons: 154.8, speed: 0.32, res: 115},
            {cons: 163.4, speed: 0.34, res: 126},
            {cons: 172, speed: 0.36, res: 138},
            {cons: 180.6, speed: 0.37, res: 150},
            {cons: 189.2, speed: 0.39, res: 162},
            {cons: 197.8, speed: 0.41, res: 175},
            {cons: 206.4, speed: 0.43, res: 189},
            {cons: 215, speed: 0.45, res: 203}
            ]
            break;

          case '3':
              array = [
              {cons: 8.6, speed: 0.01, res: 1},
              {cons: 17.2, speed: 0.02, res: 1},
              {cons: 25.8, speed: 0.03, res: 2},
              {cons: 34.4, speed: 0.05, res: 2},
              {cons: 43, speed: 0.06, res: 3},
              {cons: 51.6, speed: 0.07, res: 6},
              {cons: 60.2, speed: 0.08, res: 8},
              {cons: 68.8, speed: 0.09, res: 10},
              {cons: 77.4, speed: 0.10, res: 12},
              {cons: 86, speed: 0.11, res: 14},
              {cons: 94.6, speed: 0.12, res: 17},
              {cons: 103.2, speed: 0.14, res: 19},
              {cons: 111.8, speed: 0.15, res: 22},
              {cons: 120.4, speed: 0.16, res: 25},
              {cons: 129, speed: 0.17, res: 28},
              {cons: 137.6, speed: 0.18, res: 32},
              {cons: 146.2, speed: 0.19, res: 35},
              {cons: 154.8, speed: 0.20, res: 39},
              {cons: 163.4, speed: 0.21, res: 43},
              {cons: 172, speed: 0.23, res: 47},
              {cons: 180.6, speed: 0.24, res: 51},
              {cons: 189.2, speed: 0.25, res: 55},
              {cons: 197.8, speed: 0.26, res: 59},
              {cons: 206.4, speed: 0.27, res: 64},
              {cons: 215, speed: 0.28, res: 68},
              {cons: 223.6, speed: 0.29, res: 73},
              {cons: 232.2, speed: 0.3, res: 78},
              {cons: 240.8, speed: 0.32, res: 83},
              {cons: 249.4, speed: 0.33, res: 89},
              {cons: 258, speed: 0.34, res: 94},
              {cons: 266.6, speed: 0.35, res: 99},
              {cons: 275.2, speed: 0.36, res: 105},
              {cons: 283.8, speed: 0.37, res: 111},
              {cons: 292.4, speed: 0.38, res: 117},
              {cons: 301, speed: 0.39, res: 123},
              {cons: 309.6, speed: 0.41, res: 129},
              {cons: 318.2, speed: 0.42, res: 135},
              {cons: 326.8, speed: 0.43, res: 142},
              {cons: 335.4, speed: 0.44, res: 148},
              {cons: 344, speed: 0.45, res: 155},
              {cons: 352.6, speed: 0.46, res: 162},
              {cons: 361.2, speed: 0.47, res: 169},
              {cons: 369.8, speed: 0.49, res: 176},
              {cons: 378.4, speed: 0.5, res: 183},
              {cons: 387, speed: 0.51, res: 190},
              {cons: 395.6, speed: 0.52, res: 198},
              {cons: 404.2, speed: 0.53, res: 205}
            ]
            break;

          case '4':
              array = [
              {cons: 25.8, speed: 0.02, res: 1},
              {cons: 34.4, speed: 0.03, res: 1},
              {cons: 43, speed: 0.03, res: 1},
              {cons: 51.6, speed: 0.04, res: 1},
              {cons: 60.2, speed: 0.05, res: 3},
              {cons: 68.8, speed: 0.06, res: 3},
              {cons: 77.4, speed: 0.06, res: 4},
              {cons: 86, speed: 0.07, res: 5},
              {cons: 94.6, speed: 0.08, res: 5},
              {cons: 103.2, speed: 0.08, res: 6},
              {cons: 111.8, speed: 0.09, res:	7},
              {cons: 120.4, speed: 0.1, res: 8},
              {cons: 129, speed: 0.1, res: 9},
              {cons: 137.6, speed: 0.11, res: 10},
              {cons: 146.2, speed: 0.12, res:	11},
              {cons: 154.8, speed: 0.12, res:	12},
              {cons: 163.4, speed: 0.13, res:	13},
              {cons: 172, speed: 0.14, res: 15},
              {cons: 180.6, speed: 0.15, res:	16},
              {cons: 189.2, speed: 0.15, res:	17},
              {cons: 197.8, speed: 0.16, res:	19},
              {cons: 206.4, speed: 0.17, res:	20},
              {cons: 215, speed: 0.17, res: 22},
              {cons: 223.6, speed: 0.18, res:	23},
              {cons: 232.2, speed: 0.19, res:	25},
              {cons: 240.8, speed: 0.19, res:	26},
              {cons: 249.4, speed: 0.2, res:	28},
              {cons: 258, speed: 0.21, res: 30},
              {cons: 266.6, speed: 0.21, res:	31},
              {cons: 275.2, speed: 0.22, res:	33},
              {cons: 283.8, speed: 0.23, res:	35},
              {cons: 292.4, speed: 0.24, res:	37},
              {cons: 301, speed: 0.24, res: 39},
              {cons: 309.6, speed: 0.25, res:	40},
              {cons: 318.2, speed: 0.26, res:	42},
              {cons: 326.8, speed: 0.26, res:	44},
              {cons: 335.4, speed: 0.27, res:	46},
              {cons: 344, speed: 0.28, res: 49},
              {cons: 352.6, speed: 0.28, res:	51},
              {cons: 361.2, speed: 0.29, res:	53},
              {cons: 369.8, speed: 0.3, res: 55},
              {cons: 378.4, speed: 0.3, res: 57},
              {cons: 387, speed: 0.31, res: 60},
              {cons: 395.6, speed: 0.32, res:	62},
              {cons: 404.2, speed: 0.33, res:	64},
              {cons: 412.8, speed: 0.33, res:	67},
              {cons: 421.4, speed: 0.34, res:	69},
              {cons: 430, speed: 0.35, res: 72},
              {cons: 473, speed: 0.38, res: 85},
              {cons: 516, speed: 0.41, res: 98},
              {cons: 559, speed: 0.45, res: 113},
              {cons: 602, speed: 0.48, res: 129},
              {cons: 645, speed: 0.52, res: 146},
              {cons: 688, speed: 0.55, res: 163},
              {cons: 731, speed: 0.59, res: 181},
              {cons: 774, speed: 0.62, res: 201}
            ]
            break;

          case '5':
              array = [
              {cons: 60.2, speed: 0.03, res: 1},
              {cons: 68.8, speed: 0.04, res: 1},
              {cons: 77.4, speed: 0.04, res: 1},
              {cons: 86, speed: 0.04, res: 2},
              {cons: 94.6, speed: 0.05, res: 2},
              {cons: 103.2, speed: 0.05, res: 2},
              {cons: 111.8, speed: 0.06, res: 2},
              {cons: 120.4, speed: 0.06, res: 3},
              {cons: 129, speed: 0.07, res: 3},
              {cons: 137.6, speed: 0.07, res: 3},
              {cons: 146.2, speed: 0.07, res: 4},
              {cons: 154.8, speed: 0.08, res: 4},
              {cons: 163.4, speed: 0.08, res: 5},
              {cons: 172, speed: 0.09, res: 5},
              {cons: 180.6, speed: 0.09, res: 5},
              {cons: 189.2, speed: 0.1, res: 6},
              {cons: 197.8, speed: 0.1, res: 6},
              {cons: 206.4, speed: 0.11, res: 7},
              {cons: 215, speed: 0.11, res: 7},
              {cons: 223.6, speed: 0.11, res: 8},
              {cons: 232.2, speed: 0.12, res: 8},
              {cons: 240.8, speed: 0.12, res: 9},
              {cons: 249.4, speed: 0.13, res: 10},
              {cons: 258, speed: 0.13, res: 10},
              {cons: 266.6, speed: 0.14, res: 11},
              {cons: 275.2, speed: 0.14, res: 11},
              {cons: 283.8, speed: 0.14, res: 12},
              {cons: 292.4, speed: 0.15, res: 13},
              {cons: 301, speed: 0.15, res: 13},
              {cons: 309.6, speed: 0.16, res: 14},
              {cons: 318.2, speed: 0.16, res: 15},
              {cons: 326.8, speed: 0.17, res: 15},
              {cons: 335.4, speed: 0.17, res: 16},
              {cons: 344, speed: 0.18, res: 17},
              {cons: 352.6, speed: 0.18, res: 17},
              {cons: 361.2, speed: 0.18, res: 18},
              {cons: 369.8, speed: 0.19, res: 19},
              {cons: 378.4, speed: 0.19, res: 20},
              {cons: 387, speed: 0.2, res: 20},
              {cons: 395.6, speed: 0.2, res: 21},
              {cons: 404.2, speed: 0.21, res: 22},
              {cons: 412.8, speed: 0.21, res: 23},
              {cons: 421.4, speed: 0.22, res: 24},
              {cons: 430, speed: 0.22, res: 24},
              {cons: 473, speed: 0.24, res: 29},
              {cons: 516, speed: 0.26, res: 34},
              {cons: 559, speed: 0.29, res: 39},
              {cons: 602, speed: 0.31, res: 44},
              {cons: 645, speed: 0.33, res: 50},
              {cons: 688, speed: 0.35, res: 55},
              {cons: 731, speed: 0.37, res: 62},
              {cons: 774, speed: 0.4, res: 68},
              {cons: 817, speed: 0.42, res: 75},
              {cons: 860, speed: 0.44, res: 82},
              {cons: 946, speed: 0.48, res: 97},
              {cons: 1032, speed: 0.53, res: 113}
            ]
            break;
        }

        getParametrs();
      break;
    
    case 'polietil':
      switch(diameterId){
          case '1':
              array = [
              {cons: 4.3, speed: 0.024, res: 4.3},
              {cons: 8.6, speed: 0.049, res: 8.5},
              {cons: 12.9, speed: 0.073, res: 12.8},
              {cons: 17.2, speed: 0.098, res: 17},
              {cons: 21.5, speed: 0.122, res: 26.3},
              {cons: 25.8, speed: 0.147, res: 48.3},
              {cons: 30.1, speed: 0.171, res: 73.4},
              {cons: 34.4, speed: 0.196, res: 93.3},
              {cons: 38.7, speed: 0.22, res: 114.5},
              {cons: 43.0, speed: 0.245, res: 137.5},
              {cons: 47.3, speed: 0.269, res: 162.4},
              {cons: 51.6, speed: 0.293, res: 189.1},
              {cons: 55.9, speed: 0.318, res: 217.6},
              {cons: 60.2, speed: 0.342, res: 247.9},
              {cons: 64.5, speed: 0.367, res: 280},
              {cons: 68.8, speed: 0.391, res: 310.8},
              {cons: 73.1, speed: 0.416, res: 349.3},
              {cons: 77.4, speed: 0.44, res: 386.5},
              {cons: 81.7, speed: 0.46, res: 425.5},
              {cons: 86.0, speed: 0.489, res: 460.2},
              {cons: 94.6, speed: 0.538, res: 552.5},
              {cons: 103.2, speed: 0.587, res: 645.6},
              {cons: 111.8, speed: 0.636, res: 745.2},
              {cons: 120.4, speed: 0.685, res: 851.4},
              {cons: 129.0, speed: 0.734, res: 964.2}
            ]

            break;

          case '2':
              array = [
              {cons: 12.9, speed: 0.05, res: 6},
              {cons: 17.2, speed: 0.06, res: 10},
              {cons: 21.5, speed: 0.08, res: 15},
              {cons: 25.8, speed: 0.09, res: 20},
              {cons: 30.1, speed: 0.11, res: 26},
              {cons: 34.4, speed: 0.13, res: 33},
              {cons: 38.7, speed: 0.14, res: 40},
              {cons: 43.0, speed: 0.16, res: 48},
              {cons: 47.3, speed: 0.17, res: 56},
              {cons: 51.6, speed: 0.19, res: 65},
              {cons: 55.9, speed: 0.2, res: 74},
              {cons: 60.2, speed: 0.22, res: 85},
              {cons: 64.5, speed: 0.23, res: 95},
              {cons: 68.8, speed: 0.25, res: 106},
              {cons: 73.1, speed: 0.27, res: 118},
              {cons: 77.4, speed: 0.28, res: 130},
              {cons: 81.7, speed: 0.3, res: 143},
              {cons: 86.0, speed: 0.31, res: 156},
              {cons: 94.6, speed: 0.34, res: 185},
              {cons: 103.2, speed: 0.38, res: 215},
              {cons: 111.8, speed: 0.41, res: 247},
              {cons: 120.4, speed: 0.44, res: 281},
              {cons: 129.0, speed: 0.47, res: 318},
              {cons: 137.6, speed: 0.5, res: 356},
              {cons: 146.2, speed: 0.53, res: 396},
              {cons: 154.8, speed: 0.56, res: 438},
              {cons: 163.4, speed: 0.59, res: 482},
              {cons: 172.0, speed: 0.63, res: 528},
              {cons: 189.2, speed: 0.69, res: 625},
              {cons: 206.4, speed: 0.75, res: 720},
              {cons: 223.6, speed: 0.81, res: 842},
              {cons: 240.8, speed: 0.88, res: 961},
              {cons: 258, speed: 0.94, res: 1113},
              {cons: 279.5, speed: 1.02, res: 1256},
              {cons: 301.0, speed: 1.10, res: 1435},
              {cons: 322.5, speed: 1.17, res: 1626},
              {cons: 344, speed: 1.25, res: 1827}
            ]
            break;
            
          case '3':
              array = [
              {cons: 12.9, speed: 0.02, res: 1},
              {cons: 17.2, speed: 0.03, res: 2},
              {cons: 21.5, speed: 0.04, res: 3},
              {cons: 25.8, speed: 0.05, res: 4},
              {cons: 30.1, speed: 0.06, res: 5},
              {cons: 34.4, speed: 0.065, res: 7},
              {cons: 38.7, speed: 0.07, res: 8},
              {cons: 43.0, speed: 0.08, res: 10},
              {cons: 47.3, speed: 0.09, res: 12},
              {cons: 51.6, speed: 0.1, res: 13},
              {cons: 55.9, speed: 0.105, res: 15},
              {cons: 60.2, speed: 0.11, res: 17},
              {cons: 64.5, speed: 0.12, res: 16},
              {cons: 68.8, speed: 0.13, res: 22},
              {cons: 73.1, speed: 0.14, res: 24},
              {cons: 77.4, speed: 0.145, res: 26},
              {cons: 81.7, speed: 0.15, res: 29},
              {cons: 86.0, speed: 0.16, res: 32},
              {cons: 94.6, speed: 0.18, res: 37},
              {cons: 103.2, speed: 0.19, res: 43},
              {cons: 111.8, speed: 0.21, res: 50},
              {cons: 120.4, speed: 0.22, res: 57},
              {cons: 129.0, speed: 0.24, res: 64},
              {cons: 137.6, speed: 0.26, res: 71},
              {cons: 146.2, speed: 0.27, res: 79},
              {cons: 154.8, speed: 0.29, res: 88},
              {cons: 163.4, speed: 0.3, res: 96},
              {cons: 172.0, speed: 0.32, res: 105},
              {cons: 189.2, speed: 0.35, res: 124},
              {cons: 206.4, speed: 0.38, res: 145},
              {cons: 223.6, speed: 0.42, res: 167},
              {cons: 240.8, speed: 0.45, res: 190},
              {cons: 258, speed: 0.48, res: 215},
              {cons: 279.5, speed: 0.52, res: 247},
              {cons: 301.0, speed: 0.56, res: 282},
              {cons: 322.5, speed: 0.6, res: 327},
              {cons: 344, speed: 0.64, res: 358},
              {cons: 365.5, speed: 0.67, res: 399},
              {cons: 387, speed: 0.72, res: 442},
              {cons: 408.5, speed: 0.76, res: 487},
              {cons: 430.0, speed: 0.8, res: 533},
              {cons: 473, speed: 0.89, res: 633},
              {cons: 516, speed: 0.96, res: 740},
              {cons: 559, speed: 1.04, res: 856},
              {cons: 602, speed: 1.12, res: 978},
              {cons: 645, speed: 1.19, res: 1109},
              {cons: 688, speed: 1.28, res: 1247}
            ]
            break;

          case '4':
              array = [
              {cons: 12.9, speed: 0.03, res: 2},
              {cons: 17.2, speed: 0.04, res: 2},
              {cons: 21.5, speed: 0.05, res: 3},
              {cons: 25.8, speed: 0.06, res: 4},
              {cons: 30.1, speed: 0.07, res: 5},
              {cons: 34.4, speed: 0.07, res: 6},
              {cons: 38.7, speed: 0.08, res: 9},
              {cons: 43.0, speed: 0.09, res: 12},
              {cons: 47.3, speed: 0.1, res: 16},
              {cons: 51.6, speed: 0.1, res: 19},
              {cons: 55.9, speed: 0.12, res: 22},
              {cons: 60.2, speed: 0.13, res: 24},
              {cons: 64.5, speed: 0.14, res: 28},
              {cons: 68.8, speed: 0.15, res: 31},
              {cons: 73.1, speed: 0.16, res: 34},
              {cons: 77.4, speed: 0.17, res: 38},
              {cons: 81.7, speed: 0.18, res: 41},
              {cons: 86.0, speed: 0.19, res: 45},
              {cons: 94.6, speed: 0.2, res: 54},
              {cons: 103.2, speed: 0.2, res: 62},
              {cons: 111.8, speed: 0.24, res: 72},
              {cons: 120.4, speed: 0.26, res: 82},
              {cons: 129.0, speed: 0.28, res: 92},
              {cons: 137.6, speed: 0.3, res: 103},
              {cons: 146.2, speed: 0.32, res: 115},
              {cons: 154.8, speed: 0.33, res: 127},
              {cons: 163.4, speed: 0.35, res: 140},
              {cons: 172.0, speed: 0.37, res: 153},
              {cons: 189.2, speed: 0.41, res: 182},
              {cons: 206.4, speed: 0.45, res: 212},
              {cons: 223.6, speed: 0.48, res: 245},
              {cons: 240.8, speed: 0.52, res: 280},
              {cons: 258, speed: 0.56, res: 317},
              {cons: 279.5, speed: 0.6, res: 366},
              {cons: 301.0, speed: 0.65, res: 418},
              {cons: 322.5, speed: 0.7, res: 473},
              {cons: 344, speed: 0.74, res: 532},
              {cons: 365.5, speed: 0.79, res: 594},
              {cons: 387, speed: 0.83, res: 659},
              {cons: 408.5, speed: 0.88, res: 727},
              {cons: 430.0, speed: 0.93, res: 799},
              {cons: 473, speed: 1.02, res: 951},
              {cons: 516, speed: 1.11, res: 1115},
              {cons: 559, speed: 1.20, res: 1292},
              {cons: 602, speed: 1.90, res: 1481}
            ]
            break;

          case '5':
              array = [
              {cons: 43.0, speed: 0.05, res: 3},
              {cons: 51.6, speed: 0.06, res: 4},
              {cons: 60.2, speed: 0.07, res: 5},
              {cons: 68.8, speed: 0.08, res: 7},
              {cons: 77.4, speed: 0.09, res: 8},
              {cons: 86.0, speed: 0.10, res: 10},
              {cons: 103.2, speed: 0.12, res: 13},
              {cons: 120.4, speed: 0.14, res: 17},
              {cons: 129.0, speed: 0.145, res: 19},
              {cons: 137.6, speed: 0.15, res: 22},
              {cons: 146.2, speed: 0.16, res: 24},
              {cons: 154.8, speed: 0.17, res: 27},
              {cons: 163.4, speed: 0.18, res: 29},
              {cons: 172.0, speed: 0.19, res: 32},
              {cons: 189.2, speed: 0.21, res: 38},
              {cons: 206.4, speed: 0.23, res: 44},
              {cons: 223.6, speed: 0.25, res: 50},
              {cons: 240.8, speed: 0.27, res: 57},
              {cons: 258, speed: 0.29, res: 65},
              {cons: 279.5, speed: 0.31, res: 74},
              {cons: 301.0, speed: 0.34, res: 85},
              {cons: 322.5, speed: 0.36, res: 96},
              {cons: 344, speed: 0.39, res: 107},
              {cons: 365.5, speed: 0.41, res: 119},
              {cons: 387, speed: 0.43, res: 132},
              {cons: 408.5, speed: 0.46, res: 145},
              {cons: 430.0, speed: 0.48, res: 159},
              {cons: 473, speed: 0.53, res: 188},
              {cons: 516, speed: 0.58, res: 220},
              {cons: 559, speed: 0.63, res: 254},
              {cons: 602, speed: 0.68, res: 289},
              {cons: 645, speed: 0.72, res: 328},
              {cons: 688, speed: 0.77, res: 368},
              {cons: 731, speed: 0.82, res: 410},
              {cons: 774, speed: 0.87, res: 455},
              {cons: 817, speed: 0.92, res: 501}
            ]
            break;

          case '6':
              array = [
              {cons: 86.0, speed: 0.06, res: 3},
              {cons: 103.2, speed: 0.07, res: 4},
              {cons: 120.4, speed: 0.08, res: 5},
              {cons: 129.0, speed: 0.09, res: 6},
              {cons: 137.6, speed: 0.09, res: 7},
              {cons: 146.2, speed: 0.1, res: 7},
              {cons: 154.8, speed: 0.1, res: 8},
              {cons: 163.4, speed: 0.11, res: 9},
              {cons: 172.0, speed: 0.12, res: 10},
              {cons: 89.2, speed: 0.13, res: 11},
              {cons: 206.4, speed: 0.14, res: 13},
              {cons: 223.6, speed: 0.15, res: 15},
              {cons: 240.8, speed: 0.16, res: 17},
              {cons: 258, speed: 0.17, res: 20},
              {cons: 279.5, speed: 0.19, res: 22},
              {cons: 301.0, speed: 0.2, res: 26},
              {cons: 322.5, speed: 0.22, res: 30},
              {cons: 344, speed: 0.23, res: 32},
              {cons: 365.5, speed: 0.25, res: 36},
              {cons: 387, speed: 0.26, res: 40},
              {cons: 408.5, speed: 0.28, res: 44},
              {cons: 430.0, speed: 0.29, res: 48},
              {cons: 473, speed: 0.32, res: 57},
              {cons: 516, speed: 0.35, res: 67},
              {cons: 559, speed: 0.38, res: 77},
              {cons: 602, speed: 0.41, res: 88},
              {cons: 645, speed: 0.44, res: 99},
              {cons: 688, speed: 0.47, res: 111},
              {cons: 731, speed: 0.49, res: 124},
              {cons: 774, speed: 0.52, res: 138},
              {cons: 817, speed: 0.55, res: 152}
            ]
            break;
        }

        getParametrs();
      break;
    
    case 'met':
      switch(diameterId){
        case '1':
            array = [
            {cons: 12.9, speed: 0.05, res: 6},
            {cons: 17.2, speed: 0.06, res: 10},
            {cons: 21.5, speed: 0.08, res: 15},
            {cons: 25.8, speed: 0.09, res: 20},
            {cons: 30.1, speed: 0.11, res: 26},
            {cons: 34.4, speed: 0.13, res: 33},
            {cons: 38.7, speed: 0.14, res: 40},
            {cons: 43, speed: 0.16, res: 48},
            {cons: 47.3, speed: 0.17, res: 56},
            {cons: 51.6, speed: 0.19, res: 65},
            {cons: 55.9, speed: 0.2, res: 74},
            {cons: 60.2, speed: 0.22, res: 85},
            {cons: 64.5, speed: 0.23, res: 95},
            {cons: 68.8, speed: 0.25, res: 106},
            {cons: 73.1, speed: 0.27, res: 118},
            {cons: 77.4, speed: 0.28, res: 130},
            {cons: 81.7, speed: 0.3, res: 143},
            {cons: 86, speed: 0.31, res: 156},
            {cons: 94.6, speed: 0.34, res: 185},
            {cons: 103.2, speed: 0.38, res: 215},
            {cons: 111.8, speed: 0.41, res: 247},
            {cons: 120.4, speed: 0.44, res: 281},
            {cons: 129, speed: 0.47, res: 318},
            {cons: 137.6, speed: 0.5, res: 356},
            {cons: 146.2, speed: 0.53, res: 396},
            {cons: 154.8, speed: 0.56, res: 438},
            {cons: 163.4, speed: 0.59, res: 482},
            {cons: 172, speed: 0.63, res: 528},
            {cons: 189.2, speed: 0.69, res: 625},
            {cons: 206.4, speed: 0.75, res: 730},
            {cons: 223.6, speed: 0.81, res: 842},
            {cons: 240.8, speed: 0.88, res: 961},
            {cons: 258, speed: 0.94, res: 1113},
            {cons: 279.5, speed: 1.02, res: 1256}
          ]
          break;

        case '2':
            array = [
            {cons: 12.9, speed: 0.03, res: 3},
            {cons: 17.2, speed: 0.04, res: 3},
            {cons: 21.5, speed: 0.05, res: 4},
            {cons: 25.8, speed: 0.07, res: 5},
            {cons: 30.1, speed: 0.08, res: 6},
            {cons: 34.4, speed: 0.09, res: 10},
            {cons: 38.7, speed: 0.1, res: 14},
            {cons: 43, speed: 0.11, res: 19},
            {cons: 47.3, speed: 0.12, res: 24},
            {cons: 51.6, speed: 0.13, res: 27},
            {cons: 55.9, speed: 0.14, res: 31},
            {cons: 60.2, speed: 0.15, res: 36},
            {cons: 64.5, speed: 0.16, res: 40},
            {cons: 68.8, speed: 0.17, res: 45},
            {cons: 73.1, speed: 0.19, res: 50},
            {cons: 77.4, speed: 0.2, res: 55},
            {cons: 81.7, speed: 0.21, res: 61},
            {cons: 86, speed: 0.22, res: 66},
            {cons: 94.6, speed: 0.24, res: 79},
            {cons: 103.2, speed: 0.26, res: 91},
            {cons: 111.8, speed: 0.28, res: 105},
            {cons: 120.4, speed: 0.3, res: 120},
            {cons: 129, speed: 0.33, res: 135},
            {cons: 137.6, speed: 0.35, res: 152},
            {cons: 146.2, speed: 0.37, res: 169},
            {cons: 154.8, speed: 0.39, res: 187},
            {cons: 163.4, speed: 0.41, res: 206},
            {cons: 172, speed: 0.44, res: 226},
            {cons: 189.2, speed: 0.48, res: 268},
            {cons: 206.4, speed: 0.52, res: 313},
            {cons: 223.6, speed: 0.57, res: 361},
            {cons: 240.8, speed: 0.61, res: 412},
            {cons: 258, speed: 0.65, res: 467},
            {cons: 279.5, speed: 0.71, res: 540}
          ]
          break;
          
        case '3':
          array = [
          {cons: 25.8, speed: 0.04, res: 2},
          {cons: 30.1, speed: 0.04, res: 2},
          {cons: 34.4, speed: 0.05, res: 2},
          {cons: 38.7, speed: 0.06, res: 3},
          {cons: 43, speed: 0.06, res: 3},
          {cons: 47.3, speed: 0.07, res: 5},
          {cons: 51.6, speed: 0.07, res: 6},
          {cons: 55.9, speed: 0.08, res: 8},
          {cons: 60.2, speed: 0.09, res: 9},
          {cons: 64.5, speed: 0.09, res: 10},
          {cons: 68.8, speed: 0.1, res: 12},
          {cons: 73.1, speed: 0.1, res: 13},
          {cons: 77.4, speed: 0.11, res: 14},
          {cons: 81.7, speed: 0.12, res: 15},
          {cons: 86, speed: 0.12, res: 17},
          {cons: 94.6, speed: 0.13, res: 20},
          {cons: 103.2, speed: 0.15, res: 23},
          {cons: 111.8, speed: 0.16, res: 27},
          {cons: 120.4, speed: 0.17, res: 30},
          {cons: 129, speed: 0.18, res: 34},
          {cons: 137.6, speed: 0.2, res: 38},
          {cons: 146.2, speed: 0.21, res: 43},
          {cons: 154.8, speed: 0.22, res: 47},
          {cons: 163.4, speed: 0.23, res: 52},
          {cons: 172, speed: 0.25, res: 57},
          {cons: 189.2, speed: 0.27, res: 67},
          {cons: 206.4, speed: 0.29, res: 78},
          {cons: 223.6, speed: 0.32, res: 90},
          {cons: 240.8, speed: 0.34, res: 103},
          {cons: 258, speed: 0.37, res: 116},
          {cons: 279.5, speed: 0.4, res: 134},
          {cons: 301, speed: 0.43, res: 153},
          {cons: 322.5, speed: 0.46, res: 173},
          {cons: 344, speed: 0.49, res: 194},
          {cons: 365.5, speed: 0.52, res: 216},
          {cons: 387, speed: 0.55, res: 240},
          {cons: 408.5, speed: 0.56, res: 264},
          {cons: 430, speed: 0.61, res: 290},
          {cons: 473, speed: 0.67, res: 344},
          {cons: 516, speed: 0.73, res: 403}
          ]
          break;

        case '4':
            array = [
            {cons: 25.8, speed: 0.04, res: 1},
            {cons: 30.1, speed: 0.05, res: 2},
            {cons: 34.4, speed: 0.06, res: 3},
            {cons: 38.7, speed: 0.06, res: 4},
            {cons: 43, speed: 0.07, res: 5},
            {cons: 51.6, speed: 0.08, res: 6},
            {cons: 60.2, speed: 0.09, res: 7},
            {cons: 68.8, speed: 0.09, res: 8},
            {cons: 77.4, speed: 0.1, res: 9},
            {cons: 86, speed: 0.11, res: 11},
            {cons: 94.6, speed: 0.12, res: 12},
            {cons: 103.2, speed: 0.13, res: 13},
            {cons: 111.8, speed: 0.13, res: 15},
            {cons: 120.4, speed: 0.14, res: 16},
            {cons: 129, speed: 0.15, res: 18},
            {cons: 137.6, speed: 0.16, res: 20},
            {cons: 146.2, speed: 0.17, res: 23},
            {cons: 154.8, speed: 0.19, res: 27},
            {cons: 163.4, speed: 0.2, res: 31},
            {cons: 172, speed: 0.22, res: 35},
            {cons: 189.2, speed: 0.24, res: 40},
            {cons: 206.4, speed: 0.25, res: 46},
            {cons: 223.6, speed: 0.27, res: 52},
            {cons: 240.8, speed: 0.29, res: 59},
            {cons: 258, speed: 0.31, res: 66},
            {cons: 279.5, speed: 0.33, res: 74},
            {cons: 301, speed: 0.34, res: 81},
            {cons: 322.5, speed: 0.37, res: 90},
            {cons: 344, speed: 0.39, res: 98},
            {cons: 365.5, speed: 0.43, res: 117},
            {cons: 387, speed: 0.47, res: 136},
            {cons: 408.5, speed: 0.51, res: 157},
            {cons: 430, speed: 0.55, res: 180},
            {cons: 473, speed: 0.59, res: 204},
            {cons: 516, speed: 0.67, res: 256},
            {cons: 559, speed: 0.74, res: 313},
            {cons: 602, speed: 0.86, res: 409}
          ]
          break;

        case '5':
            array = [
            {cons: 301, speed: 0.16, res: 15},
            {cons: 322.5, speed: 0.17, res: 17},
            {cons: 344, speed: 0.18, res: 19},
            {cons: 365.5, speed: 0.20, res: 21},
            {cons: 387, speed: 0.21, res: 23},
            {cons: 408.5, speed: 0.22, res: 25},
            {cons: 430, speed: 0.23, res: 28},
            {cons: 473, speed: 0.26, res: 32},
            {cons: 516, speed: 0.28, res: 38},
            {cons: 559, speed: 0.3, res: 44},
            {cons: 602, speed: 0.32, res: 50},
            {cons: 645, speed: 0.35, res: 57},
            {cons: 731, speed: 0.4, res: 72},
            {cons: 817, speed: 0.44, res: 87},
            {cons: 946, speed: 0.5, res: 114},
            {cons: 1076.4, speed: 0.58, res: 143},
            {cons: 1288.8, speed: 0.7, res: 200},
            {cons: 1720.8, speed: 0.93, res: 337},
            {cons: 2149.2, speed: 1.16, res: 509}
          ]
          break;

        case '6':
            array = [
            {cons: 301, speed: 0.1, res: 5},
            {cons: 322.5, speed: 0.1, res: 5},
            {cons: 344, speed: 0.11, res: 6},
            {cons: 365.5, speed: 0.12, res: 6},
            {cons: 387, speed: 0.13, res: 7},
            {cons: 408.5, speed: 0.14, res: 8},
            {cons: 430, speed: 0.15, res: 9},
            {cons: 473, speed: 0.16, res: 10},
            {cons: 516, speed: 0.17, res: 12},
            {cons: 559, speed: 0.19, res: 14},
            {cons: 602, speed: 0.2, res: 16},
            {cons: 645, speed: 0.22, res: 18},
            {cons: 731, speed: 0.24, res: 23},
            {cons: 817, speed: 0.27, res: 28},
            {cons: 946, speed: 0.32, res: 36},
            {cons: 1076.4, speed: 0.36, res: 45},
            {cons: 1288.8, speed: 0.43, res:  62},
            {cons: 1720.8, speed: 0.56, res: 106},
            {cons: 2149.2, speed: 0.72, res: 158},
            {cons: 2581.2, speed: 0.86, res: 221},
            {cons: 3438, speed: 1.15, res: 375},
            {cons: 4298.4, speed: 1.44, res: 567}  
          ]
          break;
        }

        getParametrs();
      break;

  }

  
}