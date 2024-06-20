import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const { name, email, mobile, bookingId } = state;

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
