import { useTranslation } from "react-i18next";
import Payment from "./Payment";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
              {t("greeting")}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item">
                <div
                  role="button"
                  className="nav-link active"
                  aria-current="page"
                >
                  {t("home")}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  {t("login")}
                </div>
              </li>
              <li className="nav-item">
                <form className="nav-link ms-2 p-0">
                  <div className="input-group">
                    <span className="input-group-text">{t("language")}</span>
                    <select
                      value={i18n.language}
                      onChange={handleChangeLanguage}
                      className="form-select"
                    >
                      <option value="en">{t("english")}</option>
                      <option value="ma">{t("marathi")}</option>
                    </select>
                  </div>
                </form>
              </li>
            </ul>
            <form className="d-flex search-margin" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder={t("enter-search-term")}
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                {t("search")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
