import ProductService from "../service/ProductService.js";
import Product from "../model/Product.js";

$(document).ready(function () {
  $(document).on("click", "#editBTN", function () {
    let id = $(this).attr("productId");
    // console.log(id);
    ProductService.getSingleProduct(id)
      .then((resp) => {
        // window.location.href = "../../HTML/updateProduct.html/";
        // console.log(resp);
        let prod = resp.data;
        console.log(prod);
        $(".container-details").html(`
            <div class="bg-dark border rounded border-3 p-4 text-white mx-auto" style="width:45%">
                <div class="form-elements">
                    <label for="productName">Product Name </label>
                    <input
                    type="text"
                    name="pname"
                    id="productName1"
                    value=${prod._productName}
                     class="border-bottom border-2 text-dark bg-light"
                    
                    />
                </div>
            <div class="form-elements">
                <label for="brandName">Brand Name </label>
                <input
                type="text"
                name="bname"
                id="brandName1"
                value=${prod._brandName}
                 class="border-bottom border-2 text-dark bg-light"
                />
            </div>
            <div class="form-elements">
                <label for="productPrice">Price </label>
                <input
                type="number"
                name="price"
                id="productPrice1"
                 class="border-bottom border-2 text-dark bg-light"
                value=${prod._productPrice}
                />
            </div>
            <div class="form-elements">
                <label for="productAvail">Availability </label>
                <input
                type="number"
                name="productAvail"
                id="productAvail1"
                 class="border-bottom border-2 text-dark bg-light"
                value=${prod._productAvail}
                />
            </div>
            <div class="form-elements img-file">
            <label for="productImg">Image </label>
              <img
              alt="no-img" width="200" height="200"  class="rounded border-2"
               src='${prod._productImg.replace("C:\\fakepath", "../Images")}' />
                <input type="file" name="productImg" id="productImg1" value=${
                  prod._productImg
                } readonly class="border-bottom border-2 text-dark bg-light" />
            </div>
            <div class="form-elements">
                <label for="productDescrip">Description </label>
                <textarea
                name="address"
                id="productDescrip1"
                cols="30"
                rows="5"
                class="border-bottom border-2 text-dark bg-light"
                autocomplete="address-level1"
                >${prod._productDescrip}
                </textarea>
            </div>

            <div class="form-elements">
                <button class="btn btn-success" id="btnSubmit3" type="submit">
                   Submit
                </button>
            </div>
        </div>
          `);

        $("#btnSubmit3").click(function () {
          console.log("Submit button clicked");
          let productName = $("#productName1").val();
          let brandName = $("#brandName1").val();
          let productPrice = $("#productPrice1").val();
          let productAvail = $("#productAvail1").val();
          let productImg = $("#productImg1").val();
          let productDescrip = $("#productDescrip1").val();
          let productId = id;

          let prd = {
            _productName: productName,
            _brandName: brandName,
            _productPrice: productPrice,
            _productAvail: productAvail,
            _productImg: productImg,
            _productDescrip: productDescrip,
            id: id,
          };
          console.log(prd._productName);
          ProductService.updateExistingProduct(productId, prd).then((resp) => {
            console.log(resp.data);
            resp.data._productName = productName;
            resp.data._brandName = brandName;
            resp.data._productPrice = productPrice;
            resp.data._productAvail = productAvail;
            resp.data._productImg = productImg;
            resp.data._productDescrip = productDescrip;
            console.log(resp.data._productName);
            window.location.href = "../../HTML/productDetails.html";
          });
        });
        return resp;
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "../../HTML/productDetails.html";
      });
  });
});
