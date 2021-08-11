import React from 'react'
import Product from '../MyComponents/Product';


 const products = (props) => {
    return (
        <div className="container">
            <h3>Product List</h3>
            {props.products.map((product)=>{
                return <Product products={product}/>
            })}
            
        </div>
    )
}

export default products;
