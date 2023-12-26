class Customer {
  // setters
  set customerName(customerName) {
    this._customerName = customerName;
  }
  set customerEmail(customerEmail) {
    this._customerEmail = customerEmail;
  }
  set customerNumber(customerNumber) {
    this._customerNumber = customerNumber;
  }
  set customerGender(customerGender) {
    this._customerGender = customerGender;
  }
  set customerDOB(customerDOB) {
    this._customerDOB = customerDOB;
  }
  set customerAddress(customerAddress) {
    this._customerAddress = customerAddress;
  }
  set customerId(customerId) {
    this._customerId = customerId;
  }

  // getters
  get customerName() {
    return this._customerName;
  }
  get customerEmail() {
    return this._customerEmail;
  }
  get customerNumber() {
    return this._customerNumber;
  }
  get customerGender() {
    return this._customerGender;
  }
  get customerDOB() {
    return this._customerDOB;
  }
  get customerAddress() {
    return this._customerAddress;
  }
  get customerId() {
    return this._customerId;
  }
}

export default Customer;
