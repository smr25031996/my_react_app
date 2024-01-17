import React from "react";
function Register() {
  return (
    <React.Fragment>
      <form>
        <h1>Log In</h1>
        <input type="text" placeholder="First Name"></input>
        <br />
        <input type="text" placeholder="last Name"></input>
        <br />
        <input type="text" placeholder="Contact Number"></input>
        <br />
        <textarea typeof="address"placeholder="Address "></textarea> <br />
        <input type="text" placeholder="User Name"></input>
        <br />
        <input type="password" placeholder="Password"></input>
        <br />
        <input type="submit"></input>
      </form>
    </React.Fragment>
  );
}

export default Register;
