
import ProductsItem from "./components/ProductsItem.js";

let productListing = document.getElementById("products");
const url = 'https://fakestoreapi.com/products';

fetch(url).then(function(response) {
    return response.json()
}).then(function(body) {
    let product = body.map(function(product){
        return ProductsItem(product);
    });
    productListing.innerHTML = product.join('');
});