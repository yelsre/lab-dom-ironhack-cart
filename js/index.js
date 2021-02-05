// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let priceNum = parseFloat(price);
  let quantityNum = parseFloat(quantity);
  subtotalNum = priceNum*quantityNum;
  subtotal = `$${subtotalNum.toFixed(2)}`;
  product.querySelector('.subtotal').innerHTML = subtotal;
  return subtotalNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct); // call updateSubtotal function
  // end of test
  // ITERATION 2
  const productCollection = document.querySelectorAll('.product');
  productSumNum = 0;
  productCollection.forEach(product => {
    updateSubtotal(product);
  // ITERATION 3
    productSumNum += subtotalNum;
  });
  productSum = `$${productSumNum.toFixed(2)}`;
  document.querySelector('#total-value').innerHTML = productSum;
}

// ITERATION 4
function removeProduct(event) { // event is the keyword so we dont need to pass anything to the function when its called
  const target = event.currentTarget;
  targetParent = target.parentNode.parentNode.parentNode;
  targetParent.removeChild(target.parentNode.parentNode);
  console.log('The target in remove is:', target);
  console.log('parent node', target.parentNode.removeChild);
  calculateAll();  
}

// ITERATION 5
function createProduct() {
  console.log('Create product pressed')
  const productName = document.querySelector('#create-product-name').value;
  const productPrice = document.querySelector('#create-product-price').value;
  const cartBody = document.querySelector('#cart > tbody');
  const newProduct = document.createElement("tr");
  newProduct.className = 'product';
  const newProductName = `<td class="name"> <span>`+ productName + `</span> </td>`;
  const newProductPrice = `<td class="price">$<span>`+ productPrice + `</span> </td>`;
  const newProductColumns = `<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td> <td class="subtotal">$<span>0.00</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`
  newProduct.innerHTML = newProductName + newProductPrice + newProductColumns;
  cartBody.appendChild(newProduct);
// then we need to add the event listeners
const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', calculateAll);
const removeBtn = document.querySelectorAll('.btn-remove');
removeBtn.forEach(btn => {
  btn.addEventListener('click', removeProduct) // since the button passes event, we can just write the function here
})
}

window.addEventListener('load', () => { // this event is only triggered once the page has loaded
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', removeProduct) // since the button passes event, we can just write the function here
  })
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click',createProduct);
});
