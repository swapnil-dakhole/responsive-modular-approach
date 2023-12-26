import Product from "../model/Product.js";
import ProductService from "../service/ProductService.js";

$(document).ready(function () {
  $("#btnSubmit2").click(function () {
    let productName = $("#productName").val();
    let brandName = $("#brandName").val();
    let productPrice = $("#productPrice").val();
    let productAvail = $("#productAvail").val();
    let productImg = $("#productImg").val();
    let productDescrip = $("#productDescrip").val();

    // let img_start_path = `../Images`;
    // let img_end_path = productImg.replace("C:\\fakepath", img_start_path);
    console.log(productImg);
    // console.log("Clicked");
    // console.log(productName);
    // console.log(brandName);
    // console.log(productPrice);
    // console.log(productAvail);
    // console.log(productImg);
    // console.log(productDescrip);
    let products = new Product();
    products.productName = productName;
    products.brandName = brandName;
    products.productPrice = productPrice;
    products.productAvail = productAvail;
    products.productImg = productImg;
    products.productDescrip = productDescrip;
    console.log(products);
    // calling product service method and sending product object to it.
    ProductService.addProductDetails(products)
      .then((resp) => {
        console.log(resp);

        window.location.href = "../../HTML/productDetails.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
