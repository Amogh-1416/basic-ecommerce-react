import './Product.css';
import {Link} from 'react-router-dom'

function Product({ params }) {
  return (
    <>
    <Link to={`/product/${params.id}`} className='link' >
    

    <div className="product-container">
        <div className="image-container">
            <img src="#" alt={`product ${params.id}`} />
        </div>
        <div className="title-container"><p><strong>Title: </strong>{params.title}</p></div>
        <div className="description-container"><p><strong>Description:</strong> {params.description}</p></div>
    </div>
    
    </Link>
    </>
  )
}

export default Product