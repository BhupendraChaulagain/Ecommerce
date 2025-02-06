import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    const[product, setProduct]=useState({})
    const params=useParams()
    const id =params.productId
    console.log("uyifgyhyigy",product.title)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    }, [id])
    const addToCart=() =>{
        const cartItems=JSON.parse(localStorage.getItem('cart')) || []
        const productData={
            id:product.id,
            title:product.title,
            price:product.price,
            image:product.image,
            quantity:1
        }
        const existingItem=cartItems.find(item=>item.id===product.id)
        if (existingItem){
            toast.error("Producat is already in cart")
        }
        else{
            cartItems.push(productData)
            localStorage.setItem('cart', JSON.stringify(cartItems))
            toast.success(`${product.title} is added to cart`)
            
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center' />
    <div className='container'>
        <div className='row d-flex justify-content-evenly align-items-center'>
            <div className='col-md-4'>
                <img src={product.image} alt={product.title} width = '400'/>
                
            </div>
            <div className='col-md-6'>
                <h1>{product.title}</h1>
                <p>Category:{product.category}</p>
                <p>{product.description}</p>
                {/* <h4>{product.rating.rate}({product.rating.count})</h4> */}
                <div className='my-2'>
                    <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            </div>

    </div>
    
    </>
  )
}

export default ProductDetails
