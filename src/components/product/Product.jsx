import React from 'react'
import './product.scss'
import { useEffect } from 'react';

let product = [
    { img: "./image/product/1.png", name: 'Peperomia Ginny', price: 25},
    { img: "./image/product/2.png", name: 'Bird’s Nest Fern', price: 45},
    { img: "./image/product/3.png", name: 'Large Majesty Palm', price: 52},
    { img: "./image/product/4.png", name: 'Pet Friendly Plant', price: 30},

];  

export default function Product() {
    useEffect(() => {
        product = product.concat(JSON.parse(localStorage.getItem("products")))
        console.log(JSON.parse(localStorage.getItem("products")));
        
        console.log(product);
        
    })
  return (
    <div className="productCont">
        {product.map((item) => (
        <div className="productCart">
            <div className="productimage">
                <img src={item.img} alt="#" />
            </div>
            
            <div className="productTitle">
                <div className="productName">
                    {item.name}
                </div>
                <div className="productPrice">
                    ${item.price}
                </div>
            </div>

            <div className="productDescription">
                
                <div className="productFooter">
                    <div className="productColor">
                <p>Pot color</p>

                    <span className='b'></span>
                    <span className='p'></span>
                    <span className='g'></span>
                    <span className='o'></span>
                   </div>
                   <div className="btnBuy">
                    <button>Buy</button>
                    </div> 
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}
