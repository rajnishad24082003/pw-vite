import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import EnquiryForm from "../components/EnquiryForm/EnquiryFrom";

const Contact = () => {
  return (
    <>
      <main className="contact-page">
        <section id="enquiry">
          <div className="container">
            <div className="section-title mb-4">
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                aspernatur ducimus suscipit labore consectetur sed fugit neque
                aliquid voluptatibus obcaecati?
              </p>
            </div>
            <div className="row m-0">
              <div className="col-md-6 col-12">
                <EnquiryForm />
              </div>
              <div className="col-md-6 col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.62256422336714!2d72.88133817624403!3d19.109365568574013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93f06462cb7%3A0xd418cbb1b36ea868!2sIrique%20Hi%20Tech%20Software!5e0!3m2!1sen!2sin!4v1685783887662!5m2!1sen!2sin"
                  className="map"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="map"></section>
        <section id="contact">
          <div className="container">
            Office No. 107, 1st Floor,"TIMMY ARCADE", Makvana Road,Marol,
            Andheri(E), Mumbai-400059
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
