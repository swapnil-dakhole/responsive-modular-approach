class CustomerService {
  static URL = `http://localhost:3000/customers`;
  static async addCustomerDetails(customer) {
    // post API to insert the records.
    return await axios.post(this.URL, customer);
    // console.log("In service:", result);
  }

  static async getCustomerDetails() {
    // to fetch data from url we have get api
    return await axios.get(this.URL);
  }
  static async deleteCustomer(id) {
    // to delete data from url we have delete api
    return await axios.delete(`${this.URL}/${id}`);
  }
  static async getSingleCustomer(id) {
    // to update data from url we have delete api
    return await axios.get(`${this.URL}/${id}`);
  }
  static async updateExistingCustomer(id, customer) {
    // to update data from url we have delete api
    return await axios.patch(`${this.URL}/${id}`, customer);
  }
}
export default CustomerService;
