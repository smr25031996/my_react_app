import ReactDOM from "react-dom/client";
import App from "./App";
import LogIn from "./login";
import Register from "./Register";
import About from "./about";
import Order from "./order";
import Favourites from "./Favourites";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./product_list";
import ProductDetails from "./product_details";
import Home from "./home";
import NotFound from "./not_found";
import Navbar from "./navbar";
import Footer from "./footer";
import Review from "./review";
import Profile from "./profile";
import Cart from "./cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
const navbar = ReactDOM.createRoot(document.getElementById("nav"));
navbar.render(<Navbar />);

const homePage = ReactDOM.createRoot(document.getElementById("home"));
homePage.render(<Home />);

const register = ReactDOM.createRoot(document.getElementById("register"));
register.render(<Register />);

const logIn = ReactDOM.createRoot(document.getElementById("logIn"));
logIn.render(<LogIn />);

const profile = ReactDOM.createRoot(document.getElementById("profile"));
profile.render(<Profile />);

const about = ReactDOM.createRoot(document.getElementById("about"));
about.render(<About />);

const Product_list = ReactDOM.createRoot(
  document.getElementById("product_list")
);
Product_list.render(<ProductList />);

const product_details = ReactDOM.createRoot(
  document.getElementById("product_details")
);
product_details.render(<ProductDetails />);

const review = ReactDOM.createRoot(document.getElementById("review"));
review.render(<Review />);

const cart = ReactDOM.createRoot(document.getElementById("cart"));
cart.render(<Cart />);

const order = ReactDOM.createRoot(document.getElementById("order"));
order.render(<Order />);

const favourite = ReactDOM.createRoot(document.getElementById("fav"));
favourite.render(<Favourites />);

const not_found = ReactDOM.createRoot(document.getElementById("not_found"));
not_found.render(<NotFound />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer />);

reportWebVitals();
