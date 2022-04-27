import { fetchProducts } from "./services/storefront";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import Spinner from 'react-bootstrap/Spinner'
import "./App.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState("electronics");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts(category);
      setProductsList(products);
    };
    getProducts();
  });

  return (
    <div className="App">
      <div className="container">

        <div className="title">
          <h1>My Awesome Store</h1>
        </div>

        <select onChange={(e) => handleChange(e)}>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>

        <div className="card-container">
          {productsList.length >0 ? productsList.map((product, key) => (
            <Product
              key={product.id}
              name={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))
        : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
        </div>
        
      </div>
    </div>
  );
}

export default App;
