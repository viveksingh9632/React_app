import React from "react";
import vivek from "../image/hero-img.png"
const Home = () => {
  return (
    <>

<section id="header" className="d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" >
      <h1>Welcome to viveksingh page </h1>
      <strong className="brand-name">VivekTechnical</strong>
      <h2>We are team of talented designers making websites </h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <a href="#" className="btn-get-started">Get Started</a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
      <img src={vivek} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
</>


  );
};

export default Home;
