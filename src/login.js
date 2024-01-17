import React from "react";
// While working with React components, multiple React elements are required to be rendered. For example, 
// the below code needs to be render multiple JSX elements:
// The above code logs an error saying "Adjacent JSX elements must be wrapped in an enclosing tag". 
//  As per the JSX syntax, all the adjacent elements must be wrapped in an enclosing tag i.e., 
// there should be only one outermost element. Hence, the above code can be modified as follows:
// React Fragments
// By adhering to JSX syntax the <div> tag can be used for grouping the elements and this introduces an extra and 
// unnecessary node into the DOM. As a solution to this, React Fragments are introduced which is a common pattern in 
// React for a component to return multiple elements. React Fragments allows to group a list of React elements 
// without adding any extra node to the DOM.
// Modifying the previous code as follows using React Fragments:
// You can use empty tags instead of React. Fragment.Fragments can be passed with key attributes if required. Empty tags don’t support any attributes.


function LogIn(){
    return (
        <React.Fragment>
        <form>
            <h1>Log In</h1>
            <input type="text" placeholder="User Name"></input>
            <br />
            <input type="text" placeholder="Password"></input>
            <br />
            <input type="submit" nvalue='log'></input>
        </form>
        </React.Fragment>
    )
}

export default LogIn;