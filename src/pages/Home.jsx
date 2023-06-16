import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import slide from "../assets/media/images/slide-img.jpg";
import Swiper from "swiper";
import cloud from "../assets/media/images/cloud-payroll.png";
import "swiper/swiper-bundle.min.css";
import hrms from "../assets/media/images/hrms-sq.jpg";
import payroll from "../assets/media/images/payroll-mgmt.jpg";

const Home = () => {
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    // Clean up the swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div>
      <main id="home-page">
        <section id="hero">
          <div className="container">
            <div className="row m-0 align-items-center">
              <div className="col-xxl-7 col-xl-6 col-md-6 col-12">
                <div className="swiper" ref={swiperRef}>
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide">
                      <h5>#HRTech 4.0</h5>
                      <h2 data-aos="fade-left">
                        We power your momentum in today's <b>Talent Economy</b>
                      </h2>
                      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rem itaque maxime, nulla ut nostrum odio. Labore quia alias officia cumque adipisci ad tenetur voluptate laudantium non? Ab, labore accusantium.</p> */}
                      <a href="#" className="btn btn-theme-brand">
                        Learn More
                        <i className="fa-solid fa-arrow-right link-icon-right"></i>
                      </a>
                      {/* <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores. Beatae enim porro perspiciatis obcaecati ex neque nostrum debitis eius.</p> */}
                    </div>
                    <div className="swiper-slide">
                      <h5>#WeArePeopleStrong</h5>
                      <h2 data-aos="fade-left">
                        <b>Customers' Choice</b> for Talent-Focused enterprises
                        across APAC
                      </h2>
                      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rem itaque maxime, nulla ut nostrum odio. Labore quia alias officia cumque adipisci ad tenetur voluptate laudantium non? Ab, labore accusantium.</p> */}
                      <a href="#" className="btn btn-theme-brand">
                        Learn More
                        <i className="fa-solid fa-arrow-right link-icon-right"></i>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <h5>#NewHires2023</h5>
                      <h2 data-aos="fade-left">
                        Prepare your <b>new hires</b> to hit the ground running
                        before the <b>first day</b>.
                      </h2>
                      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rem itaque maxime, nulla ut nostrum odio. Labore quia alias officia cumque adipisci ad tenetur voluptate laudantium non? Ab, labore accusantium.</p> */}
                      <a href="#" className="btn btn-theme-brand">
                        Learn More
                        <i className="fa-solid fa-arrow-right link-icon-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                <img src={slide} className="w-100" alt="" />
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
                  <a href="#" disabled className="btn btn-theme-brand">
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
                  <a href="#" disabled className="btn btn-theme-brand">
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
                  <a href="#" disabled className="btn btn-theme-brand">
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
                  <a href="#" disabled className="btn btn-theme-brand">
                    View Details
                    <i className="fa-solid fa-arrow-right link-icon-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row m-0 justify-content-center">
              <div className="col-xl-6 col-md-5 col-12">
                <div className="section-title">
                  <h2>
                    <b>Remove the Pain</b> using Our Features
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur dolores deserunt perferendis eos, ut itaque.
                    Cumque nisi nobis ducimus dolorum!
                  </p>
                </div>
                <img src={slide} className="w-100" alt="" />
              </div>
              <div className="col-xl-6 col-md-7 col-12">
                <div className="feature mb-3">
                  <h3>Easy to Use</h3>
                  <p>
                    A rather simple, user-friendly interface, with rapid access
                    to common actions.
                  </p>
                </div>
                <div className="feature mb-3">
                  <h3>Unique Design</h3>
                  <p>
                    State-of-the-art design makes applications unique from other
                    products.
                  </p>
                </div>
                <div className="feature mb-3">
                  <h3>Easy to Integrate</h3>
                  <p>
                    Easy to integrate with third-party applications using API’S.
                  </p>
                </div>
                <div className="feature mb-3">
                  <h3>Easy To Access</h3>
                  <p>
                    Accessibility, communication, working, storing data in the
                    application is easy.
                  </p>
                </div>
                <div className="feature mb-3">
                  <h3>Easy to Configure</h3>
                  <p>
                    Applications are easy to configure on local and
                    server/client environments.
                  </p>
                </div>
                <div className="feature mb-3">
                  <h3>Single Source of Truth</h3>
                  <p>
                    SSOT ensures everyone uses the same data when making
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    </div>
  );
};

export default Home;
