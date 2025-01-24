import React from 'react';

const DeliveryPolicy = () => {
  return (
    <>
      <div className='container mx-auto text-lg px-4 my-4 lg:px-0'>
        <h2 className='text-2xl font-bold py-4'>Delivery Policy for Shopy</h2>
        <p>At Shopy, we are committed to delivering your orders promptly and securely. Please read our delivery policy to understand how we handle shipping within Bangladesh.</p>
        <h2 className='text-xl font-bold py-4'>Delivery Areas</h2>
        <p>We deliver to all districts across Bangladesh. Whether you're in Dhaka, Chattogram, or any remote area, Shopy ensures your products reach you.</p>
        <h2 className='text-xl font-bold py-4'>Delivery Time</h2>
        <ul>
          <li>
            <b>Inside Dhaka</b>: Orders are delivered within 1-3 business days.
          </li>
          <li>
            <b>Outside Dhaka</b>: Orders are delivered within 3-7 business days, depending on the location.
          </li>
          <li>
            <b>Pre-Order Items</b>: Delivery timelines for pre-order items may vary and will be communicated at the time of purchase.
          </li>
        </ul>
        <h2 className='text-xl font-bold py-4'>Delivery Charges</h2>
        <ul>
          <li>
            <b>Inside Dhaka</b>: Flat rate of ৳50.
          </li>
          <li>
            <b>Outside Dhaka</b>: Flat rate of ৳100.
          </li>
          <li>Free delivery is available on orders above ৳2,000.</li>
        </ul>
        <h2 className='text-xl font-bold py-4'>Order Confirmation</h2>
        <p>Once your order is placed, you will receive a confirmation via SMS or email.</p>
        <p>For cash-on-delivery (COD) orders, our team may contact you for verification.</p>
        <h2 className='text-xl font-bold py-4'>Delivery Process</h2>
        Orders are dispatched through our trusted courier partners or Shopy’s in-house delivery team. For any updates, you can track your order through the tracking link provided in your confirmation
        email/SMS.
        <h2 className='text-xl font-bold py-4'>Delivery Attempts</h2>
        Our delivery team will make up to two attempts to deliver your order. If delivery fails after two attempts, the order will be canceled, and you may need to place a new order.
        <h2 className='text-xl font-bold py-4'>Customer Responsibilities</h2>
        Please ensure your contact details and delivery address are accurate when placing an order. Provide a reachable phone number for smoother delivery coordination.
        <h2 className='text-xl font-bold py-4'>Damaged or Missing Items</h2>
        If you receive a damaged or incorrect item, please notify us within 24 hours of delivery by contacting our customer support team. Shopy will arrange a replacement or refund as per our return
        policy.
        <h2 className='text-xl font-bold py-4'>Holiday Deliveries</h2>
        Deliveries may be delayed during public holidays, weekends, or natural calamities.
        <h2 className='text-xl font-bold py-4'>Contact Us</h2>
        For any delivery-related queries, feel free to reach out to our customer support team: Phone: +8801610545222 Email: hello.shahinofficial@gmail.com At Shopy, your satisfaction is our priority. Thank you for
        choosing us for your shopping needs!
      </div>
    </>
  );
};

export default DeliveryPolicy;
