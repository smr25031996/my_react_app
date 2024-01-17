import React from "react";
function Home() {
  let count = 5;
  let x = 25;
  let y = 50;
  let person = {
    first_name: "Shubham",
    last_name: "Rajput",
  };
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <h1>Accessing The Variable</h1>
      <h1>{count}</h1>
      <h1>{count * count}</h1>
      <h1>accesing Object</h1>
      <h1>{person.first_name + " " + person.last_name}</h1>
      <h3>{x > y ? "true" : "false"}</h3>
    </React.Fragment>
  );
}
export default Home;
