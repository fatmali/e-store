import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_BYrdQRLSSTLdH8R5Z8cgZE4g00paXJqXuH'

    const onToken = token => {
        console.log(token);
        //send this token to your backend to create a charge
        alert(`Payment Successfull ${token}`);
    }
    return (
        <StripeCheckout
        allowRememberMe
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}>     
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;
