class Product {
  // setters
  set productName(productName) {
    this._productName = productName;
  }
  set brandName(brandName) {
    this._brandName = brandName;
  }
  set productPrice(productPrice) {
    this._productPrice = productPrice;
  }
  set productAvail(productAvail) {
    this._productAvail = productAvail;
  }
  set productImg(productImg) {
    this._productImg = productImg;
  }
  set productDescrip(productDescrip) {
    this._productDescrip = productDescrip;
  }
  set productId(productId) {
    this._productId = productId;
  }

  // getters
  get productName() {
    return this._productName;
  }
  get brandName() {
    return this._brandName;
  }
  get productPrice() {
    return this._productPrice;
  }
  get productAvail() {
    return this._productAvail;
  }
  get productImg() {
    return this._productImg;
  }
  get productDescrip() {
    return this._productDescrip;
  }
  get productId() {
    return this._productId;
  }
}

export default Product;
