export const fetchProducts = async (category) => {
  return await fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then((data) => data.json());
};
