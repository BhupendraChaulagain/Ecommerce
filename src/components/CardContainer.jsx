import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import {useState, useEffect} from 'react'
import Card from './Card'

const CardContainer = () => {
  const[products, setProducts] = useState([])
  const[loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchProduct = async() =>{
      try{
          const response= await axios.get(`https://fakestoreapi.com/products`)
          console.log(response.data)
          setProducts(response.data)
          setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    const delay=setTimeout(() => {
      fetchProduct()
      clearTimeout(delay)
     }, 2000);
  }, [])
  return (
    <>
       {loading ? (
        <div className='d-flex justify-content-center align-item-center' style={{height:'50vh'}}>
          <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
        </div>
       ): (
        <div className="container-fluid">

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.slice(0,8).map((item, i)=>(
          <Card key={i} data ={item} />
        
       ))}
       </div>
       </div> 
  )}
    </>
  )
}

export default CardContainer
