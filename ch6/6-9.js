// 1. 데이터를 묶는 함수(Reading) 생성
export class Reading {
  // 외부에서 이름을 변경하지 못하게 하기 위해 프라이빗으로 생성.
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }
  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  // 4. 데이터와 밀접하게 관련있는 계산
  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  // 5. 6-9-client1.js의 baseCharge함수는 데이터와 밀접하게 관련 있으므로 클래스안에 생성해준다.
  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(this.baseCharge - this.taxThreshold);
  }
}

// 2. class instance를 받는 변수(reading)
const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

// 3. 외부에서 acquireReading함수를 사용하면 reading함수를 반환 받을 수 있다.
export function acquireReading() {
  return reading;
}
