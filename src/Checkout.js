import React from 'react';
import './Checkout.css';
import './Subtotal';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.spinaclean.com/media/mageplaza/blog/post/mageplaza/blog/post/s/p/specialoffers.jpg" alt=""/>

                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
