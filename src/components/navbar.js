import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <button class="btn btn-primary" type="submit">
              <Link to="/cart" className="btnnew">
                  Cart(0)
              </Link>
          </button>
        </div>
      </nav>
        </>
    )
}
export default Navbar;