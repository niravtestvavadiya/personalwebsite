import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
// Style
import "../asstes/styles/footer.scss";
// Import icon
import twitter from "../asstes/images/icons/twitter.svg";
import instagram from "../asstes/images/icons/instagram.svg";
import linkedin from "../asstes/images/icons/linkedin.svg";
import youtoube from "../asstes/images/icons/youtube.svg";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to show/hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };
  return (
    <footer className="footer">
       {/* <div className="text-rail-wrapper">
              <div className="text-rail-track" id="animate" >
                <div id={"first-MetaAwaking"} className="rail-track" >
                  <h2 className="font-180">{"Bhupendra Chaudhary"}-{"Bhupendra Chaudhary"}-{"Bhupendra Chaudhary"}-</h2>
                  <h2 className="font-180">{"Bhupendra Chaudhary"}-{"Bhupendra Chaudhary"}-{"Bhupendra Chaudhary"}-</h2>
                </div>
              </div>
            </div> */}
      <Container>
        <div className="footer-top">
          <div className="footer-logo">
            <Link to={"/"} className="footer-brand">
              Bhupendra <span className="d-block">Chaudhary</span>
            </Link>
            <div className="footer-social">
              <p>Follow</p>
              <ul className="social-media-list">
                <li>
                  <Link target='_blank' to="https://x.com/drbhupendraz?s=11&t=V1wt9EUR7K8EepruFzWmAg">
                    <img src={twitter} alt="Twitter" />
                  </Link>
                </li>
                <li>
                  <Link target='_blank' to="https://www.instagram.com/bhupendraz?igsh=NTc4MTIwNjQ2YQ==">
                    <img src={instagram} alt="Instagram" />
                  </Link>
                </li>
                <li>
                  <Link target='_blank' to="https://www.linkedin.com/in/bhupendra-c-7bba24128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={linkedin} alt="Linkedin" />
                  </Link>
                </li>
                <li>
                  <Link target='_blank' to="https://youtube.com/@philosopherscientist?si=Vw6a1Tr-2jIQAOuJ">
                    <img src={youtoube} alt="Youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-wrapper-link">
            <div className="footer-menu-list">
              <h5 className="menu-title">Quick links</h5>
              <ul className="footer-links">
                <li> <Link to={"/about"}>About</Link> </li>
                <li> <Link to={"/in-the-news"}>In the News</Link> </li>
                <li> <Link to={"/all-events"}>Events</Link> </li>
                <li> <Link to="">Policies</Link> </li>
              </ul>
            </div>
            {/* ./footer widget */}
            <div className="footer-menu-list">
              <h5 className="menu-title">Trainings</h5>
              <ul className="footer-links">
                <li> <Link to={"/meta-awakening"}>The Meta Awakening</Link> </li>
                <li> <Link to={"/chaitanya-yog-kriya"}>Chaitanya Yog Kriya</Link> </li>
                <li> <Link to={"/corporate"}>Corporate Training</Link> </li>
                <li> <Link to={"/institutions"}>Institutions Training</Link> </li>
              </ul>
            </div>
            {/* ./footer widget */}
            <div className="footer-menu-list">
              <h5 className="menu-title">Initiatives</h5>
              <ul className="footer-links">
                <li> <Link to="">Soul Foundation Trust</Link> </li>
                <li> <Link to={"https://induskargha.com/"} target='_blank'>Induskargha Project</Link> </li>
                <li> <Link to={"http://circleofconsciousness.org/"} target='_blank'>Circle of Consciousness & Happiness</Link> </li>
              </ul>
            </div>
            {/* ./footer widget */}
            {/* <div className="footer-menu-list">
              <h5 className="menu-title">Information Centre</h5>
              <ul className="footer-links">
                <li> <Link to={"/blogs"}>Blogs</Link> </li>
                <li> <Link to={"/podcasts"}>Podcast</Link> </li>
                <li> <Link to="">Newsletter</Link> </li>
                <li> <Link to={"/books"}>Books</Link> </li>
              </ul>
            </div> */}
            {/* ./footer widget */}
            <div className="footer-menu-list">
              <h5 className="menu-title">Contact Us</h5>
              <ul className="footer-links">
                <li> <Link to="tel:+1 (408) 368-4822">+1 (408) 368-4822</Link> </li>
                <li> <Link to="mailto:rep.coch@gmail.com">rep.coch@gmail.com</Link> </li>
              </ul>
            </div>
            {/* ./footer widget */}
          </div>
        </div>
        <div className="bottom-footer">
          <p className="copyright-text"> Copyright &copy; {new Date().getFullYear()} Bhupendra Chaudhary</p>
          <p className="copyright-text brand-design"> Design And Dev by <Link className="text-white">The Meta Awakening</Link></p>
        </div>
      </Container>
      {showButton && (
        <button onClick={scrollToTop} className='go-to-top' > <i className="bi bi-arrow-up"></i> Top </button>
      )}
    </footer>
  );
}

export default Footer;
