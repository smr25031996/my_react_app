import React from "react";

function Cart() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const doubled = arr.map((value) => value * 2);
  const object = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street"
  };
  const properties = Object.keys(object).map((property) => object[property]);
  console.log(properties); // ["John Doe", 30, "123 Main Street"]
  return (
    <React.Fragment>
      <h1>Cart Section</h1>
      <h4>{doubled + " "}</h4>
    </React.Fragment>
  );
}

export default Cart;
