import React, { useEffect } from "react";
import "../header/header_style.css";
import "../common_css/common.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import './header_style.css';
import { useTokenStore } from "../../store/authStore";
function Header() {
  const toggle = localStorage.getItem("token");
  const token2 = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  useEffect(() => {
    setToken();
  }, []);
  const logOut = () => {
    if (token2) {
      localStorage.removeItem("token");
      setToken();
      navigate("/"); // Use useNavigate to redirect
      toast.success("Logout Successfully");
    }
  };

  return (
    <>
      <header className="head">
        <div className="head-wrap-bg">
          <div className="container">
            <div className="head-wrap">
              <div className="head-text">
                <p>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </p>
                <p>
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  +1 5589 55488 55
                </p>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="top-banner">
            <div className="icon">
              <a href="index.html">
                DUMMY<span>.</span>
              </a>
            </div>
            <nav className="biz-nav">
              <ul className="biz-nav-list">
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  
                </li>
                <li>
                    {toggle ? (
                  <Link to="/" onClick={logOut} style={{textDecoration:'none'}} className="log">
                    Logout
                  </Link>
                ) : (
                  <Link to="/auth/login" style={{textDecoration:'none'}} className="log">
                    Login
                  </Link>
                )}
                </li>

                <li>

                </li>
              
              </ul>
            </nav>
            <button className="ham-btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
