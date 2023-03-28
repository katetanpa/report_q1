import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("body").classList.add("page-loaded");
    }, 1500);
  }, []);

  return (
    <div className="preloader">
      <div>
        <div className="container">
          <object className="squarebox two" data="assets\img\PREMIUMADS_SVG-01.svg" width="300" height="300"> </object>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
