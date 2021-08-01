import orderReducer, {
  updateQuantity,
  resetOrder,
  setUserDetails,
  toggleModal,
} from './orderSlice';

describe('order reducer', () => {
  const initialState = {
    ingredients: [
      {
        name: 'cucumber',
        price: 0.5,
      },
      {
        name: 'tomato',
        price: 0.6,
      },
      {
        name: 'egg',
        price: 3,
      },
      {
        name: 'tuna',
        price: 2,
      },
      {
        name: 'potato',
        price: 1.2,
      },
      {
        name: 'lettuce',
        price: 0.2,
      },
      {
        name: 'corn',
        price: 2,
      },
      {
        name: 'onion',
        price: 0.3,
      },
      {
        name: 'mashroom',
        price: 2.5,
      },
      {
        name: 'pasta',
        price: 4,
      },
      {
        name: 'pickles',
        price: 3.3,
      },
    ],
    status: 'idle',
    user: {},
    showModal: false,
  };
  it('should handle initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      ingredients: [],
      status: 'idle',
      user: {},
      showModal: false,
    });
  });

  it('should handle update quantity', () => {
    const actual = orderReducer(
      initialState,
      updateQuantity({ ingredient: 'egg', quantity: 4 })
    );
    expect(actual.ingredients).toEqual([
      {
        name: 'cucumber',
        price: 0.5,
      },
      {
        name: 'tomato',
        price: 0.6,
      },
      {
        name: 'egg',
        price: 3,
        quantity: 4,
      },
      {
        name: 'tuna',
        price: 2,
      },
      {
        name: 'potato',
        price: 1.2,
      },
      {
        name: 'lettuce',
        price: 0.2,
      },
      {
        name: 'corn',
        price: 2,
      },
      {
        name: 'onion',
        price: 0.3,
      },
      {
        name: 'mashroom',
        price: 2.5,
      },
      {
        name: 'pasta',
        price: 4,
      },
      {
        name: 'pickles',
        price: 3.3,
      },
    ]);
  });

  it('should handle setUserDetails', () => {
    const actual = orderReducer(
      initialState,
      setUserDetails({
        name: 'Daniel',
        email: 'dan@gmail.com',
        note: 'testing...',
      })
    );
    expect(actual.user).toEqual({
      name: 'Daniel',
      email: 'dan@gmail.com',
      note: 'testing...',
    });
  });

  it('should handle toggle modal', () => {
    const actual = orderReducer(initialState, toggleModal());
    expect(actual.showModal).toBe(true);
  });

  //   it('should handle reset order', () => {
  //     const actual = orderReducer(
  //       Object.assign(
  //         initialState,
  //         { showModal: true },
  //         { user: { name: 'Daniel', email: 'dan@gmail.com', note: 'testing...' } }
  //       ),
  //       resetOrder()
  //     );
  //     expect(actual).toEqual(initialState);
  //   });
});
