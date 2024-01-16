import ReactDOM from 'react-dom';
import App from './App';
import LogIn from './login';
import Register from './Register';

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

const register=ReactDOM.createRoot(document.getElementById('register'));
register.render(
  <Register />
);

const logIn=ReactDOM.createRoot(document.getElementById('logIn'));
logIn.render(
  <LogIn />
);

// reportWebVitals();