import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import './Cart.css'
const Cart = ({ cart, setCart }) => {
    // plus
    const plus = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {

            return curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : curElm
        }))
    }
    // minus
    const minus = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {

            return curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm
        }))
    }
    // removebtn
    const removebtn = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if (exsit.qty > 0) {
            setCart(cart.filter((x) => {

                return x.id !== product.id
            }))
        }
    }
    return (
        <>
            <section class="breadcrumb__area  pt-95 pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="breadcrumb__content p-relative z-index-1">
                                <h3 class="breadcrumb__title">Shopping Cart</h3>
                                <div class="breadcrumb__list">
                                    <span><a href="#">Home</a></span>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tp-cart-area pb-120'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-9 col-lg-8'>
                            <div className='tp-cart-list'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th colspan="2" class="tp-cart-header-product">Product </th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            {cart.length === 0 && <div className='eptycart'><h2 className='epty'>Cart is Empty</h2>
                                                <Link to="/Shop" className='eptycartbtn'>Shop Now</Link>
                                            </div>
                                            }
                                            {
                                                cart.map((curElm) => {
                                                    return (
                                                        <div className='cart-item' key={curElm.id}>

                                                            <td class="tp-cart-img"><a href="#"><img src={curElm.Img} alt="" /></a></td>
                                                            <td class="tp-cart-title"><a href="#">{curElm.Title}</a></td>
                                                            <td class="tp-cart-price"><span>Price: ${curElm.Price}</span></td>
                                                            <td class="tp-cart-quantity">
                                                                <div class="tp-product-quantity mt-10 mb-10">
                                                                    <span class="tp-cart-minus">
                                                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => minus(curElm)}>
                                                                            <path d="M1 1H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <input class="tp-cart-input" type="text" value={curElm.qty} />
                                                                    <span class="tp-cart-plus">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => plus(curElm)}>
                                                                            <path d="M5 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                            <path d="M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </div>

                                                            </td>
                                                            <td className='closebtnn'><button onClick={() => removebtn(curElm)}><IoIosClose /></button></td>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="tp-cart-checkout-wrapper">
                                <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">


                                    {
                                        cart.map((curElm) => {
                                            return (
                                                <div className='cart-item' key={curElm.id}>
                                                    <span class="tp-cart-checkout-top-title">Subtotal</span>
                                                    <span class="tp-cart-checkout-top-price">${curElm.Price * curElm.qty}</span>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                                <div class="tp-cart-checkout-shipping">
                                    <h4 class="tp-cart-checkout-shipping-title">Shipping</h4>

                                    <div class="tp-cart-checkout-shipping-option-wrapper">
                                        <div class="tp-cart-checkout-shipping-option">
                                            <input id="flat_rate" type="radio" name="shipping" />
                                            <label for="flat_rate">Flat rate: <span>$20.00</span></label>
                                        </div>
                                        <div class="tp-cart-checkout-shipping-option">
                                            <input id="local_pickup" type="radio" name="shipping" />
                                            <label for="local_pickup">Local pickup: <span> $25.00</span></label>
                                        </div>
                                        <div class="tp-cart-checkout-shipping-option">
                                            <input id="free_shipping" type="radio" name="shipping" />
                                            <label for="free_shipping">Free shipping</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                                    {
                                        cart.map((curElm) => {
                                            return (
                                                <div className='cart-item' key={curElm.id}>
                                                    <span>Total</span>
                                                    <span>${curElm.Price * curElm.qty}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div class="tp-cart-checkout-proceed">
                                    <a href="checkout.html" class="tp-cart-checkout-btn w-100">Proceed to Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart