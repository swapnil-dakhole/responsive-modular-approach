import Customer from "../model/Customer.js";
import CustomerService from "../service/CustomerService.js";

$(document).ready(function () {
  $("#btnSubmit").click((e) => {
    e.preventDefault();
    let customerName = $("#customerName").val();
    let customerEmail = $("#customerEmail").val();
    let customerNumber = $("#customerNumber").val();
    let customerDOB = $("#customerDOB").val();
    let customerAddress = $("#customerAddress").val();
    let gender = "";
    if ($("#male").is(":checked")) {
      gender = $("#male").val();
    } else if ($("#female").is(":checked")) {
      gender = $("#female").val();
    }

    //create object of customer model(class)
    let customer = new Customer();
    customer.customerName = customerName;
    customer.customerEmail = customerEmail;
    customer.customerDOB = customerDOB;
    customer.customerGender = gender;
    customer.customerAddress = customerAddress;
    customer.customerNumber = customerNumber;
    console.log(customer);

    // calling customer service method and sending product object to it.
    CustomerService.addCustomerDetails(customer)
      .then((resp) => {
        console.log(resp);
        window.location.href = "../../HTML/customerDetails.html";
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "../../HTML/customerDetails.html";
      });
  });
});
