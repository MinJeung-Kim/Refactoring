export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

// 순수 type에대한 정보를 가지고 있는 class
export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === "Premium";
  }

  overdraftCharge(daysOverdrawn) {
    // isPremium인지 아닌지에 따라 값이 완전히 달라짐.
    // 중첩 코드 제거
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }

    const baseCharge = 10;
    daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
