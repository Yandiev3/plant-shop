import React, { useEffect, useState } from 'react'
import './main.scss'
import Product from '../product/Product'
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

export default function Main() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const { register, handleSubmit, reset, formState: { errors }} = useForm();

    function addProduct(data) {
        console.log(data);

        if (localStorage.getItem("products") || JSON.parse(localStorage.getItem("products"))?.length) {
            let products = JSON.parse(localStorage.getItem("products"))
            products.push(data)
            localStorage.setItem("products", JSON.stringify(products))
        } else {
            localStorage.setItem("products", JSON.stringify([data]))
        }

        // localStorage.setItem("products", JSON.stringify(products))
    }

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
                <div>
                    <button onClick={openModal}>Добавить продукт</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel=""
                        >
                            <div className="modal">
                                <h2>Добавить продукт</h2>
                                    <form onSubmit={handleSubmit(addProduct)}>
                                    <input className= "inpName" type="text" placeholder="Название продукта" {...register("name", { required: "Это поле обязательно для заполнения",})}/>
                                    { errors.name && <p className="error">{ errors.name.message }</p>}

                                    <input className= "inpPrice" type="text" placeholder="Цена" {...register("price", { required: "Это поле обязательно для заполнения",})}/>
                                    { errors.price && <p className="error">{ errors.price.message }</p>}

                                    <input className= "inpFile" type="file" placeholder="Название продукта" {...register("image", { required: "Это поле обязательно для заполнения",})}/>

                                        <button type='submit'>Добавить</button>
                                    </form>
                            </div>
                        </Modal>
                </div>
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

        <div className="NewArrivalsContainer">
            <div className="NewArrivals">
                <div className="NewArrivalsTitle">
                    <h1>Colorful New Arrivals</h1>
                    <p>view all</p>
                </div>
                <div className="NewArrivalsCategory">
                    <div className="image-item">
                        <img src="./image/category/1.png" alt="#" />
                        <div className="caption">
                            <h3>Product Name</h3>
                            <p>more information</p>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src="./image/category/2.png" alt="#" />
                        <div className="caption">
                            <h3>Product Name</h3>
                            <p>more information</p>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src="./image/category/3.png" alt="#" />
                        <div className="caption">
                            <h3>Product Name</h3>
                            <p>more information</p>
                        </div>
                    </div>
                    <div className="image-item">
                        <img src="./image/category/4.png" alt="#" />
                        <div className="caption">
                            <h3>Product Name</h3>
                            <p>more information</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="StandsContainer">
            <div className="stands">
                <h1>Plant stands</h1>
            </div>
            <div className="standsItems">
                <img src="./image/category/21.png" alt="#" />
                <img src="./image/category/22.png" alt="#" />
                <img src="./image/category/23.png" alt="#" />
            </div>
        </div>

        <div className="shippingContainer">
            <div className="shippingTitle">
                <h1>Free Shipping Services</h1>
                <p>*only for the same region</p>
            </div>
            <div className="shippingContact">
                <div className="shippNumber">
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_116_119)"><path d="M13.865 17.7201C13.6968 17.7196 13.5292 17.7012 13.365 17.6651C10.2383 17.0183 7.3578 15.5018 5.05499 13.2901C2.80132 11.0735 1.23829 8.2514 0.55499 5.1651C0.474421 4.78046 0.494196 4.38155 0.612412 4.00676C0.730629 3.63197 0.943309 3.29391 1.22999 3.0251L3.22999 1.1001C3.33214 1.0035 3.45352 0.929517 3.5862 0.882993C3.71888 0.836469 3.85987 0.818447 3.99999 0.830102C4.14527 0.845258 4.28547 0.892059 4.41072 0.967211C4.53598 1.04236 4.64325 1.14404 4.72499 1.2651L7.22499 4.9601C7.31874 5.10347 7.364 5.27315 7.3541 5.44417C7.34419 5.61519 7.27966 5.77851 7.16999 5.9101L5.91499 7.4101C6.41482 8.51633 7.12266 9.51614 7.99999 10.3551C8.87164 11.2245 9.90191 11.9187 11.035 12.4001L12.59 11.1651C12.7206 11.0619 12.8795 11.0009 13.0456 10.9901C13.2118 10.9794 13.3772 11.0195 13.52 11.1051L17.295 13.5451C17.4245 13.6225 17.5349 13.7281 17.6178 13.8542C17.7007 13.9802 17.754 14.1234 17.7738 14.273C17.7935 14.4226 17.7791 14.5747 17.7317 14.7179C17.6843 14.8612 17.6051 14.9918 17.5 15.1001L15.55 17.0301C15.3285 17.2505 15.0656 17.425 14.7764 17.5434C14.4872 17.6618 14.1775 17.7219 13.865 17.7201ZM3.91999 1.8201L1.91999 3.7451C1.75872 3.89538 1.63933 4.08504 1.57358 4.29544C1.50783 4.50585 1.49798 4.72974 1.54499 4.9451C2.18035 7.84117 3.64085 10.4913 5.74999 12.5751C7.91709 14.6559 10.6278 16.0823 13.57 16.6901C13.7927 16.7367 14.0235 16.7272 14.2416 16.6627C14.4598 16.5981 14.6585 16.4804 14.82 16.3201L16.77 14.3901L13.125 12.0351L11.455 13.3651C11.3911 13.4157 11.3157 13.4499 11.2355 13.4647C11.1554 13.4795 11.0728 13.4745 10.995 13.4501C9.60834 12.9392 8.35172 12.1282 7.31499 11.0751C6.24267 10.0737 5.4103 8.84311 4.87999 7.4751C4.85755 7.39228 4.85681 7.30509 4.87783 7.2219C4.89884 7.13871 4.94091 7.06233 4.99999 7.0001L6.34999 5.3851L3.91999 1.8201Z" fill="#9C6955"/></g><defs><clipPath id="clip0_116_119"><rect width="18" height="18" fill="white"/></clipPath></defs></svg></span>
                    <p>+62 1189-2719-00</p>
                </div>
                <div className="shippMail">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_116_122)"><path d="M16 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H16C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3ZM15.23 14H2.83L6.33 10.38L5.61 9.685L2 13.42V4.76L8.215 10.945C8.40236 11.1313 8.65581 11.2358 8.92 11.2358C9.18419 11.2358 9.43764 11.1313 9.625 10.945L16 4.605V13.355L12.32 9.675L11.615 10.38L15.23 14ZM2.655 4H15.19L8.92 10.235L2.655 4Z" fill="#9C6955"/></g><defs><clipPath id="clip0_116_122"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                    <p>order@platify.com</p>
                </div>
            </div>
        </div>

        <div className="contactMap">
            <img src="./image/category/41.png" alt="#" />
        </div>
    </main>
    </>
  )
}
