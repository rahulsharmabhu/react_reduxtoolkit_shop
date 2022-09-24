import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productsSlice';
import { STATUSES } from '../store/productsSlice';

const Products = () => {

  //const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data:products,status} = useSelector((state) => state.product)

  useEffect(() => {

   dispatch(fetchProducts());
  // const fetchProduct = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products/');
  //   const data = await res.json();
  //   console.log(data);
  //   setProducts(data);
  // }
  // fetchProduct();
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status === STATUSES.LOADING){
    return <h2 style={{textAlign:'center'}}>Loading...</h2>
  }

  if(status === STATUSES.ERROR){
    return <h2 style={{textAlign:'center'}}>Something went wrong!</h2>
  }
  

  return (
    <div className='productsWrapper'>
    {products.map((product) => (
     <div className='card' key={product.id}>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <h5>{product.price}</h5>
      <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
     </div>
    ))}
    </div>
  )
}

export default Products