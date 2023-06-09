import Modal from '../../components/Modal';
import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
  const [showModal, setShowModal] = useState({ show: false });

  const openModal = (content) => setShowModal({ show: true, content });
  const closeModal = () => setShowModal({ show: false });

  const onSubmitHandler = (e) => {
    openModal('Thanks for your review!');
    e.preventDefault();
  };

  return (
    <div id='contact'>
      <h2>
        <i className='fa-solid fa-envelope' />
        Contact Us!
      </h2>
      <p>
        Welcome to the contact page for BurgerZone! If you have any questions,
        comments, or feedback about our delicious burgers or any other aspect of
        our restaurant, we would love to hear from you. Please use the form
        below to send us a message, and one of our team members will get back to
        you as soon as possible. Thank you for choosing BurgerZone, and we look
        forward to hearing from you!
      </p>
      <form onSubmit={onSubmitHandler}>
        <div className='form-input'>
          <label for='name'>Name:</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-input'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-input'>
          <label for='message'>Message:</label>
          <textarea id='message' name='message' required />
        </div>
        <div className='form-input'>
          <div></div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {showModal.show && (
        <Modal isOpen={showModal.show} onClose={closeModal}>
          {showModal.content}
        </Modal>
      )}
    </div>
  );
};

export default Contact;
