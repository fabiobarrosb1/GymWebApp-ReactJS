import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import Close from "../../assets/fechar.png";

const Header = () => {
  // const mobile = window.innerWidth <= 870 ? true : false;
  const [mobile, setMobile] = useState(window.innerWidth <= 870);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 870);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef();

  const closeMenu = () => {
    setMenuOpened(false);
  };

  // Event listener for clicks on the document
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          ref={menuRef}
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {mobile && (
            <li
              onClick={() => setMenuOpened(false)}
              style={{
                position: "absolute",
                right: "2rem",
                alignItems: "center",
              }}
            >
              <img
                className="image-close"
                src={Close}
                alt=""
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                  zIndex: "999",
                }}
              />
            </li>
          )}
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
