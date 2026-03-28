const getCartProductsFromLocal = () => {
  const productListStr = localStorage.getItem('cart-products');

  if(productListStr) {
    const productList = JSON.parse(productListStr);
    return productList;
  }
  else {
    return [];
  }
}

const storeCartProductsToLocal = (id) => {
  const productList = getCartProductsFromLocal();

  productList.push(id);
  const productListStr = JSON.stringify(productList);
  localStorage.setItem('cart-products', productListStr);
}


const getWishProductsFromLocal = () => {
  const productListStr = localStorage.getItem('wish-list');

  if(productListStr) {
    const productList = JSON.parse(productListStr);
    return productList
  }
  else {
    return [];
  }
}

const storeWishProductsToLocal = (id) => {
  const productList = getWishProductsFromLocal();

  productList.push(id);
  const productListStr = JSON.stringify(productList);
  localStorage.setItem('wish-list', productListStr);
}

export {storeCartProductsToLocal, storeWishProductsToLocal, getCartProductsFromLocal, getWishProductsFromLocal}