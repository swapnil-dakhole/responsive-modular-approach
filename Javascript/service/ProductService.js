class ProductService {
  static URL = `http://localhost:3000/products`;
  static async addProductDetails(Product) {
    // post API to insert the records.
    return await axios.post(this.URL, Product);
    // console.log("In service:", result);
  }

  static async getProductDetails() {
    // to fetch data from url we have get api
    return await axios.get(this.URL);
  }

  static async deleteProduct(id) {
    // to delete data from url we have delete api
    return await axios.delete(`${this.URL}/${id}`);
  }
  static async getSingleProduct(id) {
    // to update data from url we have delete api
    return await axios.get(`${this.URL}/${id}`);
  }
  static async updateExistingProduct(id, product) {
    // to update data from url we have delete api
    return await axios.patch(`${this.URL}/${id}`, product);
  }
}
export default ProductService;
