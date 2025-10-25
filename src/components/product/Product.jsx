import React from 'react'
import './product.scss'

export default function Product() {
  return (
    <div className="productCont">
        <div className="productCart">
            <div className="productimage">
                <img src="./image/product/1.png" alt="#" />
            </div>
            
            <div className="productTitle">
                <div className="productName">
                    Peperomia Ginny
                </div>
                <div className="productPrice">
                    $25
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
    </div>
  )
}
