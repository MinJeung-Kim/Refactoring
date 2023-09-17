export class Order {
  constructor(data) {
    this.priority = data;
  }

  // 6. 우선순위의 로직
  isHighPriority() {
    return this.priority.higherThan(new Priority('normal'));
    // if (['high', 'rush'].includes(this.priority)) return true;
    // return false;
  }
}

// 1. Priority라는 기본형 자체를 담당하는 class 생성.
class Priority {
  #value;
  constructor(value) {
    // 3. value를 전달할 때, 범위안에 있는 문자열인지 검사.
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      // 4. 범위안에 없다면 error. => type를 보장.
      // ※ 생성자 안에서 error를 던지는것은 보안에 취약⚠️
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  // 5. 전달받은 value의 index를 찾아서 반환하는 getter함수.
  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other) {
    return this.index > other.index;
  }

  // 2. Priority class를 호출해서 value를 전달할 때, 주어진 범위안의 우선순위 내에서 선택할 수 있는 함수 생성.
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order(new Priority('normal')),
  new Order(new Priority('high')),
  new Order(new Priority('rush')),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount); // 2