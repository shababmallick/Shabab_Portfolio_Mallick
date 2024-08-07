import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm } from '../store/contactSlice';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm({ name, email, message }));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {success && <p>Thank you for your message!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Contact;
