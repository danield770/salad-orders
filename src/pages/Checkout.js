import OrderSummary from '../components/OrderSummary';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  resetOrder,
  selectUser,
  selectShowModal,
} from '../features/order/orderSlice';

function Checkout() {
  const user = useSelector(selectUser);
  const showModal = useSelector(selectShowModal);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Checkout</h2>
      <div className='checkout'>
        <OrderSummary />
        <Form />
      </div>

      {showModal && (
        <Modal>
          <section className='modal-content'>
            <header>
              <h2>Order Summary</h2>
            </header>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            {user.note?.length > 0 && <div>Note: {user.note}</div>}
            <OrderSummary />

            <div>Thanks for shopping at the salad boutique!</div>
            <div>Your delivery is on the way!</div>

            <Link
              className='link-button'
              onClick={() => dispatch(resetOrder())}
              to='/salad-orders'
            >
              Close
            </Link>
          </section>
        </Modal>
      )}
    </div>
  );
}

export default Checkout;
