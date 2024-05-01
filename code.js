const count_steps = 100;
const elements = [
  {
    "value": 1,
    "name": "Актиний",
    "mark": "Ас",
    "mass_num": 227,
    "period": 69379200.0,
    "full_name": "(227 Ас) Актиний"
  },
  {
    "value": 2,
    "name": "Америций",
    "mark": "Аm",
    "mass_num": 243,
    "period": 24598080000.0,
    "full_name": "(243 Аm) Америций"
  },
  {
    "value": 3,
    "name": "Астат",
    "mark": "At",
    "mass_num": 210,
    "period": 29880.0,
    "full_name": "(210 At) Астат"
  },
  {
    "value": 4,
    "name": "Азот",
    "mark": "N",
    "mass_num": 13,
    "period": 600.0,
    "full_name": "(13 N) Азот"
  },
  {
    "value": 6,
    "name": "Берклий",
    "mark": "Вк",
    "mass_num": 247,
    "period": 31536000000.0,
    "full_name": "(247 Вк) Берклий"
  },
  {
    "value": 7,
    "name": "Висмут",
    "mark": "Bi",
    "mass_num": 209,
    "period": 5.99184e+25,
    "full_name": "(209 Bi) Висмут"
  },
  {
    "value": 8,
    "name": "Железо",
    "mark": "Fe",
    "mass_num": 59,
    "period": 3844368.0,
    "full_name": "(59 Fe) Железо"
  },
  {
    "value": 9,
    "name": "Иридий",
    "mark": "Ir",
    "mass_num": 192,
    "period": 6393600.0,
    "full_name": "(192 Ir) Иридий"
  },
  {
    "value": 10,
    "name": "Йод",
    "mark": "I",
    "mass_num": 131,
    "period": 692988.48,
    "full_name": "(131 I) Йод"
  },
  {
    "value": 11,
    "name": "Калий",
    "mark": "K",
    "mass_num": 40,
    "period": 3935692800000000.0,
    "full_name": "(40 K) Калий"
  },
  {
    "value": 12,
    "name": "Калифорний",
    "mark": "Cf",
    "mass_num": 249,
    "period": 1135296000.0,
    "full_name": "(249 Cf) Калифорний"
  },
  {
    "value": 13,
    "name": "Кадмий",
    "mark": "Cd",
    "mass_num": 113,
    "period": 2.428272e+22,
    "full_name": "(113 Cd) Кадмий"
  },
  {
    "value": 14,
    "name": "Кобальт",
    "mark": "Co",
    "mass_num": 60,
    "period": 16623571.68,
    "full_name": "(60 Co) Кобальт"
  },
  {
    "value": 15,
    "name": "Кюрий",
    "mark": "Cm",
    "mass_num": 247,
    "period": 126144000000000.0,
    "full_name": "(247 Cm) Кюрий"
  },
  {
    "value": 16,
    "name": "Эйнштейний",
    "mark": "Es",
    "mass_num": 254,
    "period": 41472000.0,
    "full_name": "(254 Es) Эйнштейний"
  },
  {
    "value": 17,
    "name": "Фермий",
    "mark": "Fm",
    "mass_num": 253,
    "period": 259200.0,
    "full_name": "(253 Fm) Фермий"
  },
  {
    "value": 18,
    "name": "Фосфор",
    "mark": "P",
    "mass_num": 32,
    "period": 1232064.0,
    "full_name": "(32 P) Фосфор"
  },
  {
    "value": 19,
    "name": "Франций",
    "mark": "Fr",
    "mass_num": 223,
    "period": 1320.0,
    "full_name": "(223 Fr) Франций"
  },
  {
    "value": 20,
    "name": "Фтор",
    "mark": "F",
    "mass_num": 18,
    "period": 6586.26,
    "full_name": "(18 F) Фтор"
  },
  {
    "value": 21,
    "name": "Фтор",
    "mark": "F",
    "mass_num": 21,
    "period": 4.158,
    "full_name": "(21 F) Фтор"
  },
  {
    "value": 22,
    "name": "Лоуренсий",
    "mark": "Lr",
    "mass_num": 257,
    "period": 8.0,
    "full_name": "(257 Lr) Лоуренсий"
  },
  {
    "value": 23,
    "name": "Менделевий",
    "mark": "Md",
    "mass_num": 256,
    "period": 5400.0,
    "full_name": "(256 Md) Менделевий"
  },
  {
    "value": 24,
    "name": "Натрий",
    "mark": "Na",
    "mass_num": 22,
    "period": 8199360.0,
    "full_name": "(22 Na) Натрий"
  },
  {
    "value": 25,
    "name": "Натрий",
    "mark": "Na",
    "mass_num": 24,
    "period": 53852.4,
    "full_name": "(24 Na) Натрий"
  },
  {
    "value": 26,
    "name": "Нептуний",
    "mark": "Np",
    "mass_num": 237,
    "period": 662256000000000.0,
    "full_name": "(237 Np) Нептуний"
  },
  {
    "value": 27,
    "name": "Нобелий",
    "mark": "No",
    "mass_num": 256,
    "period": 8.0,
    "full_name": "(256 No) Нобелий"
  },
  {
    "value": 28,
    "name": "Протактиний",
    "mark": "Pa",
    "mass_num": 231,
    "period": 100915200000.0,
    "full_name": "(231 Pa) Протактиний"
  },
  {
    "value": 29,
    "name": "Прометий",
    "mark": "Pm",
    "mass_num": 147,
    "period": 7884000.0,
    "full_name": "(147 Pm) Прометий"
  },
  {
    "value": 30,
    "name": "Полоний",
    "mark": "Po",
    "mass_num": 210,
    "period": 11957760.0,
    "full_name": "(210 Po) Полоний"
  },
  {
    "value": 31,
    "name": "Полоний",
    "mark": "Po",
    "mass_num": 214,
    "period": 0.16,
    "full_name": "(214 Po) Полоний"
  },
  {
    "value": 32,
    "name": "Плутоний",
    "mark": "Pu",
    "mass_num": 238,
    "period": 276696864.0,
    "full_name": "(238 Pu) Плутоний"
  },
  {
    "value": 33,
    "name": "Плутоний",
    "mark": "Pu",
    "mass_num": 239,
    "period": 76001760000.0,
    "full_name": "(239 Pu) Плутоний"
  },
  {
    "value": 34,
    "name": "Плутоний",
    "mark": "Pu",
    "mass_num": 241,
    "period": 45411840.0,
    "full_name": "(241 Pu) Плутоний"
  },
  {
    "value": 35,
    "name": "Плутоний",
    "mark": "Pu",
    "mass_num": 242,
    "period": 1040688000000.0,
    "full_name": "(242 Pu) Плутоний"
  },
  {
    "value": 36,
    "name": "Радий",
    "mark": "Ra",
    "mass_num": 226,
    "period": 5115139200.0,
    "full_name": "(226 Ra) Радий"
  },
  {
    "value": 37,
    "name": "Радон",
    "mark": "Rn",
    "mass_num": 222,
    "period": 330912.0,
    "full_name": "(222 Rn) Радон"
  },
  {
    "value": 38,
    "name": "Рубидий",
    "mark": "Rb",
    "mass_num": 82,
    "period": 76.0,
    "full_name": "(82 Rb) Рубидий"
  },
  {
    "value": 39,
    "name": "Рубидий",
    "mark": "Rb",
    "mass_num": 87,
    "period": 1.5673392e+17,
    "full_name": "(87 Rb) Рубидий"
  },
  {
    "value": 40,
    "name": "Сера",
    "mark": "S",
    "mass_num": 35,
    "period": 7560864.0,
    "full_name": "(35 S) Сера"
  },
  {
    "value": 41,
    "name": "Технеций",
    "mark": "Tc",
    "mass_num": 99,
    "period": 662256000000.0,
    "full_name": "(99 Tc) Технеций"
  },
  {
    "value": 42,
    "name": "Торий",
    "mark": "Th",
    "mass_num": 232,
    "period": 4.41504e+16,
    "full_name": "(232 Th) Торий"
  },
  {
    "value": 43,
    "name": "Уран",
    "mark": "U",
    "mass_num": 233,
    "period": 501422400000.0,
    "full_name": "(233 U) Уран"
  },
  {
    "value": 44,
    "name": "Уран",
    "mark": "U",
    "mass_num": 234,
    "period": 772632000000.0,
    "full_name": "(234 U) Уран"
  },
  {
    "value": 45,
    "name": "Уран",
    "mark": "U",
    "mass_num": 235,
    "period": 2248516800000000.0,
    "full_name": "(235 U) Уран"
  },
  {
    "value": 46,
    "name": "Уран",
    "mark": "U",
    "mass_num": 238,
    "period": 1.41912e+16,
    "full_name": "(238 U) Уран"
  },
  {
    "value": 47,
    "name": "Уран",
    "mark": "U",
    "mass_num": 240,
    "period": 50400.0,
    "full_name": "(240 U) Уран"
  },
  {
    "value": 48,
    "name": "Углерод",
    "mark": "C",
    "mass_num": 14,
    "period": 17975520000.0,
    "full_name": "(14 C) Углерод"
  },
  {
    "value": 49,
    "name": "Цезий",
    "mark": "Cs",
    "mass_num": 137,
    "period": 94608000.0,
    "full_name": "(137 Cs) Цезий"
  }
];
const k_to_num = {"Секунды": 1, "Часы": 3600, "Сутки": 86400, "Годы": 31536000}
function buildChart() {
    // Получаем все элементы с классом "contain"
    var containers = document.getElementsByClassName("contain");
    
    // Инициализируем массив для данных
    var data = [];
    var time = document.getElementsByClassName("time")[0].value;
    var k_time = document.getElementsByClassName("k_time")[0].value;
    time = parseInt(time) * k_to_num[k_time];
    var one_step = time / count_steps;
    var x_line = []
    for (var j = 0; j < time; j += one_step){
            x_line.push(Math.ceil(j));
    }
    for (var i = 0; i < containers.length; i++) {
        var color = containers[i].getElementsByClassName("color")[0].value;
        var name = containers[i].getElementsByClassName("name")[0].value;
        var count = parseInt(containers[i].getElementsByClassName("count")[0].value);
        var lst = [];
        var period = -100;

        for (var j = 0; j < elements.length; j++){
            if (elements[j]["full_name"] == name) {
                period = elements[j]["period"];
                break;
            }
        }
        // console
        for (var j = 0; j < time; j += one_step){
            lst.push(Math.ceil(count * Math.pow(2, (-j / period))));
        }
    
        data.push({
            label: name,
            borderColor: color,
            borderWidth: 2,
            data: lst
        });
    }
    var chartOptions = {
        };
    
    // Создаем новый элемент canvas для размещения графика
    var canvas = document.createElement("canvas");
    
    // Получаем контейнер, в который будем вставлять график
    var chartContainer = document.getElementById("chart-container");
    chartContainer.innerHTML = "";
    // Вставляем созданный canvas в контейнер
    chartContainer.appendChild(canvas);
    
    // Получаем контекст рисования для canvas
    var ctx = canvas.getContext("2d");
    var dataset = {
            labels: x_line,
            datasets: data
        };
    // Создаем новый график с использованием библиотеки Chart.js
    var myChart = new Chart(ctx, {
        type: 'line', // Здесь можно указать тип графика (линейный, столбчатый и т. д.)
        data: dataset,
        options: chartOptions
    });
    
    myChart.update();
}
document.getElementById("draw").addEventListener("click", buildChart);
