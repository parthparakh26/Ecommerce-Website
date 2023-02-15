import React from 'react'
import {useLocation} from 'react-router-dom';
import products from './Products/data'
import Navbar from './Navbar'
import '../CSS/productslayout.css'
import {useStateContext} from '../context/StateContext'
import { Toaster } from 'react-hot-toast';


function ProductsLayout() {
  
  const location = useLocation();
  const productId = Number(location.pathname.substring(1))
  const singleProduct = products.find(product => product.id === productId);
  
  const { decrement, increment, quantity, onAdd} = useStateContext();

  return (
    <div>
      <div><Toaster/></div>
      <div>
        <Navbar />
      </div>
      <div className='product---details'>
        <div className='product---display'>
          <img src={singleProduct.thumbnail} className='product---image'></img> 
        </div>
        <div className='product---info'>
          <div>
            <h1 className='product---title'>{singleProduct.title}</h1>
          </div>
          <div className='about---product'>
            <b>Product description :</b>
          </div>
          <div>
            <i className='product---desc'>{singleProduct.description}</i>
          </div>
           <div className='quantity'>
              <p className='qty--label'>Qty :</p><button className='decrement---qty' onClick={decrement}>-</button><span className='qty---counter'>{quantity}</span><button className='increment---qty' onClick={increment}>+</button>
           </div>
            <div className='product---totalcost'>
              <p className='product---price'>${singleProduct.price}</p>
           </div>
           <div className='button---for---cart'>
              <button className='add---to---cart' onClick={() => onAdd(singleProduct,quantity)}>Add to Cart</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsLayout;
