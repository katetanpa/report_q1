import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo-black.png" />
                  ) : (
                    <img alt="logo" src="assets/img/logo.png" />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li>
                <a href="http://premiumads.net/" target="_blank">
                  About PremiumAds
                </a>
              </li>
              <li>
                <Link legacyBehavior href="https://premiumads.net/blog/">
                  Tips & Highlights
                </Link>
              </li>
              <li>
                <a href="https://premiumads.net/contact/" target="_blank">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form id="content">
              <input
                type="text"
                name="input"
                className={`input ${searchToggle ? "square" : ""}`}
                id="search-input"
              />
              <button
                type="reset"
                className={`search ${searchToggle ? "close" : ""}`}
                id="search-btn"
                onClick={() => setSearchToggle(!searchToggle)}
              />
            </form>
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Work With Us</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
