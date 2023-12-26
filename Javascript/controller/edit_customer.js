import CustomerService from "../service/CustomerService.js";
import Customer from "../model/Customer.js";

$(document).ready(function () {
  $(document).on("click", "#cusotmerEditId", function () {
    let id = $(this).attr("customerID");
    console.log(id);
    CustomerService.getSingleCustomer(id).then((resp) => {
      // window.location.href = "../../HTML/updateProduct.html/";
      // console.log(resp);
      let prod = resp.data;
      console.log(prod);
      $("#customerDetails").html(`<table class='cust_table'></table>`);
      $(".cust_table").html(
        `<tr><th>ID</th><th>Name</th><th>Number</th><th>Email</th><th>DOB</th><th>Gender</th><th>Address</th></tr>`
      );
      let cust = resp.data;
      let row = `
            <tr class='table-row' id="table-row">
                <td>${cust.id}</td><td>${cust._customerName}</td>
                <td>${cust._customerNumber}</td>
                <td>${cust._customerEmail}</td>
                <td>${cust._customerDOB}</td>
                <td>${cust._customerGender}</td>
                <td>${cust._customerAddress}</td>
    
            </tr>`;
      $(".cust_table").append(row);
    });
  });
});
