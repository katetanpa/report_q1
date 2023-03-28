const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index.html">
                <img alt="img" src="assets/img/logo-black.png" />
              </a>
              <p>
                The first LATAM Google Certified Publishing Partner & a National Awarded Advertising Network with a decade of successful monetisation stories
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="https://premiumads.net/about-us/" target={"_blank"}>About us</a>
                </li>
                <li>
                  <a href="https://premiumads.net/publishers/" target={"_blank"}>Services</a>
                </li>
                <li>
                  <a href="https://premiumads.net/blog/" target={"_blank"}>More Resources</a>
                </li>
                <li className="pb-0">
                  <a href="https://premiumads.net/contact/" target={"_blank"}>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 PremiumAds - All Rights Reserved</p>
          <ul>
            <li>
              <a href="https://premiumads.net/contact/" target={"_blank"}>
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/premiumprogrammatic" target={"_blank"}>
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
