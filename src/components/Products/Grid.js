import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Products from './Product';
import Pagination from '../Pagination'
import { useStateContext } from '../../context/StateContext'

function Grid(){
    const {asc,desc} = useStateContext();

    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        const res = await axios.get('https://dummyjson.com/products');
        setproducts(res.data.products);
        setLoading(false);
      };
  
      fetchProducts();
    }, []);
    
    if(asc===true)
    {
      products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    }

    if(desc===true)
    {
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }
    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    
return(
    <div>
      <Products products={currentProducts} loading={loading} />
      <Pagination  productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </div>
    );
}

export default Grid;