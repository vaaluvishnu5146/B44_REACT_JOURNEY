import React from "react";
import { Link, Outlet } from "react-router-dom";

/**
 *  SIGNIN - /signin
 *  SIGNUP - /signup
 *  HOME - /home
 *      COUNTER - /home/cart
 *      CART - /home/cart
 */

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home/cart">Cart</Link>
          </li>
          <li>
            <Link to="/home/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
