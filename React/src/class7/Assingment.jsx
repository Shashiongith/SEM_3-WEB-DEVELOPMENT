import { useState, useEffect } from "react";

function Assingment() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  async function searchProducts() {

    if (search == "") {
      alert("Enter product name");
      return;
    }

    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + search
    );

    const data = await response.json();
    setProducts(data.products);
  }

  return (
    <div>

      <h1>Product App</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchProducts}>Search</button>

      <button onClick={fetchProducts}>All Products</button>

      <hr />

      {products.map((item) => (
        <div key={item.id}>

          <img src={item.thumbnail} width="100" />

          <h3>{item.title}</h3>

          <p>Price: {item.price}</p>

        </div>
      ))}

    </div>
  );
}

export default Assingment;