import { useState } from "react";

const ShoppingCart = () => {



  const [products, setProducts] =useState([])
  

  const [productName, setProductName] = useState("")
  
  const [productPrice, setProductPrice] = useState('')

  
   

 

  return (
    <div><h2>simple shopping cart</h2>

    <div>
      <h3>add product </h3>

      <input type="text" placeholder="add product"/>

      <input type="number" placeholder="add price"/>
      <button>Add Cart</button>
      

    
    </div>
    {
  products.length > 0 ? (
    <h3>Added products</h3>
  ) : (
    <p>the cart is empty</p>
  )
}


    
    </div>

  )
  
}

export default ShoppingCart;