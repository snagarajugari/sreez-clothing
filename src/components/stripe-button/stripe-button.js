import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey = "pk_test_38H6tMXMZ0SlwqKtOtMuITX800rWWaoeCe";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfully completed");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sreez Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
