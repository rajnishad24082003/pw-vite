import React from "react";
import cloud from "../../assets/media/images/cloud-payroll.png";
import Swiper from "swiper";
import slide from "../../assets/media/images/slide-img.jpg";
import payroll from "../../assets/media/images/payroll-mgmt.jpg";
import hrms from "../../assets/media/images/hrms-sq.jpg";
function All() {
  return (
    <div>
      <main id="products-page">
        <section id="hero">
          <div className="container">
            <div className="row m-0">
              <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                <img src={slide} className="w-100" alt="" />
              </div>
              <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                <h5>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Odio, ratione.
                </h5>
                <h2 data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, dolor? Consequuntur libero et vero neque?
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere rem itaque maxime, nulla ut nostrum odio. Labore quia
                  alias officia cumque adipisci ad tenetur voluptate laudantium
                  non? Ab, labore accusantium.
                </p>
                <a href="" className="btn btn-theme-brand">
                  Learn More
                  <i className="fa-solid fa-arrow-right link-icon-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="products">
          <div className="container">
            <div className="section-title">
              <h2>Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur dolores deserunt perferendis eos, ut itaque. Cumque
                nisi nobis ducimus dolorum!
              </p>
            </div>
            <div className="product">
              <div className="row m-0 align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={cloud} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#CloudPayrollWithUs</h5>
                  <h2 data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, dolor? Consequuntur libero et vero neque?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere rem itaque maxime, nulla ut nostrum odio. Labore quia
                    alias officia cumque adipisci ad tenetur voluptate
                    laudantium non? Ab, labore accusantium.
                  </p>
                  <a href="" disabled className="btn btn-theme-brand">
                    View Details
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="row m-0 flex-row-reverse align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={hrms} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#BringHRMSonCloud</h5>
                  <h2 data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, dolor? Consequuntur libero et vero neque?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere rem itaque maxime, nulla ut nostrum odio. Labore quia
                    alias officia cumque adipisci ad tenetur voluptate
                    laudantium non? Ab, labore accusantium.
                  </p>
                  <a href="" disabled className="btn btn-theme-brand">
                    View Details
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="row m-0 align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={slide} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#EasyOutsourcing</h5>
                  <h2 data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, dolor? Consequuntur libero et vero neque?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere rem itaque maxime, nulla ut nostrum odio. Labore quia
                    alias officia cumque adipisci ad tenetur voluptate
                    laudantium non? Ab, labore accusantium.
                  </p>
                  <a href="" disabled className="btn btn-theme-brand">
                    View Details
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="row m-0 flex-row-reverse align-items-center">
                <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                  <img src={payroll} className="w-100" alt="" />
                </div>
                <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                  <h5>#ManageYourPayrolls</h5>
                  <h2 data-aos="fade-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, dolor? Consequuntur libero et vero neque?
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere rem itaque maxime, nulla ut nostrum odio. Labore quia
                    alias officia cumque adipisci ad tenetur voluptate
                    laudantium non? Ab, labore accusantium.
                  </p>
                  <a href="" disabled className="btn btn-theme-brand">
                    View Details
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews">Reviews</section>
        <section id="talk">Talk to us</section>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
      <script>const swiper = new Swiper('.swiper');</script>
    </div>
  );
}

export default All;
