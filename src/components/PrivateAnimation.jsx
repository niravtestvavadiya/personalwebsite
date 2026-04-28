"use client";

import { useEffect, useRef } from "react";
import "../asstes/styles/PrivateAnimation.scss";
import animationImage1 from "../asstes/images/private-council/animationImage1.jpg";
import animationImage2 from "../asstes/images/private-council/animationImage2.jpg";
import animationImage3 from "../asstes/images/private-council/animationImage3.jpg";
import animationImage4 from "../asstes/images/private-council/animationImage4.jpg";
import { Card, Col, Row } from "react-bootstrap";
import MagneticText from "./MagneticText";
export default function PrivateAnimation() {
  const refs = useRef([]);
  const containerRef = useRef(null);
const IMAGE_LAYOUT = [
  {
    src: animationImage1,
    // left: 160,
    // top: 180,
    width:300,
    height:300,
    // scale: 1,
    // zIndex: 2, 
  },
  {
    src: animationImage2,
    left: 160,
    top: 10,
    width: 500,
    height: 160,
  },
  {
    src: animationImage4,
    left: 480,
    top: 180,
    width: 170,
    height: 450,
  },
  {
    src: animationImage3,
    left: 160,
    top: 500,
    width: 300,
    height: 170,
  },
  // {
  //   src: animationImage1,
  //   left: 380,
  //   top: 10,
  //   width: 130,
  //   height: 130,
  // },
  // {
  //   src: animationImage2,
  //   left: 380,
  //   top: 390,
  //   width: 160,
  //   height: 120,
  // },
];
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      refs.current.forEach((el, i) => {
        if (!el) return;

        const cfg = IMAGE_LAYOUT[i];
        const delay = i * 120;

        // Initial collapsed state
        el.style.transition = "none";
        el.style.left = "160px";
        el.style.top = "180px";
        el.style.width = cfg.width + "px";
        el.style.height = cfg.height + "px";
        el.style.opacity = i === 0 ? "1" : "0";
        el.style.transform = "scale(0.6)";

        setTimeout(() => {
          el.style.transition = `all 0.8s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`;
          el.style.left = cfg.left + "px";
          el.style.top = cfg.top + "px";
          el.style.opacity = "1";
          el.style.transform = `scale(${cfg.scale || 1})`;
          if (cfg.zIndex) el.style.zIndex = cfg.zIndex;
        }, 100);
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(containerRef.current);
  return () => observer.disconnect();
}, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        refs.current.forEach((el, i) => {
          if (!el || i === 0) return;

          const delay = i * 120;
          const positions = [
            null,
            { x: 160, y: 10 },
            { x: 380, y: 180 },
            { x: 160, y: 400 },
            { x: 380, y: 10 },
            { x: 380, y: 390 },
          ];

          el.style.transition = "none";
          el.style.left = "160px";
          el.style.top = "180px";
          el.style.opacity = "0";
          el.style.transform = "scale(0.6)";

          setTimeout(() => {
            el.style.transition = `
              all 0.8s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms
            `;
            el.style.left = positions[i].x + "px";
            el.style.top = positions[i].y + "px";
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
          }, 100);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrap" ref={containerRef}>
      <div className="layout">
        
    <Row className="justify-content-start mt-4">
  {/* <MagneticText
  as="h5"
  className="animated-title text-uppercase mb-3"
>
  When the Moment Arrives
</MagneticText> */}
      <h5 className="animated-title text-uppercase mb-3">
  When the Moment Arrives
</h5>
  <Col md={8} style={{width:"92%"}}>
    <div
      className="border-0"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,168,76,0.18)",
        borderRadius: "4px",
      }}
    >
      <div className="">
        <ul className="list-unstyled mb-0" style={{width:"100%"}}>

          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#C9A84C",
                borderRadius: "50%",
                marginTop: "8px",
                flexShrink: 0,
              }}
            />
         <p className="mb-0 text-light fs-6">
  <MagneticText>
    This is the moment where hesitation ends and consequence begins.
  </MagneticText>
</p>
            {/* <p className="mb-0 text-light fs-6">
              <strong>This is the moment</strong> where hesitation ends and consequence begins.
            </p> */}
          </li>

          <li className="d-flex align-items-start mb-3">
            <span
              className="me-3"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#C9A84C",
                borderRadius: "50%",
                marginTop: "8px",
                flexShrink: 0,
              }}
            />
       <p className="mb-0 text-light fs-6">
  <MagneticText>
    When the decision cannot wait, clarity must arrive.
  </MagneticText>
</p>
            {/* <p className="mb-0 text-light fs-6">
              When the decision cannot wait, <strong>clarity must arrive</strong>.
            </p> */}
          </li>

          <li className="d-flex align-items-start">
            <span
              className="me-3"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#C9A84C",
                borderRadius: "50%",
                marginTop: "8px",
                flexShrink: 0,
              }}
            />
          <p className="mb-0 text-light fs-6">
  <MagneticText>
    Not guidance. Not reassurance. A reckoning.
  </MagneticText>
</p>
            {/* <p className="mb-0 text-light fs-6">
              <strong>Not guidance.</strong> <strong>Not reassurance.</strong> A reckoning.
            </p> */}
          </li>

        </ul>
      </div>
    </div>
  </Col>
</Row>
        {/* RIGHT IMAGES */}
      <div className="stage">
  {IMAGE_LAYOUT.map((item, i) => (
    <div
      key={i}
      ref={(el) => (refs.current[i] = el)}
      className="photo"
    >
      <img src={item.src} alt="lorem" />
    </div>
  ))}
</div>
        {/* <div className="stage">
          {[animationImage1,animationImage2, animationImage3, animationImage4,animationImage1,animationImage2].map((image, i) => (
            <div
              key={i}
              ref={el => (refs.current[i] = el)}
              className={`photo ${i === 0 ? "center" : ""}`}
            >
            <img
  src={image}
  alt="lorem"
/>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
