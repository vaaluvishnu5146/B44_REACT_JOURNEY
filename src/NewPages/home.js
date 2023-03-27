import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Cart from "../pages/Cart";
import Counter from "../pages/counter";

/**
 *  SIGNIN - /signin
 *  SIGNUP - /signup
 *  HOME - /home
 *      COUNTER - /home/cart
 *      CART - /home/cart
 */

export default function Home() {
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="cart" relative="path">
              Cart
            </Link>
          </li>
          <li>
            <Link to="counter" relative="path">
              Counter
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={() => <div>Landing</div>} />
        <Route path="cart" element={<Cart />} />
        <Route path="counter" Component={<Counter />} />
      </Routes>
    </div>
  );
}
