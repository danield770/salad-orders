import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails, toggleModal } from '../features/order/orderSlice';

function Form() {
  const [isValid, setIsValid] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();
  const dispatch = useDispatch();

  function showModal(e) {
    e.preventDefault();
    dispatch(
      setUserDetails({
        name: nameRef.current.value,
        email: emailRef.current.value,
        note: noteRef.current.value,
      })
    );
    dispatch(toggleModal());
  }

  function checkFormValidity() {
    if (
      nameRef.current.value !== '' &&
      /^\S+@\S+\.\S+$/.test(emailRef.current.value)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <form className='checkout-form' onSubmit={showModal}>
      <div className='form-field'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          ref={nameRef}
          onChange={checkFormValidity}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          ref={emailRef}
          onChange={checkFormValidity}
        />
      </div>
      <div className='form-field text-area'>
        <label htmlFor='note'>Additional Notes:</label>
        <textarea
          placeholder="What's on your mind?"
          id='note'
          ref={noteRef}
        ></textarea>
      </div>

      <button className='btn-primary' disabled={!isValid}>
        Order
      </button>
    </form>
  );
}

export default Form;
