import Navbar from "../components/Navbar/Navbar";
import slide from "../assets/media/images/slide-img.jpg";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <main>
        <section id="hero">
          <div className="container">
            <div className="row m-0">
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
                <a href="#" className="btn btn-theme-brand">
                  Learn More
                  <i className="fa-solid fa-arrow-right link-icon-right"></i>
                </a>
                <p className="text-muted mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, dolores. Beatae enim porro perspiciatis obcaecati ex
                  neque nostrum debitis eius.
                </p>
              </div>
              <div className="col-xxl-5 col-xl-6 col-md-6 col-12">
                <img src={slide} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="why">Why Choose Us?</section>
        <section id="what">What We do?</section>
        <section id="techonologeis">Technologies</section>
      </main>
    </div>
  );
};

export default About;
