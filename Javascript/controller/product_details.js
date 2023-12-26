import ProductService from "../service/ProductService.js";

$(document).ready(function () {
  let response = ProductService.getProductDetails()
    .then((resp) => {
      $("#productDetails").html(`<table class='prod_table'></table>`);
      $(".prod_table").html(
        `<tr><th>ID</th><th>Product Name</th><th>Brand Name</th><th>Price</th><th>Availbility</th><th>Image</th><th>Description</th><th>Actions</th></tr>`
      );
      $(".card-container").html();
      $(".card").html();

      let products = resp.data;
      for (let prod of products) {
        let row = `
    <tr class='table-row' id="table-row">
        <td>${prod.id}</td>
        <td>${prod._productName}</td>
        <td>${prod._brandName}</td>
        <td>${prod._productPrice}</td>
        <td>${prod._productAvail}</td>
        <td>${prod._productImg}</td>
        <td>${prod._productDescrip}</td>
        <td><button  class="btn btn-danger" productId="${prod.id}" id="deleteBTN" >Delete</button></td>
        <td><button  class="editBTN btn-secondary btn" productId="${prod.id}" id="editBTN">Edit</button></td>
    </tr>`;
        $(".prod_table").append(row);
        let card = `
          <div class="card">
            <div class="card-header">${prod._productName}</div>
              <img src='${prod._productImg.replace(
                "C:\\fakepath",
                "../Images"
              )}'
              alt="no-img" width="200" height="200" class="card-img" />
            <div class="card-body">
            <div><strong>Brand Name : </strong> ${prod._brandName}</div>
            <div><strong>Price : </strong>${prod._productPrice}</div>
            <div><strong>Availability : </strong>${prod._productAvail}</div>
            <div><strong>Description : </strong>${prod._productDescrip}</div>
            </div>
          </div>`;
        $(".card-container").append(card);
      }
    })

    .catch((error) => {
      console.log(error);
    });
});
