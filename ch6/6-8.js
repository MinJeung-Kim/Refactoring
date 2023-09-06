export function readingsOutsideRange(station, range) {
  // 해당 온도(temp)가 range에 포함이 되지 않는 것들만 필터링.
  return station.readings.filter((r) => !range.contains(r.temp));
}

export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  // 외부에서 사용하려면 get 함수 사용.
  get min() {
    return this.#min;
  }
  get max() {
    return this.#max;
  }

  contains(number){
    return number >= this.#min && number <= this.#max 
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" }, 
  ],
};

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);
