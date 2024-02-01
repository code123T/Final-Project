import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { RiStarFill } from "react-icons/ri";
import './Area.css'
import './Banner.css'
import './Product.css'
import './inistgram.css'
import { FaInstagram } from "react-icons/fa";
import Homeproduct from './homeproduct'
import { AiOutlineShoppingCart,AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart} from "react-icons/ai";
import './Sm.css'
import './Category.css'
import 'swiper/css';
import './Slider.css'
import './Feature.css'
import './Deal.css'

export default function Home({detail,view,close,setClose,addtocart}) {
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
        <Swiper
            className='relative group'
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
            }}
            modules={[Navigation]}
        >

            <div className='swiper-slide swiper-slide-active'>
                <SwiperSlide>
                    <div className='image relative'>
                        <img src="./img/slider-img-1.png" />
                        <div className='title-content'>
                            <span>Starting at <b>$274.00</b></span>
                            <h3 class="tp-slider-title">The best tablet<br /> Collection 2023</h3>
                            <p>Exclusive offer
                                <span>-35%
                                    <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                                    </svg>
                                </span>
                                off this week</p>
                            <div class="tp-slider-btn">
                                <a href="shop.html" class="tp-btn tp-btn-2 tp-btn-white">Shop Now
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='tp-slider-shape'>
                        <img src="./img/slider-shape-1.png" alt="" className='tp-slider-shape-1' />
                        <img src="./img/slider-shape-3.png" alt="" className='tp-slider-shape-3' />
                        <img src="./img/slider-shape-.png4" alt="" className='tp-slider-shape-4' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image relative'>
                        <img src="./img/slider-img-2.png" />
                        <div className='title-content'>
                            <span>Starting at <b>$999.00</b></span>
                            <h3 class="tp-slider-title">The best tablet<br /> Collection 2023</h3>
                            <p>Exclusive offer
                                <span>-10%
                                    <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                                    </svg>
                                </span>
                                off this week</p>
                            <div class="tp-slider-btn">
                                <a href="shop.html" class="tp-btn tp-btn-2 tp-btn-white">Shop Now
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='tp-slider-shape'>
                            <img src="./img/slider-shape-1.png" alt="" className='tp-slider-shape1' />
                            <img src="./img/slider-shape-3.png" alt="" className='tp-slider-shape3' />
                            <img src="./img/slider-shape-.png4" alt="" className='tp-slider-shape4' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='image relative'>
                        <img src="./img/slider-img-3.png" />
                        <div className='title-content'>
                            <span>Starting at <b>$274.00</b></span>
                            <h3 class="tp-slider-title">The best tablet<br /> Collection 2023</h3>
                            <p>Exclusive offer
                                <span>-35%
                                    <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                                    </svg>
                                </span>
                                off this week</p>
                            <div class="tp-slider-btn">
                                <a href="shop.html" class="tp-btn tp-btn-2 tp-btn-white">Shop Now
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='tp-slider-shape'>
                            <img src="./img/slider-shape-1.png" alt="" className='tp-slider-shape1' />
                            <img src="./img/slider-shape-3.png" alt="" className='tp-slider-shape3' />
                            <img src="./img/slider-shape-.png4" alt="" className='tp-slider-shape4' />
                        </div>
                    </div>
                </SwiperSlide>
            </div>
            <section className='tp-product-category pt-60 pb-15'>
                <div className='container'>
                    <div className='row row-cols-xl-5 row-cols-lg-5 row-cols-md-4'>
                        <div className='col'>
                            <div className='tp-product-category-item text-center mb-40'>
                                <div className='tp-product-category-thumb fix'>
                                    <a href='#' className='bg-image'>
                                        <img src="./img/product-cat-1.png" alt="" className=' zoom' />
                                    </a>
                                </div>
                                <div class="tp-product-category-content">
                                    <h3 class="tp-product-category-title">
                                        <a href="shop-category.html">Headphones</a>
                                    </h3>
                                    <p>20 Product</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-product-category-item text-center mb-40'>
                                <div className='tp-product-category-thumb fix'>
                                    <a href="#">
                                        <img src="./img/product-cat-2.png" alt="" className='zoom' />
                                    </a>
                                </div>
                                <div class="tp-product-category-content">
                                    <h3 class="tp-product-category-title">
                                        <a href="shop-category.html">Headphones</a>
                                    </h3>
                                    <p>20 Product</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-product-category-item text-center mb-40'>
                                <div className='tp-product-category-thumb fix'>
                                    <a href="#">
                                        <img src="./img/product-cat-3.png" alt="" className='zoom' />
                                    </a>
                                </div>
                                <div class="tp-product-category-content">
                                    <h3 class="tp-product-category-title">
                                        <a href="shop-category.html">Headphones</a>
                                    </h3>
                                    <p>20 Product</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-product-category-item text-center mb-40'>
                                <div className='tp-product-category-thumb fix'>
                                    <a href="#">
                                        <img src="./img/product-cat-4.png" alt="" className='zoom' />
                                    </a>
                                </div>
                                <div class="tp-product-category-content">
                                    <h3 class="tp-product-category-title">
                                        <a href="shop-category.html">Headphones</a>
                                    </h3>
                                    <p>20 Product</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-product-category-item text-center mb-40'>
                                <div className='tp-product-category-thumb fix'>
                                    <a href="#">
                                        <img src="./img/product-cat-5.png" alt="" className='zoom' />
                                    </a>
                                </div>
                                <div class="tp-product-category-content">
                                    <h3 class="tp-product-category-title">
                                        <a href="shop-category.html">Headphones</a>
                                    </h3>
                                    <p>20 Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tp-feature-area'>
                <div className='container'>
                    <div className='row gx-1 gy-1 gy-xl-0'>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                            <div className='tp-feature-item d-flex align-items-start'>
                                <div className='tp-feature-icon'>
                                    <span>
                                        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7222 1H31.5555V19.0556H10.7222V1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M10.7222 7.94446H5.16667L1.00001 12.1111V19.0556H10.7222V7.94446Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M25.3055 26C23.3879 26 21.8333 24.4454 21.8333 22.5278C21.8333 20.6101 23.3879 19.0555 25.3055 19.0555C27.2232 19.0555 28.7778 20.6101 28.7778 22.5278C28.7778 24.4454 27.2232 26 25.3055 26Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.25001 26C5.33235 26 3.77778 24.4454 3.77778 22.5278C3.77778 20.6101 5.33235 19.0555 7.25001 19.0555C9.16766 19.0555 10.7222 20.6101 10.7222 22.5278C10.7222 24.4454 9.16766 26 7.25001 26Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='tp-feature-content'>
                                    <h3 className='tp-feature-title'>Free Delivary</h3>
                                    <p>Orders from all item</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                            <div className='tp-feature-item d-flex align-items-start'>
                                <div className='tp-feature-icon'>
                                    <span>
                                        <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3636 1V34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M17.8636 7H6.61365C5.22126 7 3.8859 7.55312 2.90134 8.53769C1.91677 9.52226 1.36365 10.8576 1.36365 12.25C1.36365 13.6424 1.91677 14.9777 2.90134 15.9623C3.8859 16.9469 5.22126 17.5 6.61365 17.5H14.1136C15.506 17.5 16.8414 18.0531 17.826 19.0377C18.8105 20.0223 19.3636 21.3576 19.3636 22.75C19.3636 24.1424 18.8105 25.4777 17.826 26.4623C16.8414 27.4469 15.506 28 14.1136 28H1.36365" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='tp-feature-content'>
                                    <h3 className='tp-feature-title'>Return & Refunf</h3>
                                    <p>Maney back guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                            <div className='tp-feature-item d-flex align-items-start'>
                                <div className='tp-feature-icon'>
                                    <span>
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g mask="url(#mask0_1211_583)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4168 27.1116C14.3017 27.9756 15.7266 27.9651 16.6056 27.0816L17.6885 26.0017C18.5285 25.1632 19.6894 24.6848 20.8728 24.6848H22.4178C23.6687 24.6848 24.6856 23.6678 24.6856 22.4184V20.875C24.6856 19.6736 25.1506 18.5441 25.9995 17.6937L27.0795 16.6122C27.519 16.1713 27.7544 15.5998 27.7529 14.9938C27.7514 14.3894 27.513 13.8209 27.0825 13.3919L26.001 12.309C25.1506 11.4525 24.6856 10.3246 24.6856 9.12318V7.58277C24.6856 6.33184 23.6687 5.3149 22.4178 5.3149H20.8758C19.6744 5.3149 18.545 4.84842 17.6945 4.00397L16.6116 2.91954C15.7101 2.02709 14.2717 2.03159 13.3913 2.91804L12.3128 3.99947C11.4519 4.84992 10.3225 5.3149 9.12553 5.3149H7.58212C6.33269 5.3164 5.31575 6.33334 5.31575 7.58277V9.12018C5.31575 10.3216 4.84927 11.451 4.00332 12.303L2.93839 13.3694C2.92789 13.3814 2.91739 13.3904 2.90689 13.4009C2.02644 14.2874 2.03094 15.7258 2.91739 16.6062L4.00032 17.6892C4.84927 18.5411 5.31575 19.6706 5.31575 20.872V22.4184C5.31575 23.6678 6.33119 24.6848 7.58212 24.6848H9.12253C10.3255 24.6863 11.4549 25.1527 12.3053 26.0002L13.3868 27.0786C13.3958 27.0891 13.4063 27.0996 13.4168 27.1116ZM14.9972 30.0002C13.8468 30.0002 12.6963 29.5652 11.8159 28.6923C11.8039 28.6803 11.7919 28.6683 11.7799 28.6548L10.715 27.5914C10.2905 27.1699 9.72352 26.9359 9.12055 26.9344H7.58164C5.09029 26.9344 3.06541 24.908 3.06541 22.4182V20.8717C3.06541 20.2688 2.82992 19.7033 2.40694 19.2773L1.32851 18.2004C-0.423392 16.4575 -0.444391 13.6197 1.27601 11.8498C1.28951 11.8363 1.30301 11.8228 1.31651 11.8093L2.40844 10.7143C2.82992 10.2899 3.06541 9.72139 3.06541 9.11993V7.58252C3.06541 5.09266 5.09029 3.06628 7.58014 3.06478H9.12505C9.72652 3.06478 10.2935 2.82929 10.724 2.40482L11.7964 1.32938C13.5498 -0.436017 16.4161 -0.445016 18.1845 1.31288L19.281 2.40932C19.7054 2.83079 20.2724 3.06478 20.8754 3.06478H22.4173C24.9086 3.06478 26.935 5.09116 26.935 7.58252V9.12293C26.935 9.72439 27.169 10.2929 27.5935 10.7203L28.6704 11.7988C29.5239 12.6462 29.9978 13.7787 30.0023 14.9861C30.0068 16.1935 29.5404 17.329 28.6899 18.1854L27.5905 19.2818C27.169 19.7063 26.935 20.2718 26.935 20.8747V22.4182C26.935 24.908 24.9086 26.9344 22.4188 26.9344H20.8724C20.2784 26.9344 19.6979 27.1744 19.2765 27.5929L18.1995 28.6698C17.3191 29.5562 16.1581 30.0002 14.9972 30.0002Z" fill="currentColor"></path>
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.145 19.9811C10.857 19.9811 10.569 19.8716 10.3501 19.6511C9.91058 19.2116 9.91058 18.5006 10.3501 18.0612L18.0596 10.3501C18.4991 9.91064 19.2115 9.91064 19.651 10.3501C20.0905 10.7896 20.0905 11.502 19.651 11.9415L11.94 19.6511C11.721 19.8716 11.433 19.9811 11.145 19.9811Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7544 20.2476C17.925 20.2476 17.247 19.5772 17.247 18.7477C17.247 17.9183 17.9115 17.2478 18.7409 17.2478H18.7544C19.5839 17.2478 20.2543 17.9183 20.2543 18.7477C20.2543 19.5772 19.5839 20.2476 18.7544 20.2476Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2548 12.748C10.4254 12.748 9.74744 12.0775 9.74744 11.2481C9.74744 10.4186 10.4119 9.74817 11.2413 9.74817H11.2548C12.0843 9.74817 12.7548 10.4186 12.7548 11.2481C12.7548 12.0775 12.0843 12.748 11.2548 12.748Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='tp-feature-content'>
                                    <h3 className='tp-feature-title'>Member Discount</h3>
                                    <p>Onevery order over</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                            <div className='tp-feature-item d-flex align-items-start'>
                                <div className='tp-feature-icon'>
                                    <span>
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 24.3333V15C1.5 11.287 2.975 7.72602 5.60051 5.10051C8.22602 2.475 11.787 1 15.5 1C19.213 1 22.774 2.475 25.3995 5.10051C28.025 7.72602 29.5 11.287 29.5 15V24.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M29.5 25.8889C29.5 26.714 29.1722 27.5053 28.5888 28.0888C28.0053 28.6722 27.214 29 26.3889 29H24.8333C24.0082 29 23.2169 28.6722 22.6335 28.0888C22.05 27.5053 21.7222 26.714 21.7222 25.8889V21.2222C21.7222 20.3971 22.05 19.6058 22.6335 19.0223C23.2169 18.4389 24.0082 18.1111 24.8333 18.1111H29.5V25.8889ZM1.5 25.8889C1.5 26.714 1.82778 27.5053 2.41122 28.0888C2.99467 28.6722 3.78599 29 4.61111 29H6.16667C6.99179 29 7.78311 28.6722 8.36656 28.0888C8.95 27.5053 9.27778 26.714 9.27778 25.8889V21.2222C9.27778 20.3971 8.95 19.6058 8.36656 19.0223C7.78311 18.4389 6.99179 18.1111 6.16667 18.1111H1.5V25.8889Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='tp-feature-content'>
                                    <h3 className='tp-feature-title'>Support 24/7</h3>
                                    <p>Contact us 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prouduct*/}
            
            
      
            <section className='tp-product-area pb-55'>
                <div className='container'>
                    <div className='row align-items-end'>
                        <div className='col-xl-5 col-lg-6 col-md-5'>
                            <div className='tp-section-title-wrapper mb-40'>
                                <h3 class="tp-section-title">Trending Products

                                    <svg width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="currentColor" stroke-width="4" stroke-miterlimit="3.8637" stroke-linecap="round"></path>
                                    </svg>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product'>
                    <div className='container'>
                        {
                            Homeproduct.map((curElm) => {
                                return (

                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                            <img src={curElm.Img}></img>
                                            <div className='icon'>
                                                <li onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                                <li onClick={()=> view(curElm)}><BsEye /></li>
                                                <li><AiOutlineHeart /></li>
                                            </div>
                                        </div>

                                        <div className='detail'>
                                            <p>{curElm.Name}</p>
                                            <h3><a href="#">{curElm.Title}</a></h3>
                                            <span className='old'>{curElm.Oldprice}</span>
                                            <span className='price'>{curElm.Price}</span>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </section>
            {/* Banner */}
            <section className='tp-banner-area pb-70'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7'>
                            <div className='tp-banner-item tp-banner-height p-relative mb-30 z-index-1 fix'>
                                <div className='tp-banner-thumb include-bg transition-3'>
                                    <div className='tp-banner-content'>
                                        <span>Sale 20% off all store</span>
                                        <h3 className='tp-banner-title'><a href="#">Smartphone <br /> BLU G91 Pro 2022</a></h3>
                                        <div class="tp-banner-btn">
                                            <a href="#" class="tp-link-btn">Shop Now
                                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.9998 6.19656L1 6.19656" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M8.75674 0.975394L14 6.19613L8.75674 11.4177" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5'>
                            <div className='tp-banner-item tp-banner-item-sm tp-banner-height p-relative mb-30 z-index-1 fix'>
                                <div className='tp-banner-thumb include-bg1 transition-3'>
                                    <div class="tp-banner-content">
                                        <h3 class="tp-banner-titlesm">
                                            <a href="product-details.html">HyperX Cloud II <br /> Wireless</a>
                                        </h3>
                                        <p>Sale 35% off</p>
                                        <div class="tp-banner-btn">
                                            <a href="product-details.html" class="tp-link-btn">Shop Now
                                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.9998 6.19656L1 6.19656" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M8.75674 0.975394L14 6.19613L8.75674 11.4177" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Area */}
            <section className='tp-product-offer grey-bg-2 pt-70 pb-80'>
                <div className='container'>
                    <div className='row align-items-end'>
                        <div className='col-xl-4 col-md-5 col-sm-6'>
                            <div className='tp-section-title-wrapper mb-40'>
                                <h3 className='tp-section-title'>
                                    Deal of The Day
                                    <svg width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="currentColor" stroke-width="4" stroke-miterlimit="3.8637" stroke-linecap="round"></path>
                                    </svg>
                                </h3>
                            </div>
                        </div>
                        <div className='col-xl-8 col-md-7 col-sm-6'>
                            <div className='tp-product-offer-more-wrapper d-flex justify-content-sm-end p-relative z-index-1'>
                                <div className='tp-product-offer-more mb-40 text-sm-end grey-bg-2'>
                                    <a href="#" className=' tp-btn tp-btn-blue'>
                                        View All Deals
                                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                    <span class="tp-product-offer-more-border"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='tb-product-item'>
                                <div className='tp-product-thumb p-relative fix m-img'>
                                    <a href="#"> <img src="./img/product-1.jpg" alt="" /></a>
                                    <div className='tp-product-add-cart-btn-large-wrapper'>
                                        <button className='tp-product-add-cart-btn-large'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"></path>
                                            </svg>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div className='tp-product-content'>
                                    <div className='tp-product-category'>
                                        <a href="#">HD Camera</a>
                                    </div>
                                    <h3 class="tp-product-title">
                                        <a href="#">
                                            Professional Camera 4K Digital Video <br />Camera.
                                        </a>
                                    </h3>
                                    <div className='tp-product-rating d-flex align-items-center'>
                                        <div className='tp-product-rating-icon'>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                        </div>
                                        <span>(15 Review)</span>
                                    </div>
                                    <div className='tp-product-price-wrapper'>
                                        <span class="tp-product-price old-price">$340.00</span>
                                        <span class="tp-product-price new-price">$475.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className='tb-product-item'>
                                <div className='tp-product-thumb p-relative fix m-img'>
                                    <a href="#"> <img src="./img/product-offer-2.jpg" alt="" /></a>
                                    <div className='tp-product-add-cart-btn-large-wrapper'>
                                        <button className='tp-product-add-cart-btn-large'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"></path>
                                            </svg>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div className='tp-product-content'>
                                    <div className='tp-product-category'>
                                        <a href="#">HD Camera</a>
                                    </div>
                                    <h3 class="tp-product-title">
                                        <a href="#">
                                            Professional Camera 4K Digital Video <br />Camera.
                                        </a>
                                    </h3>
                                    <div className='tp-product-rating d-flex align-items-center'>
                                        <div className='tp-product-rating-icon'>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                        </div>
                                        <span>(15 Review)</span>
                                    </div>
                                    <div className='tp-product-price-wrapper'>
                                        <span class="tp-product-price old-price">$340.00</span>
                                        <span class="tp-product-price new-price">$475.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className='tb-product-item'>
                                <div className='tp-product-thumb p-relative fix m-img'>
                                    <a href="#"> <img src="./img/product-offer-3.jpg" alt="" /></a>
                                    <div className='tp-product-add-cart-btn-large-wrapper'>
                                        <button className='tp-product-add-cart-btn-large'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"></path>

                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"></path>
                                            </svg>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div className='tp-product-content'>
                                    <div className='tp-product-category'>
                                        <a href="#">HD Camera</a>
                                    </div>
                                    <h3 class="tp-product-title">
                                        <a href="#">
                                            Professional Camera 4K Digital Video <br />Camera.
                                        </a>
                                    </h3>
                                    <div className='tp-product-rating d-flex align-items-center'>
                                        <div className='tp-product-rating-icon'>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                            <span><RiStarFill /></span>
                                        </div>
                                        <span>(15 Review)</span>
                                    </div>
                                    <div className='tp-product-price-wrapper'>
                                        <span class="tp-product-price old-price">$340.00</span>
                                        <span class="tp-product-price new-price">$475.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deal */}
            <section className='tp-product-gadget-area pt-80 pb-75'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-5'>
                            <div className='tp-product-gadget-sidebar mb-40'>
                                <div className='tp-product-gadget-categories p-relative fix mb-10'>
                                    <div className='tp-product-gadget-thumb'>
                                        <img src="./img/gadget-girl.png" alt="" />
                                    </div>
                                    <h3 class="tp-product-gadget-categories-title">Electronics <br /> Gadgets</h3>
                                    <div className='tp-product-gadget-categories-list'>
                                        <ul>
                                            <li><a href="#">Micrscope</a></li>
                                            <li><a href="#">Remote Control</a></li>
                                            <li><a href="#">Monitor</a></li>
                                            <li><a href="#">Thermometer</a></li>
                                            <li><a href="#">Backpack</a></li>
                                            <li><a href="#">Headphones</a></li>
                                        </ul>
                                    </div>
                                    <div className='tp-product-gadget-btn'>
                                        <a href="shop-category.html" class="tp-link-btn">More Products
                                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9998 6.19656L1 6.19656" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M8.75674 0.975394L14 6.19613L8.75674 11.4177" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className='tp-product-gadget-banner '>

                                    <div className='tp-product-gadget-banner-content'>
                                        <span class="tp-product-gadget-banner-price">Only $99.00</span>
                                        <h3 class="tp-product-gadget-banner-title">
                                            <a href="#">Selected novelty <br /> Products</a>
                                        </h3>



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8 col-lg-7'>
                            <div className='tp-product-gadget-wrapper'>
                                <div className="row">
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img '>

                                                <a href="#">
                                                    <img src="./img/product-12.jpg" alt="" />
                                                </a>

                                                <div class="tp-product-badge">
                                                    <span class="product-offer">-25%</span>
                                                </div>
                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Electric</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Yamaha Electric Violin-YEV104BL-Black String
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(6 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price new-price">$72.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img'>
                                                <a href="#">
                                                    <img src="./img/product-13.jpg" alt="" />
                                                </a>

                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Tablet Pro 8</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Microsoft Surface Pro 8-13" Touchscreen.
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(5 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price old-price">$475.00</span>
                                                        <span class="tp-product-price new-price">$340.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img'>
                                                <a href="#">
                                                    <img src="./img/product-14.jpg" alt="" />
                                                </a>
                                                <div class="tp-product-badge">
                                                    <span class="product-trending">Sale</span>
                                                </div>
                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Electric</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Yamaha Electric Violin-YEV104BL-Black String
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(6 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price new-price">$142.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img'>
                                                <a href="#">
                                                    <img src="./img/product-15.jpg" alt="" />
                                                </a>
                                                <div class="tp-product-badge">
                                                    <span class="product-offer">-25%</span>
                                                </div>
                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Electric</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Yamaha Electric Violin-YEV104BL-Black String
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(6 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price old-price">$135.00</span>
                                                        <span class="tp-product-price new-price">$114.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img'>
                                                <a href="#">
                                                    <img src="./img/product-16.jpg" alt="" />
                                                </a>
                                                <div class="tp-product-badge">
                                                    <span class="product-offer">Hot</span>
                                                </div>
                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Electric</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Yamaha Electric Violin-YEV104BL-Black String
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(6 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price new-price">$40.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-sm-6"'>
                                        <div className='tp-product-item p-relative transition-3 mb-25'>
                                            <div className='tp-product-thumb p-relative fix m-img'>
                                                <a href="#">
                                                    <img src="./img/product-17.jpg" alt="" />
                                                </a>
                                                {/* product action */}



                                                <div className='tp-product-content'>
                                                    <div className='tp-product-category'>
                                                        <a href="shop.html">Electric</a>
                                                    </div>
                                                    <h3 class="tp-product-title">
                                                        <a href="product-details.html">
                                                            Yamaha Electric Violin-YEV104BL-Black String
                                                        </a>
                                                    </h3>
                                                    <div className='tp-product-rating d-flex align-items-center'>
                                                        <div className='tp-product-rating-icon'>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                            <span><RiStarFill /></span>
                                                        </div>
                                                        <div class="tp-product-rating-text">
                                                            <span>(6 Review)</span>
                                                        </div>
                                                    </div>
                                                    <div className='tp-product-price-wrapper'>
                                                        <span class="tp-product-price new-price">$133.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Product-sm */}
            <section className='tp-product-sm-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4 col-md-6'>
                            <div className='tp-product-sm-list mb-50'>
                                <div className='tp-section-title-wrapper mb-40'>
                                    <h3 class="tp-section-title tp-section-title-sm">Discount Products
                                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636" stroke="currentColor" stroke-width="3" stroke-miterlimit="3.8637" stroke-linecap="round"></path>
                                        </svg>
                                    </h3>
                                </div>
                                <div className='tp-product-sm-wrapper mr-20'>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-1.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">HD Camera</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Oppo A96 5G Mobile Phone
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$72.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-2.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">HD Camera</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Oppo A96 5G Mobile Phone
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$72.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-3.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">HD Camera</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Oppo A96 5G Mobile Phone
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$72.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-md-6'>
                            <div className='tp-product-sm-list mb-50'>
                                <div className='tp-section-title-wrapper mb-40'>
                                    <h3 class="tp-section-title tp-section-title-sm">Discount Products
                                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636" stroke="currentColor" stroke-width="3" stroke-miterlimit="3.8637" stroke-linecap="round"></path>
                                        </svg>
                                    </h3>
                                </div>
                                <div className='tp-product-sm-wrapper mr-20'>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-4.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">Motherboard</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    CPU Cooler 6 Heat Pipes
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$12.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-5.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">Digital Camera</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Photography Camera
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$84.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-6.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">Smart Watches</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Real-Time Weather.
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$120.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-md-6'>
                            <div className='tp-product-sm-list mb-50'>
                                <div className='tp-section-title-wrapper mb-40'>
                                    <h3 class="tp-section-title tp-section-title-sm">Discount Products
                                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M62 13.1107C1.91792 -5.41202 -3.10865 1.22305 5.00242 18.3636" stroke="currentColor" stroke-width="3" stroke-miterlimit="3.8637" stroke-linecap="round"></path>
                                        </svg>
                                    </h3>
                                </div>
                                <div className='tp-product-sm-wrapper mr-20'>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-7.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">Usb Flash Disk</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Metal Usb 3.0 Pen Drive 2TB
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$102.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-8.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">HawkEye</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    HawkEye Fishtrax
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$59.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tp-product-sm-item d-flex align-items-center'>
                                        <div className='tp-product-thumb mr-25 fix'>
                                            <a href="product-details.html">
                                                <img src='./img/product-sm-9.jpg' alt="" />
                                            </a>
                                        </div>
                                        <div className='tp-product-sm-content'>
                                            <div className='tp-product-category'>
                                                <a href="#">HD Camera</a>
                                            </div>
                                            <h3 class="tp-product-title">
                                                <a href="product-details.html">
                                                    Oppo A96 5G Mobile Phone
                                                </a>
                                            </h3>
                                            <div className='tp-product-rating d-sm-flex align-items-center'>
                                                <div className='tp-product-rating-icon'>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                    <span><RiStarFill /></span>
                                                </div>
                                                <div class="tp-product-rating-text">
                                                    <span>(6 Review)</span>
                                                </div>
                                            </div>
                                            <div className='tp-product-price-wrapper'>
                                                <span class="tp-product-price new-price">$72.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instagram */}
            <div className='tp-instagram-area p-70'>
                <div className='container'>
                    <div className='row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        <div className='col'>
                            <div className='tp-instagram-item p-relative z-index-1 fix mb-30 w-img'>
                                <img src='./img/instagram-1.jpg' alt="" />
                                <div class="tp-instagram-icon">
                                    <a href="#" class="popup-image"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-instagram-item p-relative z-index-1 fix mb-30 w-img'>
                                <img src='./img/instagram-2.jpg' alt="" />
                                <div class="tp-instagram-icon">
                                    <a href="#" class="popup-image"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-instagram-item p-relative z-index-1 fix mb-30 w-img'>
                                <img src='./img/instagram-3.jpg' alt="" />
                                <div class="tp-instagram-icon">
                                    <a href="#" class="popup-image"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-instagram-item p-relative z-index-1 fix mb-30 w-img'>
                                <img src='./img/instagram-4.jpg' alt="" />
                                <div class="tp-instagram-icon">
                                    <a href="#" class="popup-image"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='tp-instagram-item p-relative z-index-1 fix mb-30 w-img'>
                                <img src='./img/instagram-5.jpg' alt="" />
                                <div class="tp-instagram-icon">
                                    <a href="#" class="popup-image"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='tp-subscribe-area'>
                <div className='tp-subscribe-shape'>
                    <img className='shape1' src="./img/subscribe-shape-1.png" alt="" />
                    <img className='shape2' src="./img/subscribe-shape-2.png" alt="" />
                    <img className='shape3' src="./img/subscribe-shape-3.png" alt="" />
                    <img className='shape4' src="./img/subscribe-shape-4.png" alt="" />
                    <div className='tp-subscribe-plane'>
                        <img className='tp-subscribe-plane-shape' src="./img/plane.png" alt="" />
                        <svg width="399" height="110" class="d-none d-sm-block" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="white" stroke-opacity="0.5" stroke-dasharray="3 3"></path>
                        </svg>
                        <svg class="d-sm-none" width="193" height="110" viewBox="0 0 193 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046" stroke="white" stroke-opacity="0.5" stroke-dasharray="3 3"></path>
                        </svg>
                    </div>
                </div>
                <div className='container'>
                    <div className='row algin-items-center'>
                        <div className='col-xl-7 col-lg-7'>
                            <div className='tp-subscribe-content'>
                                <span>Sale 20% off all store</span>
                                <h3 class="tp-subscribe-title">Subscribe our Newsletter</h3>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5">
                            <div class="tp-subscribe-form">
                                <form action="#">
                                    <div class="tp-subscribe-input">
                                        <input type="email" placeholder="Enter Your Email" />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="tp-footer-area" data-bg-color="footer-bg-grey">
                <div class="tp-footer-top pt-95 pb-40">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                                <div class="tp-footer-widget footer-col-1 mb-50">
                                    <div class="tp-footer-widget-content">
                                        <div class="tp-footer-logo">
                                            <a href="index.html">
                                                <img src="./img/logo.svg" alt="logo" />
                                            </a>
                                        </div>
                                        <p class="tp-footer-desc">We are a team of designers and developers that create high quality WordPress</p>
                                        <div class="tp-footer-social">
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div class="tp-footer-widget footer-col-2 mb-50">
                                    <h4 class="tp-footer-widget-title">My Account</h4>
                                    <div class="tp-footer-widget-content">
                                        <ul>
                                            <li><a href="#">Track Orders</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Order History</a></li>
                                            <li><a href="#">Returns</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div class="tp-footer-widget footer-col-3 mb-50">
                                    <h4 class="tp-footer-widget-title">Infomation</h4>
                                    <div class="tp-footer-widget-content">
                                        <ul>
                                            <li><a href="#">Our Story</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                            <li><a href="#">Latest News</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div class="tp-footer-widget footer-col-4 mb-50">
                                    <h4 class="tp-footer-widget-title">Talk To Us</h4>
                                    <div class="tp-footer-widget-content">
                                        <div class="tp-footer-talk mb-20">
                                            <span>Got Questions? Call us</span>
                                            <h4><a href="tel:670-413-90-762">+670 413 90 762</a></h4>
                                        </div>
                                        <div class="tp-footer-contact">
                                            <div class="tp-footer-contact-item d-flex align-items-start">
                                                <div class="tp-footer-contact-icon">
                                                    <span>
                                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="tp-footer-contact-content">
                                                    <p><a href="mailto:shofy@support.com">shofy@support.com</a></p>
                                                </div>
                                            </div>
                                            <div class="tp-footer-contact-item d-flex align-items-start">
                                                <div class="tp-footer-contact-icon">
                                                    <span>
                                                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.50001 10.9417C9.99877 10.9417 11.2138 9.72668 11.2138 8.22791C11.2138 6.72915 9.99877 5.51416 8.50001 5.51416C7.00124 5.51416 5.78625 6.72915 5.78625 8.22791C5.78625 9.72668 7.00124 10.9417 8.50001 10.9417Z" stroke="currentColor" stroke-width="1.5"></path>
                                                            <path d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z" stroke="currentColor" stroke-width="1.5"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="tp-footer-contact-content">
                                                    <p><a href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4" target="_blank">79 Sleepy Hollow St. <br /> Jamaica, New York 1432</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tp-footer-bottom">
                    <div class="container">
                        <div class="tp-footer-bottom-wrapper">
                            <div class="row align-items-center">
                                <div class="col-md-6">

                                </div>
                                <div class="col-md-6">
                                    <div class="tp-footer-payment text-md-end">
                                        <p>
                                            <img src="assets/img/footer/footer-pay.png" alt="" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Swiper>
        </>
    );
}


