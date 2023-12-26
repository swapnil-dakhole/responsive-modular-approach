import CustomerService from "../service/CustomerService.js";

$(document).ready(function () {
  let response = CustomerService.getCustomerDetails()
    .then((resp) => {
      // console.log(resp.data);
      // console.log(resp.data[0]._customerName);
      //   return resp;
      $("#customerDetails").html(`<table class='cust_table'></table>`);
      $(".cust_table").html(
        `<tr><th>ID</th><th>Name</th><th>Number</th><th>Email</th><th>DOB</th><th>Actions</th></tr>`
      );
      let customers = resp.data;
      for (let cust of customers) {
        let row = `
    <tr class='table-row' id="table-row">
        <td>${cust.id}</td><td>${cust._customerName}</td>
        <td>${cust._customerNumber}</td>
        <td>${cust._customerEmail}</td>
        <td>${cust._customerDOB}</td>
  
        <td class="btn btn-sm btn-danger" customerID=${cust.id} id="cusomterDeleteId"> Delete</td>
        <td class="btn btn-sm btn-secondary" customerID=${cust.id} id="cusotmerEditId" > View Details</td>
    </tr>`;
        $(".cust_table").append(row);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
