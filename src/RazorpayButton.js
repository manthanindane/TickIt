import React from 'react';
import Razorpay from 'razorpay';
class RazorpayButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        orderId: '',
      };
    }
  
    componentDidMount() {
      // Create a Razorpay instance
      this.razorpay = new Razorpay({
        key: 'rzp_test_kbJD4cSmO5uBCm', // Enter your Razorpay Key ID
        currency: 'INR',
        handler: this.handlePaymentSuccess,
      });
  
      // Make an API call to your server to create an order
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
      fetch('YOUR_API_ENDPOINT')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ orderId: data.orderId });
        })
        .catch((error) => {
          console.log('Error creating order:', error);
        });
    }
  
    handlePaymentSuccess = (response) => {
      // Handle the payment success event
      console.log('Payment successful!', response);
  
      // Perform any further actions (e.g., update UI, show success message, etc.)
    };
  
    handleClick = () => {
      const { orderId } = this.state;
  
      // Open the Razorpay checkout form
      this.razorpay.open({
        amount: 50000, // Amount is in currency subunits. For example, 50000 refers to 500 INR
        order_id: orderId,
      });
    };
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Pay with Razorpay
        </button>
      );
    }
  }
  
  export default RazorpayButton;
