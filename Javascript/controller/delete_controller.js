import CustomerService from "../service/CustomerService.js";
import ProductService from "../service/ProductService.js";

$(document).ready(function () {
  $(document).on("click", "#deleteBTN", function () {
    let id = $(this).attr("productId");
    console.log(id);
    ProductService.deleteProduct(id)
      .then((resp) => {
        window.location.href = "../../HTML/productDetails.html";
        return resp;
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "../../HTML/productDetails.html";
      });
  });

  $(document).on("click", "#cusomterDeleteId", function () {
    let id = $(this).attr("customerID");
    console.log(id);
    CustomerService.deleteCustomer(id)
      .then((resp) => {
        window.location.href = "../../HTML/customerDetails.html";
        return resp;
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "../../HTML/customerDetails.html";
      });
  });
});
