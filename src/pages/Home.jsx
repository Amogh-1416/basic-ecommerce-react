import { React, useState } from "react";
import Searchbar from "../components/Searchbar";
import Product from "../components/product";
import "../styles/home.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
  {
    id: 2,
    title: "Product 2",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
  {
    id: 3,
    title: "Product 3",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
  {
    id: 4,
    title: "Product 4",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
  {
    id: 5,
    title: "Product 5",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
  {
    id: 6,
    title: "Product 6",
    description: "So Elegant, So beautiful, just looking like a wow!!",
  },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
 
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }
  return (
    <>
      <div className="home-container">
        <div className="search-container">
          <div className="searchbar">
            <input
              type="search"
              name="search-bar"
              placeholder="Search by Product Title"
              id=""
              onChange={(e)=> setSearchQuery(e.target.value)}
              value={searchQuery}
              style={{ width: "70%", height: "30px",  }}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="content-container">
          {filteredProducts.map((product) => (
            <Product key={product.id} params={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
