import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <h4>GG Store</h4>
      <div>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Home</button>{" "}
        </Link>
        <Link to="/category/items magicos">
          <button className="btn btn-outline-dark mx-2">Items Mágicos</button>
        </Link>
        <Link to="/category/curativos">
          <button className="btn btn-outline-dark mx-2">Curativos</button>
        </Link>
      </div>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
