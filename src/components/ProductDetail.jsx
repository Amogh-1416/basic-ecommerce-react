// ProductDetail.jsx
import '../styles/productDetail.css'

import { useParams } from 'react-router-dom';

const products = [
    
    {id: 1, title: 'Product 1',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},
    {id: 2, title: 'Product 2',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},
    {id: 3, title: 'Product 3',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},
    {id: 4, title: 'Product 4',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},
    {id: 5, title: 'Product 5',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},
    {id: 6, title: 'Product 6',price:3000, rating:5, description: 'So Elegant, So beautiful, just looking like a wow!!'},

  ]

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id);

  // Find the selected product based on the ID
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail-main-container">

    <div className="product-detail-container">
      <div className="image-container">
        <img src="#" alt={`product ${product.id}`} />
      </div>
      <div className="details-container">
        <table className='details-table'>
            <tr>
                <th>Title: </th><td><h2>{product.title}</h2></td>
            </tr>
            <tr><th>Price: </th><td>{product.price}</td></tr>
            <tr><th>Description: </th><td>{product.description}</td></tr>
            <tr><th>Rating: </th><td>{product.rating}</td></tr>
        </table>
        
        
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;
