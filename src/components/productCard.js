import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
export default function App() {
  const items = useSelector((state) => state.allCart.items);
  console.log(items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        {items.map((item) => (
          <div
            class="card"
            style={{
              width: "17rem",
              display: "inline-block",
              verticalAlign: "Top",
            }}
          >
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">{item.title}</p>
              <a
                href="#"
                class="btn btn-primary"
                onClick={() => dispatch(addToCart(item))}
              >
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
// export default ProductCard;
