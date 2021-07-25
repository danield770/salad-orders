import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const isHomePage = location.pathname === '/salad-orders/';
  return (
    <section>
      <h1>The salad boutique</h1>

      {isHomePage && (
        <div className='welcome'>
          <h2>Welcome to the salad boutique!</h2>
          <p>
            If you're interested in a delicious and nutritious salad - you've
            come to the right place!
          </p>
          <p>
            Click on the 'order salad' link to choose some of the most
            breathtaking ingredients for the salad of your dreams
          </p>
          <Link className='link-button' to='/salad-orders/ingredients'>
            Order Salad
          </Link>
        </div>
      )}
    </section>
  );
}

export default Home;
