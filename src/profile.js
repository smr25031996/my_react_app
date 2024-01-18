import React from 'react';

function Profile(){
    let element=null;
    let isLoggedIn=false;
    if(isLoggedIn){
        element=<h2>Welcome Admin</h2>
    }else{
        element=<h3>Please Login</h3>
    }
    return (
        <React.Fragment>
            <h1>Profile Section</h1>
            <h1>{element}</h1>
            {isLoggedIn&& <h2>WC</h2>}
            {!isLoggedIn&& <h2>sorry</h2>}
        </React.Fragment>
    )
}

export default Profile;