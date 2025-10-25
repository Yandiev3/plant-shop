import React from 'react'
import './main.scss'
import Product from '../product/Product'

export default function Main() {
  return (
    <>
    <main>
        <div className="firstTitul">
            <div className='first'>
                <div className="firstContainer">
                    <div className="firstContent">
                        <h1>Happiness blooms from within</h1>
                        <p>Our environment, the world in which we live and  work, is a mirror of our attitudes and expectations.</p>
                            <div className="firstBtn">
                                <button>Shop now</button>
                                <a href="/#">Explore plants →</a>
                            </div>
                        </div>
                        <div className="firstImage">
                            <img src="./image/catry.png" alt="#"/>
                        </div>
                </div>
            </div>
        </div>

        <div className="featuredCont">
            <div className="featureTitle">
                <h1>Featured</h1>
                <p>view all</p>
            </div>

            <div className="products">
                    <Product/>
            </div>    
        </div>


        <div className="secondCont">
            <div className="secondMain">
                <span>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="59" height="59" stroke="#004F44"/><line x1="15.0126" y1="19.5438" x2="44.9876" y2="19.5438" stroke="#004F44" stroke-linecap="round"/><line x1="15.0126" y1="30.6063" x2="44.9876" y2="30.6063" stroke="#004F44" stroke-linecap="round"/><line x1="15.0126" y1="41.6688" x2="44.9876" y2="41.6688" stroke="#004F44" stroke-linecap="round"/><circle cx="39.2188" cy="30.6145" r="2.57292" fill="#004F44" stroke="#004F44"/><circle cx="22.0104" cy="19.552" r="2.57292" fill="#004F44" stroke="#004F44"/><circle cx="22.0104" cy="41.677" r="2.57292" fill="#004F44" stroke="#004F44"/>
                </svg>
                </span>

                <input type="text" placeholder='Search flowers...'/>

                <span>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="59" height="59" fill="#004F44" stroke="#004F44"/><g clip-path="url(#clip0_114_96)"><path d="M29.2011 20.4278C30.8858 20.4263 32.5332 20.9245 33.9348 21.8594C35.3364 22.7942 36.4292 24.1238 37.075 25.6799C37.7208 27.236 37.8906 28.9486 37.5628 30.6012C37.2351 32.2538 36.4246 33.7721 35.2338 34.9639C34.043 36.1558 32.5255 36.9677 30.8732 37.2969C29.221 37.6262 27.5081 37.458 25.9515 36.8136C24.3948 36.1692 23.0642 35.0776 22.1281 33.6769C21.1919 32.2762 20.6922 30.6293 20.6922 28.9445C20.7024 26.6902 21.6019 24.5311 23.1952 22.9363C24.7885 21.3416 26.9468 20.4401 29.2011 20.4278ZM29.2011 18.8334C27.2013 18.8334 25.2464 19.4264 23.5836 20.5374C21.9209 21.6484 20.6249 23.2276 19.8596 25.0751C19.0943 26.9227 18.8941 28.9557 19.2843 30.9171C19.6744 32.8784 20.6374 34.6801 22.0514 36.0941C23.4655 37.5082 25.2671 38.4712 27.2285 38.8613C29.1899 39.2515 31.2229 39.0512 33.0704 38.2859C34.918 37.5206 36.4971 36.2247 37.6082 34.5619C38.7192 32.8992 39.3122 30.9443 39.3122 28.9445C39.3122 26.2629 38.2469 23.6911 36.3507 21.7949C34.4545 19.8986 31.8827 18.8334 29.2011 18.8334Z" fill="white"/><path d="M43.7222 42.3922L37.99 36.6211L36.8856 37.7178L42.6178 43.4889C42.6898 43.5614 42.7754 43.619 42.8697 43.6585C42.9639 43.6979 43.0651 43.7184 43.1673 43.7187C43.2695 43.7191 43.3707 43.6993 43.4653 43.6606C43.5598 43.6218 43.6458 43.5648 43.7183 43.4928C43.7909 43.4208 43.8485 43.3352 43.8879 43.2409C43.9274 43.1466 43.9479 43.0455 43.9482 42.9433C43.9486 42.8411 43.9288 42.7398 43.89 42.6453C43.8513 42.5507 43.7942 42.4647 43.7222 42.3922Z" fill="white"/></g><defs><clipPath id="clip0_114_96"><rect width="28" height="28" fill="white" transform="translate(16.5 16.5)"/></clipPath></defs></svg>
                </span>
            </div>
        </div>
    </main>
    </>
  )
}
