import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first20 = fakeData.slice(0,20);
     const [products, setProducts]=useState(first20);
     const [cart, setcart] = useState([]);

    const handldeAddProduct = (product) =>{
        // console.log('Product added',product);
         const newCart =[...cart, product];
        setcart(newCart);
    }

    return (
        <div className="shop-container">
         
            <div className="product-container">
    
            {
                products.map(pd => <Product 
                    handldeAddProduct ={handldeAddProduct}
                    product={pd}></Product>)
            }           
    
            </div>
            <div className="cut-container">
                <Cart cart={cart}></Cart>
                {/* <h3>This is cut</h3>
                <h5>Order Summary: {cart.length}</h5> */}
            </div>
            
        </div>
    );
};

export default Shop;