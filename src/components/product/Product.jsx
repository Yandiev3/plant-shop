import React from 'react'
import './product.scss'
import { useEffect, useState } from 'react';

export default function Product({ products = [] }) {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setDisplayProducts(products);
        } else {
            const savedProducts = localStorage.getItem('products');
            if (savedProducts) {
                setDisplayProducts(JSON.parse(savedProducts));
            }
        }
    }, [products]);

    return (
    <div className="productCont">
        {displayProducts.map((item) => (
        <div key={item.index} className="productCart">
            <div className="productimage">
                <img src={item.image} alt={item.name} />
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