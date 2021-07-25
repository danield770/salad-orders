import { selectIngredients } from '../features/order/orderSlice';
import { useSelector } from 'react-redux';
function OrderSummary() {
  const ingredients = useSelector(selectIngredients);
  let total = 0;
  let subtotal;
  return (
    <table>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {ingredients?.length > 0 &&
          ingredients
            .filter((item) => item.quantity > 0)
            .map(({ name, price, quantity }) => (
              <tr key={name}>
                <td className='ingredient'>{name}</td>
                <td className='quantity'>{quantity}</td>
                <td className='price'>
                  {
                    ((subtotal = price * quantity),
                    (total += subtotal),
                    subtotal.toFixed(2))
                  }
                </td>
              </tr>
            ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Price:</td>
          <td>{total.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default OrderSummary;
