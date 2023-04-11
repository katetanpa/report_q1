import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import OsShare from "@/src/components/charts/OsShare"
const Index = () => {
  return (
    <Layout noHeaderBg pageName={"Home"}>
      <section
        className="hero-section-one"
        style={{ backgroundImage: "url(assets/img/hero-img.jpg)" }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              <span>Q1 2023 Report</span>
              Mobile Game Ad Monetisation{" "}
            </h2>
            <p>Insights from Premium Ads</p>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="small-services-color">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 32 32"
                    height={512}
                    viewBox="0 0 32 32"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m30.197 28.331-7.843-7.555c1.802-2.057 2.789-4.634 2.789-7.361 0-3.058-1.234-5.931-3.475-8.089-4.603-4.435-12.092-4.434-16.693 0-2.241 2.158-3.475 5.031-3.475 8.089s1.234 5.931 3.475 8.09c2.301 2.218 5.324 3.326 8.347 3.325 2.725 0 5.445-.91 7.642-2.712l7.892 7.602c.888.883 2.257-.532 1.341-1.389zm-23.88-8.216c-1.86-1.792-2.884-4.171-2.884-6.7 0-2.528 1.024-4.908 2.884-6.699 1.931-1.861 4.468-2.791 7.005-2.791s5.074.93 7.005 2.791c1.86 1.792 2.884 4.171 2.884 6.699 0 2.529-1.024 4.908-2.884 6.7-3.863 3.721-10.148 3.721-14.01 0z" />
                      <path d="m18.154 12.449h-3.866v-3.862c0-.533-.433-.965-.966-.965-.534 0-.966.432-.966.965v3.862h-3.866c-.534 0-.966.432-.966.965s.432.966.966.966h3.866v3.862c0 .533.433.965.966.965.534 0 .966-.432.966-.965v-3.862h3.866c.534 0 .966-.432.966-.965s-.433-.966-.966-.966z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services.html">In-Game Ad Revenue Report</a>
                    <span>Insights of Revenue Share Between OS & Ad Formats </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services">
                  <svg
                    enableBackground="new 0 0 418.945 418.945"
                    height={512}
                    viewBox="0 0 418.945 418.945"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m9.213 397.61h401.004c4.849 0 8.728-3.879 8.728-8.728s-3.879-8.728-8.728-8.728h-25.214v-233.232c0-4.849-3.879-8.243-8.728-8.728h-55.762c-4.849 0-8.728 3.879-8.728 8.728v233.717h-16.486v-188.623c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v188.622h-16.486v-141.102c0-4.849-3.879-8.728-8.728-8.728h-56.247c-4.849 0-8.728 3.879-8.728 8.728v141.103h-16.486v-90.19c0-4.849-3.879-8.728-8.728-8.728h-56.249c-4.849 0-8.728 3.879-8.728 8.728v90.19h-23.76v-350.576c0-4.849-3.879-8.728-8.728-8.728s-8.728 3.879-8.728 8.728v358.819c.97 4.849 4.849 8.728 9.213 8.728zm319.542-241.96h39.761v224.989h-39.761zm-90.189 44.61h39.761v180.379h-39.761zm-90.19 48.004h39.761v132.375h-39.761zm-89.704 50.913h39.761v81.462h-39.761z" />
                      <path d="m136.739 172.136 110.555-68.369-3.879 16.486c-.97 4.364 1.455 9.213 6.304 10.183 4.364.97 9.213-1.455 10.183-6.304l9.213-36.367c.97-4.849-.485-8.243-6.304-10.183l-36.367-9.213c-4.364-.97-9.213 1.455-10.183 6.304-.97 4.364 1.455 9.213 6.304 10.183l16.971 4.364-111.525 68.369c-3.879 2.424-5.334 7.758-2.909 11.637 3.394 4.85 8.728 4.85 11.637 2.91z" />
                    </g>
                  </svg>
                  <div>
                    <a href="services.html">eCPM Revolution</a>
                    <span>In-dept Report About eCPM Revolution by Ad Formats & Countries</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="small-services lest mb-0">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <path
                      d="M444.709,239.616v227.621H67.877V239.616H32.768v245.175c0,9.696,7.858,17.554,17.554,17.554h411.941
            c9.696,0,17.554-7.858,17.554-17.554V239.616H444.709z"
                    />
                    <path
                      d="M494.446,107.953H17.554C7.858,107.953,0,115.811,0,125.507v114.688c0,9.696,7.858,17.554,17.554,17.554h476.891
            c9.696,0,17.554-7.853,17.554-17.554V125.507C512,115.811,504.142,107.953,494.446,107.953z M476.891,222.647H35.109v-79.579
            h441.783V222.647z"
                    />
                    <path
                      d="M273.273,121.066c-1.194-4.552-30.152-111.411-114.7-111.411c-36.782,0-66.706,29.924-66.706,66.706
            c0,36.782,29.661,66.706,66.121,66.706h98.304c5.436,0,10.574-2.522,13.897-6.829S274.648,126.326,273.273,121.066z
             M157.989,107.959c-17.39,0-31.013-13.88-31.013-31.598c0-17.127,14.471-31.598,31.598-31.598
            c38.52,0,61.586,37.947,72.675,63.195H157.989z"
                    />
                    <path
                      d="M354.011,9.655c-84.547,0-113.506,106.859-114.7,111.411c-1.381,5.26-0.24,10.866,3.084,15.173
            c3.324,4.307,8.455,6.829,13.897,6.829h98.304c36.46,0,66.121-29.924,66.121-66.706C420.718,39.579,390.794,9.655,354.011,9.655z
             M354.597,107.959h-73.33c11.007-25.249,34.003-63.195,72.751-63.195c17.127,0,31.598,14.471,31.598,31.598
            C385.615,94.079,371.993,107.959,354.597,107.959z"
                    />
                    <rect
                      x="238.738"
                      y="125.513"
                      width="35.109"
                      height="359.278"
                    />
                  </svg>
                  <div>
                    <a href="services.html">Fill-rate & Performance</a>
                    <span>In-dept Report about Monetisation Performance on different dimensions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands-we-work one gap">
        <div className="container">
          <BrandSlider />
        </div>
      </div>
      <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img alt="img" src="assets/img/welcome-1.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/welcome-2.jpg"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
              <div className="heading design-enjoy">
                <h6>Excutive Summary</h6>
                <h2> First quarter of the year with a lot of big global changes</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="welcome-text">
                <h6 className="pt-4 pb-5">
                Here are the results from the analysis of 130+ billion ad impressions in the first quarter of 2023. Find the latest insights on eCPM trends, for each ad format, in top global markets. <br/>
                </h6>
                <h5>How To Use This Report</h5>
                <p>
                  <ul>
                    <li>This valuable report will help you make smarter & data-driven decisions while allowing you to keep a steady growth for all your mobile apps & games.</li>
                    <li>The eCPM benchmark of each ad format & ad demand source can serve as a revenue planning tool</li>
                    <li>Knowing which direction the fill-rate of an ad format & platforms are trending will help you decide which ad units implement to maximize your revenue.</li>
                  </ul>
                </p>
                <p>Special thanks to all top Brands, Advertisers, Demand Partners and Publishers that trust PremiumAds in the common goal of making each of them the next successful business story</p>
                <a href="http://premiumads.net/" className="themebtu">
                  More Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" alt="line" src="assets/img/line.jpg" />
      </section>
      <section className="how-it-works gap no-top">
        <div className="container">
          <div className="heading">
            <h6>What Are The Keyfindings?</h6>
            <h2> From 1,000+ Apps, <br/> 100+ regions & <br/> 70+ Ad Demand Sources</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row pt-4">
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O1/</h2>
                <div className="pl-80">
                  <h4>Let's Be Realistic</h4>
                  <p>
                  The ad revenue & performance of whole  in-app advertising market are still very far from being as glory as the good old 2021. However, from January of 2023, we have seen positive percentage of revenue growth, compared to January of 2022
                  </p>
                  <p className="pt-4 pb-5">This can be a good sign of slowly recovery in terms of ARPU & LTV. After all, it's safe to say in-app advertising is remaining in a good position & having rooms for better boost. Compared to Q1 2020, Q1 2023 is having 25% more of Ad Revenue in gaming apps & out-standing 220% more in non-gaming apps</p>
                  <p><b>So if you are a new player in publishing or developing, the market is still very welcoming you on board!</b></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O2/</h2>
                <div className="pl-80">
                  <h4>Meet The Ad Formats</h4>
                  <p>
                  Interstitial ad format is gaining bigger share over total revenue when in previous years, it was almost the same to its competitor - Rewarded Ads. 
                  </p>
                  <p className="pt-4 pb-5">Also in Q1 2023, we have tested & seen the thrivingness of 2 unpopular ad formats: App Open & Native Rendering <br/> Just within United States & Tier 1 country, App Open average eCPM is 2 times higher than Rewarded Ads when remains 9.8% of total fill-rate. Native Ads average eCPM is even 7 times higher than Banner Ads when remains almost the same fill-rate </p>
                  <p><b>So maybe you will really need to consider trying out these new exponent for your ad monetisation strategy</b></p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O3/</h2>
                <div className="pl-80">
                  <h4>About The Top Tiers </h4>
                  <p>In 2023 Q1, the USA has kept steady fill rates & increased their ARPU. However there are new sky-rocketing players in the global market such as Saudi Arabia, Australia & South Korea. <br/>These strongly emerging market is very promising in standing next to the US in terms of next quarter both eCPM & fill-rate.  </p>
                  <p className="pt-4 pb-5">When it comes to PremiumAds exclusively, we are glad to remain our supreme position over our hometown - Brazil & LATAM country. <br/> From our partners' feedbacks, we are bringing 3 times higher eCPM & almost 50% increase of fill-rate for their traffic in this area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-studies gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading-boder">
                <h2>
                  <span>Revenue Share</span>
                </h2>
              </div>
              <div className="heading">
                <h6>Over Operating System & Ad Formats</h6>
              </div>
            </div>
            <div className="col-xl-4">
              <OsShare />
            </div>
            <div className="col-xl-4 ml-5">
              <OsShare />
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-1"></div>
          <div className="style-shapes-2">
            <img alt="shap-4" src="assets/img/shap-b-2.png" />
          </div>
          <div className="style-shapes-3"></div>
        </div>
      </section>
      <section
        className="gap no-bottom video-section"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Become Our Next <span>Successful Story</span>
            </h2>
            <p>Monetise your games with world-leading brands & media buying - Work with a Google vetted partner</p>
          </div>
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="video-img">
                <img className="w-100" alt="img" src="assets/img/video.jpg" />
                <a
                  data-fancybox
                  href="https://www.youtube.com/watch?v=6XXExJ5PHkk"
                >
                  <i className="fa-solid fa-play" />
                </a>
              </div>
            </div>
            <div className="tp-hero__shapes">
              <div className="style-shapes-2">
                <img alt="shap-4" src="assets/img/shap-1.png" />
              </div>
              <div className="style-shapes-4">
                <img alt="dots1" src="assets/img/shap-2.png" />
              </div>
              <div className="style-shapes-5">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-6">
                <img alt="dots1" src="assets/img/shap-3.png" />
              </div>
              <div className="style-shapes-7">
                <img alt="dots1" src="assets/img/shap-5.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="gap">
        </div>
      </section>
    </Layout>
  );
};
export default Index;
