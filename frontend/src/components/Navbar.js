import { ReactComponent as Payment } from "../assets/payment-en.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Payment />
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-dark navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end navbar-gradient-bg"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Hi User!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <div
                  role="button"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Login
                </div>
              </li>
              <li className="nav-item">
                <form>
                  <div className="form-group d-flex justify-content-center">
                    <label className="control-label nav-link">
                      Language
                      <select className="form-select ms-3 w-50">
                        <option value="en" selected>
                          English
                        </option>
                        <option value="ma">Marathi</option>
                      </select>
                    </label>
                  </div>
                </form>
              </li>
            </ul>
            <form className="d-flex search-margin" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter search term"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
