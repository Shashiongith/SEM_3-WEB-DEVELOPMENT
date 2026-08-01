import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

    let navi = useNavigate();

    let products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "This is product 1"
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "This is product 2"
        },{
            id: 3,
            name: "Product 3",
            price: 300,
            description: "This is product 3"
        }
    ]

    function fun1(id){
        console.log("Product clicked", id)
        navi(`/product/${id}`)
    }
    
  return (
    <div>
        {
            products.map((product) => {
                return (
                    <div >
                        <h1 onClick={()=> fun1(product.id)}>{product.name}</h1> 
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList