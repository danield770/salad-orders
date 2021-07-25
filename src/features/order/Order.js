import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateQuantity,
  populateIngredients,
  selectIngredients,
  selectStatus,
} from './orderSlice';

export function Order() {
  const ingredients = useSelector(selectIngredients);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ingredients.length > 0) return; // no need to fetch... we already have them!
    // console.log('fetching...dispatch...');
    dispatch(populateIngredients());
  }, [dispatch, ingredients]);

  return (
    <div>
      {status === 'loading' ? (
        <div className='loading'>Loading...</div>
      ) : (
        <ul className='order-list'>
          {ingredients?.length > 0 &&
            ingredients.map(({ name }) => (
              <li className='order-item' key={name}>
                <span>{name}</span>
                <input
                  type='number'
                  min='0'
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        ingredient: name,
                        quantity: Number(e.target.value),
                      })
                    )
                  }
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
