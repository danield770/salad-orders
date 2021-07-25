import { Link } from 'react-router-dom';
import { Order } from '../features/order/Order';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../features/order/orderSlice';
function Ingredients() {
  const ingredients = useSelector(selectIngredients);
  return (
    <section>
      <h2>Ingredients</h2>
      <p>
        Please enter how many of each ingredient you would like for your
        delicious salad
      </p>
      <Order />
      {ingredients.some((item) => item.quantity) && (
        <Link className='link-button' to='/salad-orders/checkout'>
          Proceed to Checkout
        </Link>
      )}
    </section>
  );
}

export default Ingredients;
