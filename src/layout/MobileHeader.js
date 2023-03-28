import Link from "next/link";
import { useState } from "react";
const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <a href="index.html">
          <img src="assets/img/logo.png" alt="Responsive Logo" />
        </a>
      </div>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li>
          <a legacyBehavior href="http://premiumads.net/" target="_blank">
            About PremiumAds
          </a>
        </li>
        <li>
          <Link legacyBehavior href="portfolio-grid">
            Data Source
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="blog-grid">
            Tips & Highlights
          </Link>
        </li>
        <li>
          <a href="https://premiumads.net/contact/" target="_blank">
            Contacts
          </a>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
