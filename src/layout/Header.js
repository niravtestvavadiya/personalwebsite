import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CryptoJS from "crypto-js";
// Style
import "../asstes/styles/header.scss";

// -----------------------------------

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();
  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true); // Add class when scrolled more than 50px
      } else {
        setScrolled(false); // Remove class when back to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const SECRET_KEY = process.env.REACT_APP_SECRET_ENCR_KEY;
    const encryptedUser = localStorage.getItem("auth_user");

    if (!encryptedUser) {
      setLoggedIn(false);
      return;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(encryptedUser, SECRET_KEY);
      const decryptedUser = bytes.toString(CryptoJS.enc.Utf8);

      setLoggedIn(!!decryptedUser);
    } catch (error) {
      console.error("Decryption failed:", error);
      setLoggedIn(false);
    }
  }, []);

  const handleNavLinkClick = () => {
    setExpanded(false);
    setHoveredDropdown(null);
  };

  return (
    <header className="bh-header-sec sticky-top ">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className={`bh-header ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-title" onClick={handleNavLinkClick}>
            Bhupendra <span>Chaudhary</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-navbar-menu-btn" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mx-auto bh-navbar">

              {/* About  */}
              <NavDropdown
                title="About"
                show={hoveredDropdown === "about"}
                onMouseEnter={() => setHoveredDropdown("about")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/about" onClick={handleNavLinkClick}>
                  About Us
                </NavDropdown.Item>
              </NavDropdown>

              {/* Initiatives */}
              <NavDropdown
                title="Initiatives"
                show={hoveredDropdown === "initiatives"}
                onMouseEnter={() => setHoveredDropdown("initiatives")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/soul-foundation" onClick={handleNavLinkClick}>
                  Soul Foundation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} target="_blank" to={"http://circleofconsciousness.org/"} onClick={handleNavLinkClick}>
                  Circle of Consciousness & Happiness
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} target="_blank" to={"https://induskargha.com/"} onClick={handleNavLinkClick}>
                  Induskargha
                </NavDropdown.Item>
              </NavDropdown>

              {/* Events */}
              <NavDropdown
                title="Events"
                show={hoveredDropdown === "events"}
                onMouseEnter={() => setHoveredDropdown("events")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/all-events" onClick={handleNavLinkClick}>
                  All Events
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/meta-awakening" onClick={handleNavLinkClick}>
                  Meta Awakening
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chaitanya-yog-kriya" onClick={handleNavLinkClick}>
                  Chaitanya Yog Kriya
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quantumforce" onClick={handleNavLinkClick}>
                  Bhupendraz QuantumForce
                </NavDropdown.Item>
              </NavDropdown>

              {/* Information Center */}
              {/* <NavDropdown
                title="Information Center"
                show={hoveredDropdown === "information center"}
                onMouseEnter={() => setHoveredDropdown("information center")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/blogs" onClick={handleNavLinkClick}>
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/podcasts" onClick={handleNavLinkClick}>
                  Podcasts
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/books" onClick={handleNavLinkClick}>
                  Books
                </NavDropdown.Item>
              </NavDropdown> */}

              {/* Training */}
              <NavDropdown
                title="Training"
                show={hoveredDropdown === "training"}
                onMouseEnter={() => setHoveredDropdown("training")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/corporate" onClick={handleNavLinkClick}>
                  Corporate
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/institutions" onClick={handleNavLinkClick}>
                  Institutions
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/another-training" onClick={handleNavLinkClick}>
                  Another Training
                </NavDropdown.Item> */}
              </NavDropdown>

              {/* Research  */}
              {/* <Nav.Link as={Link} to=" ">
                Research
              </Nav.Link> */}

              <Nav.Link as={Link} to="/in-the-news" onClick={handleNavLinkClick}>
                In the news
              </Nav.Link>

              {/* In the news */}
              <Nav.Link as={Link} to="/private-council" onClick={handleNavLinkClick}>
                Private Council
              </Nav.Link>

              {/* Contact Us  */}
              <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>
                Contact us
              </Nav.Link>

            </Nav>

            <div className="navbar-bt">
              <button
                type="button"
                className="btn btn-secondary bh-btn-dark"
                onClick={() => {
                  if (loggedIn) {
                    localStorage.removeItem("auth_user");
                    localStorage.removeItem("auth_token");
                    setLoggedIn(false);
                  } else {
                    navigate("/sign-in");
                  }
                }}
              >
                {loggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
