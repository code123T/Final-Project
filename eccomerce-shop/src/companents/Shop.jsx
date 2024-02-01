import React from 'react'
import './home.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import ProductDetail from './Product';
import './Product.css';
export const Shop = ({ detail, view, product, setProduct, close, setClose,addtocart }) => {
    const filtterShop = (product) => {
        const update = ProductDetail.filter((x) => {
            return x.Name === product;
        })
        setProduct(update);
    }

    return (
        <>
            {
                close ?

                    <div className='product-detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='produtcbox'>
                                            <div className='img_box'>
                                                <img src={curElm.Img} />
                                            </div>
                                            <div className='detail'>

                                                <h4>{curElm.Name}</h4>

                                                <h2>{curElm.Title}</h2>
                                                <span className='old'>{curElm.Oldprice}</span>
                                                <span className='price'>{curElm.Price}</span>
                                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8..</p>
                                                <div className='entire'>
                                                <span class="tp-cart-minus">
                                                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <input class="tp-cart-input" type="text" value="1"></input>
                                                <span class="tp-cart-plus">
                                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <button type='button'>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='produtcbox'>
                            </div>
                        </div>
                    </div> : null
            }
            <section className='breadcrumb__area  pt-100 pb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-12'>
                            <div className='breadcrumb__content '>
                                <h3 class="breadcrumb__title">Shop Grid</h3>
                                <div class="breadcrumb__list">
                                    <span><a href="#">Home</a></span>
                                    <span>Shop Grid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tp-shop-area pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div class="col-xl-3 col-lg-4">
                            <div class="tp-shop-sidebar mr-10">
                                {/* <!-- filter --> */}
                                <div class="tp-shop-widget mb-35">
                                    <h3 class="tp-shop-widget-title no-border">Price Filter</h3>

                                    <div class="tp-shop-widget-content">
                                        <div class="tp-shop-widget-filter">
                                            <div id="slider-range" class="mb-10 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" ></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span></div>
                                            <div class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
                                                <span class="input-range">
                                                    <input type="" id="amount" readonly="" />
                                                </span>
                                                <button class="tp-shop-widget-filter-btn" type="button">Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- status --> */}
                                <div class="tp-shop-widget mb-50">
                                    <h3 class="tp-shop-widget-title">Product Status</h3>

                                    <div class="tp-shop-widget-content">
                                        <div class="tp-shop-widget-checkbox">
                                            <ul class="filter-items filter-checkbox">
                                                <li class="filter-item checkbox">
                                                    <input id="on_sale" type="checkbox" />
                                                    <label for="on_sale">On sale</label>
                                                </li>
                                                <li class="filter-item checkbox">
                                                    <input id="in_stock" type="checkbox" />
                                                    <label for="in_stock">In Stock</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="tp-shop-widget mb-50">
                                    <h3 class="tp-shop-widget-title">Categories</h3>

                                    <div class="tp-shop-widget-content">
                                        <div class="tp-shop-widget-categories">
                                            <ul>

                                                <li onClick={() => filtterShop('Tablet')}><a href='#'>Tablet  <span>10</span></a></li>
                                                <li onClick={() => filtterShop('Smart Watch')}><a href="#">Smart Watch <span>18</span></a></li>
                                                <li onClick={() => filtterShop('Headphone')}><a href="#">Headphone <span>22</span></a></li>
                                                <li onClick={() => filtterShop('HD Camera')}><a href="#">HD Camera <span>17</span></a></li>
                                                <li onClick={() => filtterShop('Powerbank')}><a href="#">Powerbank <span>22</span></a></li>
                                                <li onClick={() => filtterShop('Heat Pipes')}><a href="#">Heat Pipes <span>14</span></a></li>
                                                <li onClick={() => filtterShop('Gaming')}><a href="#">Gaming <span>19</span></a></li>
                                                <li onClick={() => filtterShop('Backpacks')}><a href="#">Backpacks <span>29</span></a></li>
                                                <li onClick={() => filtterShop('Phones')}><a href="#">Phones <span>05</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- color --> */}
                                <div class="tp-shop-widget mb-50">
                                    <h3 class="tp-shop-widget-title">Filter by Color</h3>

                                    <div class="tp-shop-widget-content">
                                        <div class="tp-shop-widget-checkbox-circle-list">
                                            <ul>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="red" />
                                                        <label for="red">Red</label>
                                                        <span data-bg-color="#FF401F" class="tp-shop-widget-checkbox-circle-self"></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">8</span>
                                                </li>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="dark_blue" />
                                                        <label for="dark_blue">Dark Blue</label>
                                                        <span data-bg-color="#4666FF" class="tp-shop-widget-checkbox-circle-self" ></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">14</span>
                                                </li>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="oragnge" />
                                                        <label for="oragnge">Orange</label>
                                                        <span data-bg-color="#FF9E2C" class="tp-shop-widget-checkbox-circle-self" ></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">18</span>
                                                </li>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="purple" />
                                                        <label for="purple">Purple</label>
                                                        <span data-bg-color="#B615FD" class="tp-shop-widget-checkbox-circle-self"></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">23</span>
                                                </li>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="yellow" />
                                                        <label for="yellow">Yellow</label>
                                                        <span data-bg-color="#FFD747" class="tp-shop-widget-checkbox-circle-self" ></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">17</span>
                                                </li>
                                                <li>
                                                    <div class="tp-shop-widget-checkbox-circle">
                                                        <input type="checkbox" id="green" />
                                                        <label for="green">Green</label>
                                                        <span data-bg-color="#41CF0F" class="tp-shop-widget-checkbox-circle-self" ></span>
                                                    </div>
                                                    <span class="tp-shop-widget-checkbox-circle-number">15</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-9 col-lg-3'>
                            <div className='product'>
                                <div className='container'>
                                    {
                                        product.map((curElm) => {
                                            return (

                                                <div className='box' key={curElm.id}>
                                                    <div className='img_box'>
                                                        <img src={curElm.Img}></img>
                                                        <div className='icon'>
                                                            <li onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                                            <li onClick={() => view(curElm)}><BsEye /></li>
                                                            <li><AiOutlineHeart /></li>
                                                        </div>
                                                    </div>

                                                    <div className='detail'>
                                                        <p>{curElm.Name}</p>
                                                        <h3><a href="#">{curElm.Title}</a></h3>
                                                        <span className='old'>{curElm.Oldprice}</span>
                                                        <span className='price'>${curElm.Price}</span>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
