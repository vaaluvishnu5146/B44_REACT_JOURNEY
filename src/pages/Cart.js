import React, { useState } from "react";
import CartCard from "../components/CartCard";
import ProductCard from "../components/ProductCard";

const data = [
  {
    label: "Idli",
    price: 20,
  },
  {
    label: "Dosa",
    price: 40,
  },
  {
    label: "Poori",
    price: 40,
  },
  {
    label: "Sevai",
    price: 35,
  },
  {
    label: "Coffee",
    price: 15,
  },
  {
    label: "Vadai",
    price: 10,
  },
  {
    label: "Pongal",
    price: 35,
  },
  {
    label: "Veg Biriyani",
    price: 45,
  },
];

function Cart() {
  const [cart, setCart] = useState([]);

  function handleChange(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }

  function handleCart(item = {}) {
    console.log(item);
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy = cartCopy.filter((_data) => _data.label !== item.label);
    }
    setCart(cartCopy);
  }

  function checkCartStatus(item = {}) {
    let status = false;
    if (item.label) {
      status =
        cart.filter((_data) => _data.label === item.label).length > 0
          ? true
          : false;
    }
    return status;
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            {data.map((element, index) => (
              <ProductCard
                key={`product-card-${index}`}
                disabled={checkCartStatus(element)}
                data={element}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="col-lg-4">
            {cart.map((d, index) => (
              <CartCard
                key={`cart-card-${index}`}
                data={d}
                onRemove={handleCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
