import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const CartItem = () => {
    const [cartCounter, setCartCounter] : any = useState(1)
  return (
    <>
        <div className="d-flex cart-item mb-3">
            <div className="cart-item-image mr-2">
                <img src="https://via.placeholder.com/100x100" alt="product" />
            </div>
            <div className="cart-item-details text-16">
                <div className="cart-item-price" style={{fontWeight : 500}}>
                    N20,000
                </div>
                <div className="cart-item-title">
                    Coudory Long Sleeve
                </div>
                <div className="cart-item-size">
                    Size : L
                </div>
                <div className="d-flex cart-item-quantity" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                    <button className="btn p-0 mr-3 btn-link">
                        Remove
                    </button>
                    <div className="d-flex">
                        <button className="btn btn-default btn-sm quantity-left-minus" onClick={() => setCartCounter(cartCounter-1)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <span className="btn btn-default disabled btn-sm cart-item-quantity-input" style={{paddingRight : 20, paddingLeft : 20}}>
                            {cartCounter}
                        </span>


                        <button className="btn btn-default btn-sm quantity-right-plus" onClick={() => setCartCounter(cartCounter+1)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CartItem