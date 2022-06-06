

export const getTotal = (products) => {
  console.log("product", products);
    return products.reduce((prev, product) => {
      const total = product.price * product.quantity;
      return prev += total
    }, 0)
}

