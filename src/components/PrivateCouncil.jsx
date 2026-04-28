// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "../asstes/styles/privateCouncil.scss";
// import WhatThisIs from "../asstes/images/private-council/what-this-is.jpg";
// import FinalAuthority from "../asstes/images/private-council/Final-Authority.jpg";
// import NoDelegationLeft from "../asstes/images/private-council/No-Delegation-Left.jpg";
// import IrreversibleConsequence from "../asstes/images/private-council/Irreversible-Consequence.jpg";

// import Optimization from "../asstes/images/private-council/Optimization.jpg";
// import PersonalDevelopment from "../asstes/images/private-council/Personal-Development.jpg";
// import PerformanceEnhancement from "../asstes/images/private-council/Performance-Enhancement.jpg";
// import GuidanceSeeking from "../asstes/images/private-council/Guidance-Seeking.jpg";

// import PrivateAlignmentReview from "../asstes/images/private-council/timeline-1.jpg";
// import ThresholdConfirmation from "../asstes/images/private-council/timeline-2.jpg";
// import ClosedDoorConvening from "../asstes/images/private-council/timeline-3.jpg";
// import Aftermath from "../asstes/images/private-council/timeline-4.jpg";
// import PrivateAlignmentModal from "./PrivateAlignmentModal";

// // ---------------------------------------------------
// const data = [
//   {
//     title: "Final Authority",
//     text: "You carry the decision.",
//     image: FinalAuthority, // replace later
//   },
//   {
//     title: "Irreversible Consequence",
//     text: "The outcome will shape lives, institutions, or trajectories.",
//     image: IrreversibleConsequence,
//   },
//   {
//     title: "No Delegation Left",
//     text: "No board, role, consultant, or framework can absorb what must be carried next.",
//     image: NoDelegationLeft,
//   },
// ];
// const notForItems = [
//   "Optimization",
//   "Personal Development",
//   "Performance Enhancement",
//   "Guidance-Seeking",
//   "Reassurance",
//   "Validation",
//   "Instruction",
// ];
// const items = [
//   {
//     title: "Optimization",
//     image: Optimization,
//   },
//   {
//     title: "Personal Development",
//     image: PersonalDevelopment,
//   },
//   {
//     title: "Performance Enhancement",
//     image: PerformanceEnhancement,
//   },
//   {
//     title: "Guidance-Seeking",
//     image: GuidanceSeeking,
//   },
// ];
// const steps = [
//   {
//     title: "Private Alignment Review",
//     text: "A short written submission establishes gravity and readiness.",
//     image: PrivateAlignmentReview,
//   },
//   {
//     title: "Threshold Confirmation",
//     text: "Contribution is received in advance.",
//     image: ThresholdConfirmation,
//   },
//   {
//     title: "Closed-Door Convening",
//     text: "One individual. One engagement. No fixed duration.",
//     image: ClosedDoorConvening,
//   },
//   {
//     title: "Aftermath",
//     text: "No follow-up program. No advisory relationship. What remains belongs entirely to the individual.",
//     image: Aftermath,
//   },
// ];
// function PrivateCouncil() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <div className="exce-book-page">
//         <section className="page-banner banner books-list-page banner-two">
//           <Container>
//             <nav aria-label="breadcrumb" className="breadcrumb-nav">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="breadcrumb-item active">
//                   <Link to="/">Private Council</Link>
//                 </li>
//               </ol>
//             </nav>
//             <Row>
//               <Col xs={12} md={8} lg={8} className="me-auto">
//                 <div className="about-banner-content">
//                   {/* <span className="sub-title">Bhupendra’s Events</span> */}
//                   <h1 className="banner-title">Private Council</h1>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section
//           className="private-council council-hero pd-common bg-dark-b"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Container>
//             <div className="private-council-content">
//               <h2 className="title-heading">
//                 The Private Council
//                 <span className="sub-heading">
//                   Convened by Bhupendra Chaudhary
//                 </span>
//               </h2>
//               <div className="btn-toolbar-title mt-4">
//                 <a href="javascript:void(0);" data-discover="true">
//                   <button
//                     className="btn bh-btn-dark view-all"
//                     onClick={() => setShowModal(true)}
//                   >
//                     Request Private Alignment Review
//                   </button>
//                 </a>
//               </div>
//               {/* <p className="primary-statement mt-4">
//                                 For individuals carrying decisions whose consequence cannot be
//                                 delegated, diluted, or quietly reversed.
//                             </p>
                            
//                             <p className="supporting-copy mt-3">
//                                 Bhupendra Chaudhary is sought when intelligence is already present,
//                                 options are already visible, and yet action remains unresolved
//                                 because of what the decision will demand of the person making it.
//                                 This is not advisory work. It is a private, single engagement where
//                                 avoidance ends and answerability becomes visible.
//                             </p> */}

//               <PrivateAlignmentModal
//                 show={showModal}
//                 handleClose={() => setShowModal(false)}
//               />
//             </div>
//           </Container>
//         </section>
//         <section className="the-private-what-this pd-common">
//           <Container>
//             <div className="sec-title">
//               <h2 className="title-heading">The Decision You Can’t Avoid</h2>

//               <p className="supporting-copy mt-2 text-center">
//                 For individuals carrying decisions whose consequence cannot be
//                 delegated, diluted, or quietly reversed.
//               </p>

//               <p className="supporting-copy mt-2 text-center">
//                 Bhupendra Chaudhary is sought when intelligence is already
//                 present, options are already visible, and yet action remains
//                 unresolved because of what the decision will demand of the
//                 person making it. This is not advisory work. It is a private,
//                 single engagement where avoidance ends and answerability becomes
//                 visible.
//               </p>
//             </div>
//           </Container>
//         </section>
//         <section className="who-seeks-section pd-common">
//           <Container>
//             {/* Section Heading */}
//             <div className="sec-title">
//               <h2 className="title-heading">Who Seeks This</h2>
//               <p className="supporting-copy">
//                 The Private Council is for individuals who hold final authority
//                 over consequen;al decisions, cannot outsource the cost of
//                 deciding, and operate at a level where errors cannot be quietly
//                 corrected. It is sought across enterprise, leadership, capital,
//                 influence, ins;tu;onal power, and personal authority when
//                 consensus has become a shield and delay has become a decision in
//                 disguise.
//               </p>
//             </div>

//             <Row>
//               {data.map((item, index) => (
//                 <Col md={4} key={index}>
//                   <div className="who-card">
//                     {/* Image as background (better scaling) */}
//                     <div
//                       className="who-card-image"
//                       style={{ backgroundImage: `url(${item.image})` }}
//                     />

//                     {/* Content */}
//                     <div className="who-card-content">
//                       <h5>{item.title}</h5>
//                       <p>{item.text}</p>
//                     </div>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <section className="the-private-what-this pd-common">
//           <Container>
//             <Row className="align-items-center">
//               <Col xs={12} md={6} lg={6}>
//                 <div className="private-what-this-content">
//                   <h2 className="title-heading">What This Is</h2>
//                   <p>
//                     The Private Council is the form through which Bhupendra
//                     Chaudhary engages. It is not a program, not an ins;tu;on
//                     independent of him, and not repeatable without him. It is a
//                     closed-door engagement convened personally when further
//                     deferral would amount to evasion. The purpose is not to
//                     provide direc;on. The purpose is to remove avoidance.{" "}
//                   </p>
//                 </div>
//               </Col>
//               <Col xs={12} md={6} lg={6}>
//                 <div className="private-council-block">
//                   <img
//                     src={WhatThisIs}
//                     alt="What This Is"
//                     className="img-fluid"
//                   />
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section className="what-happens-section">
//           <Container>
//             <Row className="align-items-center">
//               {/* LEFT: Hard Statements */}
//               <Col md={5}>
//                 <div className="left-panel">
//                   <h2 className="section-title">What Happens</h2>

//                   <ul className="statement-list">
//                     <li>No advice is given.</li>
//                     <li>No reassurance is offered.</li>
//                     <li>No outcomes are promised.</li>
//                   </ul>
//                 </div>
//               </Col>

//               {/* RIGHT: Deep Content */}
//               <Col md={7}>
//                 <div className="right-panel">
//                   <p className="main-text">
//                     What becomes visible is what the decision will require you
//                     to bear, without role protection, narrative insulation, or
//                     borrowed certainty.
//                   </p>

//                   <p className="final-line">
//                     This is not an experience. It is a confrontation with
//                     answerability.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section className="what-not-visual pd-common">
//           <Container>
//             {/* Heading */}
//             <div className="text-center header">
//               <h2>What This Is Not</h2>
//               <p>
//                 This is not for optimization, personal development, performance
//                 enhancement, or guidance-seeking. If reassurance, validation, or
//                 instruction is required, the Council is not appropriate.
//               </p>
//             </div>

//             {/* Visual Grid */}
//             <Row className="g-4">
//               {items.map((item, index) => (
//                 <Col md={3} sm={6} key={index}>
//                   <div
//                     className="visual-card"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   >
//                     <div className="overlay" />

//                     <div className="content">
//                       <span className="cross">✕</span>
//                       <h5>{item.title}</h5>
//                     </div>
//                   </div>
//                 </Col>
//               ))}
//             </Row>

//             {/* Bottom Statement */}
//             <div className="bottom-text">
//               <p>
//                 This must be distinguished from mentorship, spiritual teaching,
//                 consulting, or executive coaching.
//               </p>
//               <p className="highlight">
//                 The Council is exact, narrow, and final.
//               </p>
//             </div>
//           </Container>
//         </section>
//         <section className="why-bhupendra pd-common">
//           <Container>
//             <Row className="align-items-center">
//               {/* LEFT IMAGE */}
//               <Col md={6}>
//                 <div className="image-block" />
//               </Col>

//               {/* RIGHT CONTENT */}
//               <Col md={6}>
//                 <div className="content-block">
//                   <h2 className="section-title">Why Bhupendra</h2>

//                   <p className="text">
//                     Bhupendra Chaudhary is sought when decisions carry
//                     irreversible consequence and cannot be delegated, op;mized,
//                     or absorbed by role or system.
//                   </p>

//                   <p className="text">
//                     His work sits beyond advisory, strategy, or coaching. He
//                     engages only when intelligence is already present and
//                     avoidance is the remaining obstacle.
//                   </p>

//                   <p className="text highlight">
//                     The Private Council is the form through which he convenes,
//                     rarely and privately, to surface what a decision will
//                     require the individual to carry — without reassurance or
//                     dilution.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         <section className="engagement-threshold pd-common">
//           <div className="overlay" />

//           <Container>
//             <div className="threshold-card">
//               <h2 className="title">Condition of Engagement</h2>

//               <p className="text">
//                 Engagement requires a six- to seven-figure contribution, payable
//                 in advance at the time the convening is scheduled.
//               </p>

//               <p className="text">
//                 This is not a fee for time and not a commercial exchange in the
//                 ordinary sense. It is a threshold condition that establishes
//                 readiness before the room is entered.
//               </p>

//               <p className="text highlight">
//                 Hesitation, negotiation, comparison, or justification indicates
//                 misalignment. In such cases, the Council is not convened.
//               </p>
//             </div>
//           </Container>
//         </section>
//         <section className="process-section pd-common">
//           <Container>
//             <h2 className="section-title">How Engagement Occurs</h2>
//             {/* Timeline */}
//             <div className="timeline">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
//                 >
//                   <div className="timeline-content">
//                     {/* Image */}
//                     <div
//                       className="timeline-image"
//                       style={{ backgroundImage: `url(${step.image})` }}
//                     />

//                     {/* Text */}
//                     <div className="timeline-text">
//                       <h5>{step.title}</h5>
//                       <p>{step.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="closing-cta pd-common">
//           <div className="overlay" />

//           <Container>
//             <div className="cta-content">
//               <h2 className="cta-title">
//                 When consequence can no longer be postponed
//               </h2>

//               <p className="cta-text">
//                 If this resonates, submit a private alignment request. If it
//                 does not, the Council is not appropriate.
//               </p>

//               <div className="btn-toolbar-title my-4">
//                 <a href="javascript:void(0);" data-discover="true">
//                   <button className="btn bh-btn-dark view-all">
//                     Submit Private Alignment Review
//                   </button>
//                 </a>
//               </div>

//               <p className="cta-note">
//                 All submissions are reviewed privately. Silence is also an
//                 outcome.
//               </p>
//             </div>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../asstes/styles/privateCouncil.scss";
import Optimization from "../asstes/images/private-council/Optimization.jpg";
import PersonalDevelopment from "../asstes/images/private-council/Personal-Development.jpg";
import PerformanceEnhancement from "../asstes/images/private-council/Performance-Enhancement.jpg";
import GuidanceSeeking from "../asstes/images/private-council/Guidance-Seeking.jpg";
import HeroSectionSeeking from "../asstes/images/private-council/hero-banner.jpg";
import HeroRightImageSeeking from "../asstes/images/private-council/Bhupendr-rightIamge.png";
import PrivateAlignmentModal from "./PrivateAlignmentModal";
import WhatThisIs from '../asstes/images/private-council/what-this-is.jpg';
import Whybhupendra from '../asstes/images//private-council/cta-bg.jpg';
import PrivateAnimation from "./PrivateAnimation";
const GOLD = "#C9A84C";
const DARK = "#000000";
// const DARK = "#0a0a0f";
const DARKER = "#060609";
const WHITE = "#ffffff";
// const GOLD   = "#C9A84C";   // Premium gold (keep as-is)

// const DARK   = "#141418";   // Soft charcoal (main background)
// const DARKER = "#0F0F13";   // Section contrast, not pure black

// const WHITE  = "#F5F5F7";  
const items = [
    {
        title: "Optimization",
        image:Optimization,
    },
    {
        title: "Personal Development",
        image:PersonalDevelopment,
    },
    {
        title: "Performance Enhancement",
        image:PerformanceEnhancement,
    },
    {
        title: "Guidance-Seeking",
        image:GuidanceSeeking,
    },
];
/* ══ BREAKPOINT HOOK ══ */
export const useBreakpoint = () => {
  const [bp, setBp] = useState({ isMobile: false, isTablet: false, isDesktop: true, w: 1200 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBp({ isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024, w });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
};

/* ══ INTERSECTION OBSERVER ══ */
const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

/* ══ INTRO SPLASH ══ */
const IntroScreen = ({ onDone }) => {
  const TITLE = "PRIVATE COUNCIL";
  const [phase, setPhase] = useState(0);
  const { isMobile } = useBreakpoint();
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 2600);
    const t3 = setTimeout(() => onDone(), 3500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);
  return (
    <div style={{
      position:"fixed",inset:0,background:DARKER,zIndex:10000,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      padding:"1rem",
      opacity:phase===2?0:1,transition:phase===2?"opacity 0.9s ease 0.5s":"none",
      pointerEvents:phase===2?"none":"all",
    }}>
      {[...Array(isMobile?10:20)].map((_,i)=>(
        <div key={i} style={{
          position:"absolute",left:`${5+i*(isMobile?9:4.7)}%`,top:`${20+Math.sin(i*1.3)*30+25}%`,
          width:"2px",height:"2px",borderRadius:"50%",background:GOLD,
          opacity:phase>=1?0.6:0,transition:`opacity 0.4s ease ${i*0.05}s`,
          animation:phase>=1?`twinkle ${1.6+i*0.15}s ease-in-out ${i*0.08}s infinite`:"none",
        }}/>
      ))}
      <div style={{overflow:"hidden",marginBottom:"1.2rem"}}>
        <p style={{
          color:"rgba(255,255,255,0.35)",fontFamily:"'Cormorant Garamond',serif",
          fontSize:isMobile?"0.58rem":"0.72rem",letterSpacing:isMobile?"0.3em":"0.55em",
          margin:0,textTransform:"uppercase",textAlign:"center",
          opacity:phase>=1?1:0,transform:phase>=1?"translateY(0)":"translateY(30px)",
          transition:"all 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s"
        }}>Convened by Bhupendra Chaudhary</p>
      </div>
      <div style={{display:"flex",gap:"0.04rem",flexWrap:"wrap",justifyContent:"center",maxWidth:"95vw"}}>
        {TITLE.split("").map((l,i)=>(
          <span key={i} style={{
            fontSize:isMobile?"clamp(1.6rem,8vw,2.8rem)":"clamp(2.5rem,8vw,6rem)",
            fontWeight:900,color:l===" "?"transparent":GOLD,
            fontFamily:"'Playfair Display',serif",display:"inline-block",
            opacity:phase>=1?1:0,
            transform:phase>=1?"translateY(0) rotateY(0)":"translateY(80px) rotateY(90deg)",
            transition:`all 0.75s cubic-bezier(0.34,1.56,0.64,1) ${0.25+i*0.055}s`,
            textShadow:phase>=1?`0 0 50px rgba(201,168,76,0.4)`:"none",
            minWidth:l===" "?(isMobile?"0.5rem":"1rem"):"auto",
          }}>{l===" "?"\u00A0":l}</span>
        ))}
      </div>
      <div style={{marginTop:"1.5rem",width:phase>=1?(isMobile?"120px":"200px"):"0",height:"1px",background:`linear-gradient(to right,transparent,${GOLD},transparent)`,transition:"width 1.2s ease 1.2s",opacity:0.5}}/>
    </div>
  );
};

/* ══ WORD REVEAL ══ */
export const WordReveal = ({text,inView,delay=0,highlight=[],style={}})=>(
  <div style={style}>
    {text.split(" ").map((w,i)=>(
      <span key={i} style={{
        display:"inline-block",marginRight:"0.26em",
        opacity:inView?1:0,transform:inView?"translateY(0) skewY(0)":"translateY(45px) skewY(4deg)",
        transition:`all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay+i*0.07}s`,
        color:highlight.includes(w)?GOLD:"inherit",fontStyle:highlight.includes(w)?"italic":"inherit",
      }}>{w}</span>
    ))}
  </div>
);

/* ══ CHAR REVEAL ══ */
const CharReveal=({text,inView,delay=0,style={},cStyle={}})=>(
  <span style={{display:"inline-flex",flexWrap:"wrap",paddingLeft:"15px",...style}}>
    {text.split("").map((c,i)=>(
      <span key={i} style={{
        display:"inline-block",opacity:inView?1:0,
        transform:inView?"translateY(0) rotateX(0)":"translateY(40px) rotateX(70deg)",
        transition:`all 0.55s cubic-bezier(0.22,1,0.36,1) ${delay+i*0.028}s`,...cStyle,
      }}>{c===" "?"\u00A0":c}</span>
    ))}
  </span>
);

/* ══ SLIDE IN ══ */
const SlideIn=({children,inView,delay=0,dir="up",style={}})=>{
  const map={up:"translateY(50px)",down:"translateY(-50px)",left:"translateX(-50px)",right:"translateX(50px)"};
  return(
    <div style={{opacity:inView?1:0,transform:inView?"none":map[dir],transition:`all 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,...style}}>
      {children}
    </div>
  );
};

/* ══ MAGNETIC BUTTON ══ */
const MagBtn=({children,outline=false,style={},onClick})=>{
  const ref=useRef(null);
  const [pos,setPos]=useState({x:0,y:0});
  const [hov,setHov]=useState(false);
  return(
    <button ref={ref} onClick={onClick}
      onMouseMove={e=>{const r=ref.current.getBoundingClientRect();setPos({x:(e.clientX-r.left-r.width/2)*0.22,y:(e.clientY-r.top-r.height/2)*0.22});}}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>{setPos({x:0,y:0});setHov(false);}}
      style={{
        background:hov?(outline?"rgba(255,255,255,0.06)":GOLD):"transparent",
        border:`1px solid ${outline?"rgba(255,255,255,0.25)":GOLD}`,
        color:hov?(outline?"#fff":"#000"):(outline?"rgba(255,255,255,0.6)":GOLD),
        padding:"0.85rem 1.8rem",fontFamily:"'Cormorant Garamond',serif",
        fontSize:"0.8rem",letterSpacing:"0.2em",cursor:"pointer",
        textTransform:"uppercase",borderRadius:"1px",
        transform:`translate(${pos.x}px,${pos.y}px)`,
        transition:"transform 0.3s ease,background 0.25s,color 0.25s",
        whiteSpace:"nowrap",...style,
      }}>{children}</button>
  );
};

/* ══ FLYING TITLE ══ */
const FlyingTitle=({go})=>{
  const CHARS="Bhupendra Chaudhary".split("");
  const [letters,setLetters]=useState([]);
  const done=useRef(false);
  useEffect(()=>{
    if(!go||done.current)return;
    done.current=true;
    const spacing=Math.min(28,window.innerWidth*0.038);
    const allLetters=CHARS.map((l,i)=>({
      l,i,
      startX:Math.random()*window.innerWidth,startY:-80-Math.random()*250,
      endX:window.innerWidth/2+(i-CHARS.length/2)*spacing,endY:window.innerHeight*0.4,
      flying:false,landed:false,
    }));
    setLetters(allLetters);
    allLetters.forEach((_,i)=>{
      setTimeout(()=>setLetters(p=>p.map((s,j)=>j===i?{...s,flying:true}:s)),i*38);
      setTimeout(()=>setLetters(p=>p.map((s,j)=>j===i?{...s,landed:true}:s)),i*38+950);
    });
    setTimeout(()=>setLetters([]),CHARS.length*38+1200);
  },[go]);
  return(
    <>
      {letters.map(s=>(
        <div key={s.i} style={{
          position:"fixed",pointerEvents:"none",zIndex:9000,
          left:s.flying?s.endX:s.startX,top:s.flying?s.endY:s.startY,
          transform:"translate(-50%,-50%)",
          fontSize:"clamp(1.2rem,3vw,2.6rem)",fontWeight:900,fontFamily:"'Playfair Display',serif",
          color:s.landed?"transparent":GOLD,opacity:s.landed?0:1,
          textShadow:s.flying&&!s.landed?`0 0 40px ${GOLD}`:"none",
          transition:"left 0.85s cubic-bezier(0.22,1,0.36,1),top 0.85s cubic-bezier(0.22,1,0.36,1),color 0.3s ease 0.7s,opacity 0.3s ease 0.7s",
        }}>{s.l}</div>
      ))}
    </>
  );
};

/* ══ SECTION LABEL ══ */
const SectionLabel=({children,inView,delay=0})=>(
  <SlideIn inView={inView} delay={delay}>
    <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.1rem"}}>
      <div style={{width:"18px",height:"1px",background:GOLD,opacity:0.5}}/>
      <span style={{color:GOLD,fontSize:"0.58rem",letterSpacing:"0.45em",textTransform:"uppercase"}}>{children}</span>
    </div>
  </SlideIn>
);

/* ══ DIVIDER ══ */
const Divider=({inView})=>(
  <div style={{display:"flex",alignItems:"center",gap:"1rem",margin:"0 auto 2.2rem",maxWidth:"280px"}}>
    <div style={{flex:1,height:"1px",background:`linear-gradient(to right,transparent,${GOLD})`,opacity:inView?0.3:0,transition:"opacity 1s ease 0.3s"}}/>
    <div style={{width:"5px",height:"5px",background:GOLD,transform:"rotate(45deg)",opacity:inView?1:0,transition:"opacity 0.8s ease 0.5s"}}/>
    <div style={{flex:1,height:"1px",background:`linear-gradient(to left,transparent,${GOLD})`,opacity:inView?0.3:0,transition:"opacity 1s ease 0.3s"}}/>
  </div>
);

/* ══ WHO CARD ══ */
const WhoCard=({icon,title,desc,index,inView})=>{
  const [hov,setHov]=useState(false);
  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:hov?"rgba(201,168,76,0.06)":"rgba(255,255,255,0.015)",
        border:`1px solid rgba(201,168,76,${hov?0.5:0.14})`,
        borderRadius:"1px",padding:"1.8rem",position:"relative",overflow:"hidden",cursor:"pointer",
        opacity:inView?1:0,transform:inView?"translateY(0) scale(1)":"translateY(60px) scale(0.95)",
        transition:`all 0.85s cubic-bezier(0.22,1,0.36,1) ${index*0.13}s`,
      }}>
      <div style={{position:"absolute",top:0,left:0,width:"3px",height:hov?"100%":"28%",background:`linear-gradient(to bottom,${GOLD},transparent)`,transition:"height 0.5s"}}/>
      <div style={{position:"absolute",bottom:0,right:0,width:hov?"100%":"0",height:"1px",background:`linear-gradient(to left,${GOLD},transparent)`,transition:"width 0.5s ease 0.1s"}}/>
      <div style={{width:"36px",height:"36px",border:`1px solid rgba(201,168,76,0.28)`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.2rem",fontSize:"1rem",background:hov?"rgba(201,168,76,0.1)":"transparent",transition:"background 0.3s"}}>{icon}</div>
      <div style={{width:hov?"48px":"24px",height:"1px",background:GOLD,marginBottom:"0.9rem",opacity:0.5,transition:"width 0.4s"}}/>
      <h3 style={{color:WHITE,fontFamily:"'Playfair Display',serif",fontSize:"0.98rem",fontWeight:700,marginBottom:"0.65rem",lineHeight:1.3,transform:hov?"translateX(6px)":"translateX(0)",transition:"transform 0.4s"}}>{title}</h3>
      <p style={{color:"rgba(255,255,255,0.4)",fontSize:"0.84rem",lineHeight:1.8,margin:0}}>{desc}</p>
    </div>
  );
};

/* ══ PROCESS STEP ══ */
const ProcessStep=({num,title,desc,index,inView})=>{
  const [hov,setHov]=useState(false);
  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"flex",gap:"1.3rem",alignItems:"flex-start",padding:"1.6rem 0",
        borderBottom:`1px solid rgba(201,168,76,${hov?0.22:0.07})`,cursor:"pointer",
        opacity:inView?1:0,transform:inView?"translateX(0)":"translateX(-50px)",
        transition:`all 0.8s cubic-bezier(0.22,1,0.36,1) ${index*0.13}s`,
      }}>
      <div style={{minWidth:"44px",height:"44px",border:`1px solid rgba(201,168,76,${hov?0.7:0.28})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:GOLD,fontFamily:"'Playfair Display',serif",fontSize:"0.95rem",fontWeight:700,background:hov?"rgba(201,168,76,0.08)":"transparent",transition:"all 0.35s",flexShrink:0}}>{num}</div>
      <div>
        <h3 style={{color:WHITE,fontFamily:"'Playfair Display',serif",fontSize:"0.98rem",fontWeight:700,marginBottom:"0.45rem",transform:hov?"translateX(6px)":"translateX(0)",transition:"transform 0.35s"}}>{title}</h3>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:"0.84rem",lineHeight:1.8,margin:0}}>{desc}</p>
      </div>
    </div>
  );
};

/* ══ NOT CARD ══ */
const NotCard=({label,index,inView})=>{
  const [hov,setHov]=useState(false);
  return(
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        position:"relative",overflow:"hidden",
        background:"rgba(255,255,255,0.014)",border:"1px solid rgba(255,255,255,0.055)",
        borderRadius:"1px",padding:"1.3rem",
        opacity:inView?1:0,transform:inView?"translateY(0)":"translateY(45px)",
        transition:`all 0.7s cubic-bezier(0.22,1,0.36,1) ${index*0.1}s`,
      }}>
      <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(255,60,60,${hov?0.06:0.015}) 0%,transparent 100%)`,transition:"background 0.4s"}}/>
      <div style={{position:"absolute",top:"0.75rem",right:"0.75rem",width:"18px",height:"18px",border:"1px solid rgba(255,80,80,0.28)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,80,80,0.55)",fontSize:"0.65rem"}}>✕</div>
      <div style={{height:"50px",marginBottom:"0.8rem",background:"rgba(255,255,255,0.025)",borderRadius:"1px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{fontSize:"1.4rem",opacity:0.1}}>◈</div>
      </div>
      <p style={{color:"rgba(255,255,255,0.32)",fontSize:"0.72rem",letterSpacing:"0.1em",textAlign:"center",textTransform:"uppercase",margin:0}}>{label}</p>
    </div>
  );
};

/* ══ MOBILE MENU ══ */
const MobileMenu=({links,open,onClose})=>(
  <div style={{position:"fixed",inset:0,background:"rgba(6,6,9,0.98)",zIndex:999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:open?1:0,pointerEvents:open?"all":"none",transition:"opacity 0.4s ease"}}>
    <button onClick={onClose} style={{position:"absolute",top:"1.4rem",right:"1.4rem",background:"transparent",border:"none",color:GOLD,fontSize:"1.7rem",cursor:"pointer",lineHeight:1}}>✕</button>
    {links.map((l,i)=>(
      <a key={l} href="#" onClick={onClose} style={{color:"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:"1.3rem",fontFamily:"'Playfair Display',serif",fontWeight:700,letterSpacing:"0.07em",padding:"0.8rem 0",textTransform:"uppercase",opacity:open?1:0,transform:open?"translateY(0)":"translateY(20px)",transition:`all 0.5s ease ${i*0.07}s`}}
        onMouseEnter={e=>e.target.style.color=GOLD} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.72)"}>{l}</a>
    ))}
    <div style={{marginTop:"1.8rem"}}><MagBtn onClick={onClose}>Login</MagBtn></div>
  </div>
);

/* ══════════ MAIN ══════════ */
export default function PrivateCouncil() {
  const {isMobile,isTablet,isDesktop}=useBreakpoint();
  const [showIntro,setShowIntro]=useState(true);
  const [heroIn,setHeroIn]=useState(false);
  const [flyGo,setFlyGo]=useState(false);
  const [scrollY,setScrollY]=useState(0);
  const [menuOpen,setMenuOpen]=useState(false);
const [showModal, setShowModal] = useState(false);
  const [heroRef,heroInView]=useInView(0.06);
  const [decisionRef,decisionInView]=useInView(0.1);
  const [whoRef,whoInView]=useInView(0.08);
  const [whatRef,whatInView]=useInView(0.1);
  const [happensRef,happensInView]=useInView(0.1);
  const [notRef,notInView]=useInView(0.08);
  const [whyRef,whyInView]=useInView(0.1);
  const [condRef,condInView]=useInView(0.12);
  const [howRef,howInView]=useInView(0.08);
  const [ctaRef,ctaInView]=useInView(0.12);

  useEffect(()=>{
    const h=()=>setScrollY(window.scrollY);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);

  const handleIntroDone=()=>{
    setShowIntro(false);
    setTimeout(()=>setHeroIn(true),100);
    setTimeout(()=>setFlyGo(true),2200);
  };

  const navLinks=["About","Initiatives","Events","Training","Press","Council","Connect"];

  // Responsive spacing
  const px=isMobile?"1.25rem":isTablet?"2.5rem":"5rem";
  const py=isMobile?"4rem":isTablet?"5.5rem":"8rem";

  const whoCards=[
    {icon:"⚖",title:"Final Authority",desc:"You hold the decisive seat in organizations, enterprises, or missions where a single call changes everything."},
    {icon:"◈",title:"Irreversible Consequence",desc:"The decision carries outcomes that cannot be undone, reversed, or passed to another — time is not a luxury."},
    {icon:"⟳",title:"No Delegation Left",desc:"Advisors have spoken, frameworks have failed, and the matter has returned to rest on your singular judgment."},
  ];
  const processSteps=[
    {num:"01",title:"Private Alignment Review",desc:"A short written submission establishes gravity and readiness."},
    {num:"02",title:"Threshold Confirmation",desc:"Contribution is received in advance."},
    {num:"03",title:"Closed-Door Convening",desc:"One individual. One engagement. No fixed duration."},
    {num:"04",title:"Aftermath",desc:"No follow-up program. No advisory relationship. What remains belongs entirely to the individual."},
  ];
  const notCards=["Optimisation","Personal Development","Performance Enhancement","Guidance Seeking"];

  return(
    <div style={{background:DARK,minHeight:"100vh",fontFamily:"'Cormorant Garamond',serif",overflowX:"hidden"}}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet"/>
      {/* <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:${DARKER}}
        ::-webkit-scrollbar-thumb{background:${GOLD};border-radius:2px}
        @keyframes twinkle{0%,100%{opacity:.15;transform:scale(1)}50%{opacity:1;transform:scale(2.2)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes glowPulse{0%,100%{text-shadow:0 0 20px rgba(201,168,76,.2)}50%{text-shadow:0 0 70px rgba(201,168,76,.9),0 0 120px rgba(201,168,76,.35)}}
        @keyframes breathe{0%,100%{opacity:.22;transform:scale(1)}50%{opacity:.5;transform:scale(1.04)}}
        @keyframes rotSlow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes scanLine{0%{transform:translateY(-100vh)}100%{transform:translateY(200vh)}}
        @keyframes ringExpand{0%{transform:translate(-50%,-50%) scale(.3);opacity:.7}100%{transform:translate(-50%,-50%) scale(3);opacity:0}}
        @keyframes pulseRing{0%,100%{box-shadow:0 0 0 0px rgba(201,168,76,.3)}50%{box-shadow:0 0 0 10px rgba(201,168,76,0)}}
      `}</style> */}

      {showIntro&&<IntroScreen onDone={handleIntroDone}/>}
      <FlyingTitle go={flyGo}/>
      {!isDesktop&&<MobileMenu links={navLinks} open={menuOpen} onClose={()=>setMenuOpen(false)}/>}

      {/* ── NAV ── */}
   

      {/* ══ HERO ══ */}
   
      <section ref={heroRef} style={{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 55% 50%,rgba(201,168,76,0.055) 0%,transparent 65%)`}}/>
        <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1}}>
          <div style={{position:"absolute",left:0,right:0,height:"1px",background:`linear-gradient(to right,transparent,rgba(201,168,76,0.07),transparent)`,animation:"scanLine 10s linear infinite"}}/>
        </div>

        <div style={{
          position:"relative",zIndex:2,width:"100%",
          padding:isMobile?"0 1.25rem":isTablet?"0 2.5rem":"0 5rem",
          display:"grid",
          gridTemplateColumns:isDesktop?"55% 45%":"1fr",
          alignItems:"center",
          minHeight:"100vh",
          width:"100%",
          paddingTop:isMobile?"7rem":isTablet?"8rem":"5rem",
          paddingBottom:isMobile?"4rem":"5rem",
          gap:isDesktop?"0":"2.5rem",
             backgroundImage: `url(${HeroRightImageSeeking})` ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
        }}>
          {/* LEFT */}
          <div>
            <SlideIn inView={heroIn} delay={0.1} dir="left">
              <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.2rem"}}>
                <div style={{width:isMobile?"16px":"24px",height:"1px",background:GOLD,opacity:0.5}}/>
                <span style={{color:GOLD,fontSize:isMobile?"0.56rem":"0.6rem",letterSpacing:"0.38em",textTransform:"uppercase"}}>
                  {isMobile?"By Bhupendra Chaudhary":"Convened by Bhupendra Chaudhary"}
                </span>
              </div>
            </SlideIn>

            <div>
              {[
                {txt:"The",fs:isMobile?"1.5rem":isTablet?"2rem":"clamp(1.8rem,3.5vw,3rem)",col:"rgba(255,255,255,0.68)",d:0.3,fw:300},
                {txt:"Private",fs:isMobile?"2.6rem":isTablet?"3.5rem":"clamp(3rem,6vw,5.5rem)",col:WHITE,d:0.45,fw:900},
                {txt:"Council",fs:isMobile?"2.6rem":isTablet?"3.5rem":"clamp(3rem,6vw,5.5rem)",col:GOLD,d:0.6,fw:900,italic:true,glow:true},
              ].map(({txt,fs,col,d,fw,italic,glow})=>(
                <div key={txt} style={{overflow:"hidden"}}>
                  <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:fs,fontWeight:fw,color:col,lineHeight:1.1,fontStyle:italic?"italic":"normal",opacity:heroIn?1:0,transform:heroIn?"translateY(0)":"translateY(110%)",transition:`all 1.1s cubic-bezier(0.22,1,0.36,1) ${d}s`,animation:glow&&heroIn?"glowPulse 4s ease-in-out 2s infinite":"none"}}>{txt}</h1>
                </div>
              ))}
            </div>

            <SlideIn inView={heroIn} delay={0.95} dir="up">
              <p style={{color:"rgba(255,255,255,0.44)",fontSize:isMobile?"0.9rem":"0.96rem",lineHeight:1.9,maxWidth:"420px",marginTop:"1.2rem",marginBottom:"2rem"}}>
                An invitation-only space for those who stand at the edge of an irreversible decision — where consequence demands absolute clarity.
              </p>
            </SlideIn>

            <SlideIn inView={heroIn} delay={1.3} dir="up">
              <MagBtn style={{fontSize:isMobile?"0.68rem":"0.8rem",padding:isMobile?"0.72rem 1.2rem":"0.88rem 1.8rem"}}>
                <div  onClick={() => setShowModal(true)}>

                {isMobile?"Request Review":"Request Private Alignment Review"}
                </div>
              </MagBtn>
            </SlideIn>

            <div style={{marginTop:"2.2rem",display:"flex",gap:isMobile?"1.2rem":"2rem",flexWrap:"wrap"}}>
              {[["By Referral","Access"],["Strict","Confidentiality"],["Singular","Focus"]].map(([n,l],i)=>(
                <SlideIn key={l} inView={heroIn} delay={1.6+i*0.1} dir="up">
                  <div>
                    <div style={{color:GOLD,fontFamily:"'Playfair Display',serif",fontSize:isMobile?"0.82rem":"0.9rem",fontWeight:700}}>{n}</div>
                    <div style={{color:"rgba(255,255,255,0.26)",fontSize:"0.55rem",letterSpacing:"0.17em",textTransform:"uppercase"}}>{l}</div>
                  </div>
                </SlideIn>
              ))}
            </div>
            <div style={{marginTop:"2.2rem",height:"1px",background:GOLD,width:heroIn?"48%":"0%",transition:"width 1.8s ease 2s",opacity:0.16}}/>
          </div>

          {/* RIGHT – hidden on mobile */}
          {!isMobile&&(
            
        
          <div style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:isDesktop?"60vh":"38vh"}}>
              {[isTablet?170:270,isTablet?230:350,isTablet?290:430].map((sz,i)=>(
                <div key={sz} style={{position:"absolute",width:sz,height:sz,border:`1px solid rgba(201,168,76,${0.1-i*0.025})`,borderRadius:"50%",opacity:heroIn?1:0,transition:`opacity 1s ease ${1.5+i*0.2}s`,animation:`rotSlow ${30+i*14}s linear infinite ${i%2?"reverse":""}`}}/>
              ))}
              {/* <div style={{width:isTablet?"170px":"min(240px,23vw)",aspectRatio:"0.72",background:`linear-gradient(160deg,rgba(201,168,76,0.09) 0%,rgba(201,168,76,0.02) 100%)`,border:`1px solid rgba(201,168,76,0.18)`,borderRadius:"2px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",opacity:heroIn?1:0,transform:heroIn?"scale(1)":"scale(0.7) rotateY(20deg)",transition:"all 1.3s cubic-bezier(0.34,1.56,0.64,1) 0.6s"}}>
                <span style={{fontFamily:"'Playfair Display',serif",fontSize:"3.5rem",fontWeight:900,color:GOLD,opacity:0.055,animation:"glowPulse 5s ease-in-out infinite"}}>BC</span>
                <div style={{width:"45px",height:"45px",borderRadius:"50%",border:`1px solid rgba(201,168,76,0.28)`,marginBottom:"0.8rem",opacity:0.32}}/>
                <div style={{width:"60px",height:"1px",background:GOLD,opacity:0.18}}/>
              </div> */}
              <div style={{position:"absolute",bottom:"8%",right:"10%"}}>
                {[0,1].map(k=><div key={k} style={{position:"absolute",left:"50%",top:"50%",width:"36px",height:"36px",border:`1.5px solid ${GOLD}`,borderRadius:"50%",opacity:0.28,animation:`ringExpand 2.5s ease-out ${k*1.25}s infinite`}}/>)}
                <div style={{width:"6px",height:"6px",background:GOLD,borderRadius:"50%",position:"relative",zIndex:1}}/>
              </div>
            </div>
          )}
        </div>

        {/* <div style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",animation:"floatY 3s ease-in-out infinite",opacity:heroIn?0.42:0,transition:"opacity 1s ease 2.5s"}}>
          <span style={{color:GOLD,fontSize:"0.52rem",letterSpacing:"0.4em"}}>SCROLL</span>
          <div style={{width:"1px",height:"36px",background:`linear-gradient(to bottom,${GOLD},transparent)`}}/>
        </div> */}
      </section>

      {/* ══ THE DECISION ══ */}
      <section ref={decisionRef} style={{padding:`${py} ${px}`,position:"relative",textAlign:"center"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at center,rgba(201,168,76,0.048) 0%,transparent 65%)`}}/>
        <div style={{maxWidth:"760px",margin:"0 auto",position:"relative",zIndex:1}}>
          <SectionLabel inView={decisionInView}>The Threshold</SectionLabel>
          <WordReveal inView={decisionInView} delay={0.2} text="The Decision You Can't Avoid" highlight={["Decision","Can't","Avoid"]}
            style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.6rem,7vw,2.4rem)":"clamp(2rem,5vw,3.8rem)",fontWeight:900,color:WHITE,lineHeight:1.2,marginBottom:"2.2rem"}}/>
          <Divider inView={decisionInView}/>
          <SlideIn inView={decisionInView} delay={0.6} dir="up">
            <p style={{color:"rgba(255,255,255,0.5)",fontSize:isMobile?"0.9rem":"0.98rem",lineHeight:2,marginBottom:"1.2rem"}}>
              Bhupendra Chaudhary has been sought in rare moments when a person's direction is already known, and what remains is choosing without retreat.
            </p>
            <p style={{color:"rgba(255,255,255,0.32)",fontSize:isMobile?"0.86rem":"0.9rem",lineHeight:1.9,fontStyle:"italic"}}>
              The Private Council is a unique, singular engagement for those who already know what they must do — and have become ready to carry it.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* ══ WHO SEEKS THIS ══ */}
      <section ref={whoRef} style={{padding:`${py} ${px}`,background:"rgba(201,168,76,0.016)",borderTop:"1px solid rgba(201,168,76,0.07)",borderBottom:"1px solid rgba(201,168,76,0.07)"}}>
        <div style={{maxWidth:"1060px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"2.2rem":"3.8rem"}}>
            <SectionLabel inView={whoInView}>Criteria for Engagement</SectionLabel>
            <WordReveal inView={whoInView} delay={0.2} text="Who Seeks This" highlight={["This"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.7rem,7vw,2.6rem)":"clamp(2rem,4vw,3.5rem)",fontWeight:900,color:WHITE,marginBottom:"1rem"}}/>
            <SlideIn inView={whoInView} delay={0.5} dir="up">
              <p style={{color:"rgba(255,255,255,0.36)",fontSize:"0.88rem",margin:"0 auto",lineHeight:1.9,textAlign:"center"}}>
                The Private Council is for individuals who hold final authority
                over consequen;al decisions, cannot outsource the cost of
                deciding, and operate at a level where errors cannot be quietly
                corrected. It is sought across enterprise, leadership, capital,
                influence, ins;tu;onal power, and personal authority when
                consensus has become a shield and delay has become a decision in
                disguise.
                {/* For individuals who hold final authority over decisions that carry irreversible consequence. */}
              </p>
            </SlideIn>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":isTablet?"1fr 1fr":"repeat(3,1fr)",gap:"1.4rem"}}>
            {whoCards.map((card,i)=><WhoCard key={card.title} {...card} index={i} inView={whoInView}/>)}
          </div>
        </div>
      </section>
           {/* image show */}
       <section ref={whoRef} style={{padding:`0 ${py} ${py} ${px}`,background:"rgba(201,168,76,0.016)",borderTop:"1px solid rgba(201,168,76,0.07)",borderBottom:"1px solid rgba(201,168,76,0.07)"}}>
        <div style={{maxWidth:"1060px",margin:"0 auto"}}>
          
<PrivateAnimation/>
          </div>
          </section>
         {/* ══ WHAT THIS IS ══ */}
      <section ref={whatRef} style={{padding:`${py} ${px}`}}>
        <div style={{maxWidth:"1060px",margin:"0 auto",display:"grid",gridTemplateColumns:isDesktop?"1fr 1fr":"1fr",gap:isDesktop?"4.5rem":"2.2rem",alignItems:"center"}}>
         
          <div>
            <SectionLabel inView={whatInView}>The Nature of the Space</SectionLabel>
            <WordReveal inView={whatInView} delay={0.2} text="What This Is" highlight={["Is"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.7rem,7vw,2.5rem)":"clamp(2rem,3.8vw,3.2rem)",fontWeight:900,color:WHITE,marginBottom:"1.4rem"}}/>
            <SlideIn inView={whatInView} delay={0.5} dir="up">
              <p style={{color:"rgba(255,255,255,0.46)",fontSize:"0.9rem",lineHeight:2,marginBottom:"1.2rem"}}>
                The Private Council is the form through which Bhupendra Chaudhary engages in a single, direct engagement constructed without audience. The conversation meets a person on the threshold of their most important decision.
              </p>
              <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.86rem",lineHeight:1.9,fontStyle:"italic"}}>
                Nothing is promised. Nothing is offered. The Council forms and then — when the work is complete — it dissolves.
              </p>
            </SlideIn>
          </div>
         <SlideIn inView={whatInView} delay={0.35} dir={isDesktop?"right":"up"}>
            <div style={{background:"rgba(255,255,255,0.013)",border:"1px solid rgba(201,168,76,0.11)",borderRadius:"1px",padding:isMobile?"1.8rem 1.3rem":"2.6rem",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:0,width:"100%",height:"2px",background:`linear-gradient(to right,${GOLD},transparent)`,opacity:0.4}}/>
              <div style={{width:"38px",height:"38px",border:`1px solid rgba(201,168,76,0.26)`,borderRadius:"50%",marginBottom:"1.6rem",display:"flex",alignItems:"center",justifyContent:"center",animation:"pulseRing 3s ease-in-out infinite"}}>
                <div style={{width:"12px",height:"12px",background:GOLD,borderRadius:"50%",opacity:0.35}}/>
              </div>
              <p style={{color:"#fdfdfd",fontSize:isMobile?"0.92rem":"0.96rem",lineHeight:1.9,fontStyle:"italic",marginBottom:"1.6rem"}}>
                "The Private Council is not an experience. It is a confrontation with answerability."
              </p>
              <div style={{borderTop:"1px solid rgba(201,168,76,0.1)",paddingTop:"1.1rem"}}>
                <p style={{color:GOLD,fontSize:"0.67rem",letterSpacing:"0.28em"}}>— BHUPENDRA CHAUDHARY</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

 
   

      {/* ══ WHAT HAPPENS ══ */}
      <section ref={happensRef} style={{padding:`${py} ${px}`,background:"rgba(6,6,9,0.8)",borderTop:"1px solid rgba(201,168,76,0.07)"}}>
        <div style={{maxWidth:"1060px",margin:"0 auto",display:"grid",gridTemplateColumns:isDesktop?"1fr 1fr":"1fr",gap:isDesktop?"4.5rem":"2.2rem",alignItems:"start"}}>
          <div>
            <SectionLabel inView={happensInView}>Inside the Council</SectionLabel>
            <WordReveal inView={happensInView} delay={0.2} text="What Happens" highlight={["Happens"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.7rem,7vw,2.5rem)":"clamp(2rem,3.8vw,3.2rem)",fontWeight:900,color:WHITE,marginBottom:"1.8rem"}}/>
            {["No advice is given.","No reassurance is offered.","No outcomes are promised."].map((txt,i)=>(
              <SlideIn key={txt} inView={happensInView} delay={0.4+i*0.15} dir="up">
                <div style={{display:"flex",alignItems:"center",gap:"0.9rem",marginBottom:"1rem"}}>
                  <div style={{width:"16px",height:"1px",background:GOLD,opacity:0.42,flexShrink:0}}/>
                  <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.88rem"}}>{txt}</p>
                </div>
              </SlideIn>
            ))}
          </div>
          <SlideIn inView={happensInView} delay={0.5} dir={isDesktop?"right":"up"}>
            <div style={{background:"rgba(201,168,76,0.028)",border:`1px solid rgba(201,168,76,0.14)`,borderRadius:"1px",padding:isMobile?"1.8rem 1.3rem":"2.6rem",position:"relative"}}>
              {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],k)=>(
                <div key={k} style={{position:"absolute",[v]:"1rem",[h]:"1rem",width:"6px",height:"6px",border:`1px solid ${GOLD}`,transform:"rotate(45deg)",opacity:0.35}}/>
              ))}
              <p style={{color:"rgba(255,255,255,0.6)",fontSize:isMobile?"0.9rem":"0.96rem",lineHeight:2,fontStyle:"italic",marginBottom:"1.6rem"}}>
                What becomes visible is what the decision will ask you to face: without exit, without rationale, without return. This confrontation is where clarity lives.
              </p>
              <div style={{borderTop:"1px solid rgba(201,168,76,0.09)",paddingTop:"1.2rem"}}>
                <p style={{color:"rgba(255,255,255,0.2)",fontSize:"0.76rem",letterSpacing:"0.12em",fontStyle:"italic"}}>
                  This is not an experience. It is a confrontation with answerability.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ══ WHAT THIS IS NOT ══ */}
      {/* <section ref={notRef} style={{padding:`${py} ${px}`}}>
        <div style={{maxWidth:"1020px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"2rem":"3.5rem"}}>
            <WordReveal inView={notInView} delay={0} text="What This Is Not" highlight={["Not"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.7rem,7vw,2.6rem)":"clamp(2rem,4vw,3.5rem)",fontWeight:900,color:WHITE,marginBottom:"1rem"}}/>
            <SlideIn inView={notInView} delay={0.4} dir="up">
              <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.86rem",maxWidth:"470px",margin:"0 auto",lineHeight:1.9}}>
                Made for a critical few. It cannot serve those seeking reassurance, validation, or performance enhancement.
              </p>
            </SlideIn>
          </div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)",gap:isMobile?"0.9rem":"1.2rem",marginBottom:"2.2rem"}}>
            {notCards.map((label,i)=><NotCard key={label} label={label} index={i} inView={notInView}/>)}
          </div>
          <SlideIn inView={notInView} delay={0.6} dir="up">
            <p style={{textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"0.78rem",lineHeight:1.9,maxWidth:"460px",margin:"0 auto",fontStyle:"italic"}}>
              The Council is distinct from mentoring, strategy consulting, or coaching. The Council is never started, and thus — it flows.
            </p>
          </SlideIn>
        </div>
      </section> */}
              <section className="what-not-visual pd-common">
                     <Container>

                         {/* Heading */}
                         
                         <div className="text-center header">
                             <h2 className=" text-white">What This Is Not</h2>
                             <p className=" text-white-50">
                                 This is not for optimization, personal development, performance
                                 enhancement, or guidance-seeking. If reassurance, validation, or
                                 instruction is required, the Council is not appropriate.
                             </p>
                         </div>

                         {/* Visual Grid */}
                         <Row className="g-4">
                             {items.map((item, index) => (
                                <Col md={3} sm={6} key={index}>
                                    <div
                                        className="visual-card"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <div className="overlay" />

                                        <div className="content">
                                            <span className="cross">✕</span>
                                            <h5>{item.title}</h5>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        {/* Bottom Statement */}
                        <div className="bottom-text">
                            <p className=" text-white-50">
                                This must be distinguished from mentorship, spiritual teaching,
                                consulting, or executive coaching.
                            </p>
                            <p className="highlight text-white-50">
                                The Council is exact, narrow, and final.
                            </p>
                        </div>

                    </Container>
                </section>

      {/* ══ WHY BHUPENDRA ══ */}
      <section ref={whyRef} style={{padding:`${py} ${px}`,background:"rgba(201,168,76,0.016)",borderTop:"1px solid rgba(201,168,76,0.07)",borderBottom:"1px solid rgba(201,168,76,0.07)"}}>
        <div style={{maxWidth:"1060px",margin:"0 auto",display:"grid",gridTemplateColumns:isDesktop?"1fr 1.4fr":"1fr",gap:isDesktop?"4.5rem":"2.2rem",alignItems:"center"}}>
          {!isMobile&&(
            <SlideIn inView={whyInView} delay={0.2} dir="left">
              <div style={{position:"relative"}}>
                <div style={{width:"100%",aspectRatio:"0.82",background:`linear-gradient(150deg,rgba(201,168,76,0.08) 0%,rgba(201,168,76,0.018) 100%)`,border:`1px solid rgba(201,168,76,0.14)`,borderRadius:"1px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",borderRadius:"16px",backgroundImage: `url(${WhatThisIs})` ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",}}>
                  {/* <span style={{fontFamily:"'Playfair Display',serif",fontSize:"5rem",fontWeight:900,color:GOLD,opacity:0.045}}>BC</span> */}
                  <div style={{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(to right,${GOLD},transparent)`,opacity:0.22}}/>
                  <div style={{position:"absolute",top:"1rem",left:"1rem",width:"24px",height:"24px",border:`1px solid rgba(201,168,76,0.25)`,borderRadius:"50%",animation:"pulseRing 3s ease-in-out infinite"}}/>
                </div>
                <div style={{position:"absolute",bottom:"-14px",right:"-14px",width:"56px",height:"56px",border:`1px solid rgba(201,168,76,0.1)`,borderRadius:"1px",background:"rgba(201,168,76,0.025)"}}/>
                <div style={{position:"absolute",top:"-10px",left:"-10px",width:"38px",height:"38px",border:`1px solid rgba(201,168,76,0.08)`,borderRadius:"1px"}}/>
              </div>
            </SlideIn>
          )}
          <div>
            <SectionLabel inView={whyInView}>The Convener</SectionLabel>
            <WordReveal inView={whyInView} delay={0.2} text="Why Bhupendra" highlight={["Bhupendra"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.7rem,7vw,2.5rem)":"clamp(2rem,3.5vw,3rem)",fontWeight:900,color:WHITE,marginBottom:"1.6rem"}}/>
            <SlideIn inView={whyInView} delay={0.5} dir="up">
              <p style={{color:"rgba(255,255,255,0.46)",fontSize:"0.9rem",lineHeight:2,marginBottom:"1.1rem"}}>
                Bhupendra Chaudhary has navigated decisions where consequences were immediate and irreversible, often in silence, always by discipline.
              </p>
              <p style={{color:"rgba(255,255,255,0.36)",fontSize:"0.86rem",lineHeight:1.9,marginBottom:"1.1rem"}}>
                He brings pattern recognition, systemic intelligence and accumulated insight into the nervous system and the decision process.
              </p>
              <p style={{color:GOLD,fontSize:"0.84rem",lineHeight:1.9,fontStyle:"italic",borderLeft:`2px solid rgba(201,168,76,0.26)`,paddingLeft:"1.2rem"}}>
                The Private Council is the form through which he convenes, clearly and privately, to surface what a decision will require the individual to carry — without reassurance or dilation.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ══ CONDITION ══ */}
      <section ref={condRef} style={{padding:`${py} ${px}`}}>
        <div style={{maxWidth:"820px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"1.8rem":"3rem"}}>
            <WordReveal inView={condInView} delay={0} text="Condition of Engagement" highlight={["Engagement"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.5rem,6vw,2.2rem)":"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:WHITE}}/>
          </div>
          <SlideIn inView={condInView} delay={0.3} dir="up">
            <div style={{background:"rgba(201,168,76,0.026)",border:`1px solid rgba(201,168,76,0.16)`,borderRadius:"1px",padding:isMobile?"1.8rem 1.3rem":"3rem",position:"relative"}}>
              <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"45px",height:"2px",background:GOLD,opacity:0.42}}/>
              <p style={{color:"#fdfdfd",fontSize:isMobile?"0.88rem":"0.96rem",lineHeight:2,textAlign:"center",marginBottom:"1.6rem"}}>
                A commitment must exist to engage in the convening without the ability to recommend the sessions to others who haven't come.
              </p>
              <p style={{color:"rgba(255,255,255,0.36)",fontSize:"0.86rem",lineHeight:1.9,textAlign:"center",marginBottom:"1.6rem"}}>
                It is a threshold condition that must be met before the Council is formed.
              </p>
              <div style={{borderTop:"1px solid rgba(201,168,76,0.09)",paddingTop:"1.6rem",textAlign:"center"}}>
                <p style={{color:GOLD,fontSize:"0.75rem",letterSpacing:"0.16em",fontStyle:"italic"}}>
                  Hesitation, negotiation, or justification indicates misalignment. In such cases, the Council is not convened.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ══ HOW ENGAGEMENT OCCURS ══ */}
      <section ref={howRef} style={{padding:`${py} ${px}`,background:"rgba(6,6,9,0.8)",borderTop:"1px solid rgba(201,168,76,0.07)"}}>
        <div style={{maxWidth:"820px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:isMobile?"2.2rem":"4rem"}}>
            <SectionLabel inView={howInView}>The Process</SectionLabel>
            <WordReveal inView={howInView} delay={0.2} text="How Engagement Occurs" highlight={["Engagement","Occurs"]}
              style={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.5rem,6vw,2.2rem)":"clamp(2rem,4vw,3.2rem)",fontWeight:900,color:WHITE}}/>
          </div>
          <div>
            {processSteps.map((step,i)=><ProcessStep key={step.num} {...step} index={i} inView={howInView}/>)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section ref={ctaRef} style={{padding:isMobile?"5rem 1.25rem":`10rem ${px}`,textAlign:"center",position:"relative",overflow:"hidden",    backgroundImage: `url(${Whybhupendra})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",}}>
      <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,10,15,0.75), rgba(10,10,15,0.9))",
    zIndex: 0,
  }}
/>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at center,rgba(201,168,76,0.055) 0%,transparent 65%)`}}/>
        {!isMobile&&[480,340].map((sz,i)=>(
          <div key={sz} style={{position:"absolute",top:"50%",left:"50%",width:sz,height:sz,border:`1px solid rgba(201,168,76,${0.045-i*0.015})`,borderRadius:"50%",transform:"translate(-50%,-50%)",animation:`rotSlow ${24+i*11}s linear infinite ${i?"reverse":""}`}}/>
        ))}
        <div style={{position:"relative",zIndex:1}}>
          <SectionLabel inView={ctaInView}>The Final Word</SectionLabel>
          <SlideIn inView={ctaInView} delay={0.2} dir="up" >
            <CharReveal inView={ctaInView} delay={0.3} text="When consequence can no"
              style={{justifyContent:"center",marginBottom:"0.35rem",flexWrap:"wrap"}}
              cStyle={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.6rem,7.5vw,2.8rem)":"clamp(2rem,5vw,4rem)",fontWeight:900,color:WHITE}}/>
            <CharReveal inView={ctaInView} delay={0.8} text="longer be postponed"
              style={{justifyContent:"center",marginBottom:"2rem",flexWrap:"wrap"}}
              cStyle={{fontFamily:"'Playfair Display',serif",fontSize:isMobile?"clamp(1.6rem,7.5vw,2.8rem)":"clamp(2rem,5vw,4rem)",fontWeight:900,color:GOLD,fontStyle:"italic"}}/>
          </SlideIn>
          <SlideIn inView={ctaInView} delay={1.1} dir="up">
        
            <p style={{color:"#fdfdfd",fontSize:isMobile?"0.88rem":"0.95rem",margin:"0 auto 2.5rem",lineHeight:1.9}}>
              If the description of the Private Council meets the condition of your situation, you may submit a Private Alignment Review.
            </p>
          </SlideIn>
          <SlideIn inView={ctaInView} delay={1.4} dir="up">
            <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
              <MagBtn style={{fontSize:isMobile?"0.68rem":"0.8rem",padding:isMobile?"0.72rem 1.1rem":"0.88rem 1.8rem"}}>
                {isMobile?"Submit Review":"Submit Private Alignment Review"}
              </MagBtn>
            </div>
          </SlideIn>
        </div>
      </section>
                <PrivateAlignmentModal
  show={showModal}
  handleClose={() => setShowModal(false)}
/>
     
    </div>
  );
}
// export default PrivateCouncil;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "../asstes/styles/privateCouncil.scss";
// import WhatThisIs from '../asstes/images/private-council/what-this-is.jpg';
// import FinalAuthority from "../asstes/images/private-council/Final-Authority.jpg";
// import NoDelegationLeft from "../asstes/images/private-council/No-Delegation-Left.jpg";
// import IrreversibleConsequence from "../asstes/images/private-council/Irreversible-Consequence.jpg";

// import Optimization from "../asstes/images/private-council/Optimization.jpg";
// import PersonalDevelopment from "../asstes/images/private-council/Personal-Development.jpg";
// import PerformanceEnhancement from "../asstes/images/private-council/Performance-Enhancement.jpg";
// import GuidanceSeeking from "../asstes/images/private-council/Guidance-Seeking.jpg";

// import PrivateAlignmentReview from "../asstes/images/private-council/timeline-1.jpg";
// import ThresholdConfirmation from "../asstes/images/private-council/timeline-2.jpg";
// import ClosedDoorConvening from "../asstes/images/private-council/timeline-3.jpg";
// import Aftermath from "../asstes/images/private-council/timeline-4.jpg";
// import PrivateAlignmentModal from "./PrivateAlignmentModal";

// // ---------------------------------------------------
// const data = [
//     {
//         title: "Final Authority",
//         text: "You carry the decision.",
//         image:FinalAuthority, // replace later
//     },
//     {
//         title: "Irreversible Consequence",
//         text: "The outcome will shape lives, institutions, or trajectories.",
//         image:IrreversibleConsequence,
//     },
//     {
//         title: "No Delegation Left",
//         text: "No board, role, consultant, or framework can absorb what must be carried next.",
//         image:NoDelegationLeft,
//     },
// ];
// const notForItems = [
//     "Optimization",
//     "Personal Development",
//     "Performance Enhancement",
//     "Guidance-Seeking",
//     "Reassurance",
//     "Validation",
//     "Instruction",
// ];
// const items = [
//     {
//         title: "Optimization",
//         image:Optimization,
//     },
//     {
//         title: "Personal Development",
//         image:PersonalDevelopment,
//     },
//     {
//         title: "Performance Enhancement",
//         image:PerformanceEnhancement,
//     },
//     {
//         title: "Guidance-Seeking",
//         image:GuidanceSeeking,
//     },
// ];
// const steps = [
//     {
//         title: "Private Alignment Review",
//         text: "A short written submission establishes gravity and readiness.",
//         image:PrivateAlignmentReview,
//     },
//     {
//         title: "Threshold Confirmation",
//         text: "Contribution is received in advance.",
//         image:ThresholdConfirmation,
//     },
//     {
//         title: "Closed-Door Convening",
//         text: "One individual. One engagement. No fixed duration.",
//         image:ClosedDoorConvening,
//     },
//     {
//         title: "Aftermath",
//         text: "No follow-up program. No advisory relationship. What remains belongs entirely to the individual.",
//         image:Aftermath,
//     },
// ];
// function PrivateCouncil() {
// const [showModal, setShowModal] = useState(false);
//     return (
//         <>
//             <div className="exce-book-page">
//                 <section className="page-banner banner books-list-page banner-two">
//                     <Container>
//                         <nav aria-label="breadcrumb" className="breadcrumb-nav">
//                             <ol className="breadcrumb">
//                                 <li className="breadcrumb-item">
//                                     <Link to="/">Home</Link>
//                                 </li>
//                                 <li className="breadcrumb-item active">
//                                     <Link to="/">Private Council</Link>
//                                 </li>
//                             </ol>
//                         </nav>
//                         <Row>
//                             <Col xs={12} md={8} lg={8} className="me-auto">
//                                 <div className="about-banner-content">
//                                     {/* <span className="sub-title">Bhupendra’s Events</span> */}
//                                     <h1 className="banner-title">Private Council</h1>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </section>

//                 <section className="private-council council-hero pd-common bg-dark-b" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

//                     <Container>
//                         <div className="private-council-content">
//                             <h2 className="title-heading">The Private Council
//                                 <span className="sub-heading">Convened by Bhupendra Chaudhary</span>
//                             </h2>
//                                <div className="btn-toolbar-title mt-4">
//                                 <a href="javascript:void(0);" data-discover="true">
//                                     <button className="btn bh-btn-dark view-all"   onClick={() => setShowModal(true)}>Request Private Alignment Review</button>
//                                 </a>
//                             </div>
//                             {/* <p className="primary-statement mt-4">
//                                 For individuals carrying decisions whose consequence cannot be
//                                 delegated, diluted, or quietly reversed.
//                             </p>

//                             <p className="supporting-copy mt-3">
//                                 Bhupendra Chaudhary is sought when intelligence is already present,
//                                 options are already visible, and yet action remains unresolved
//                                 because of what the decision will demand of the person making it.
//                                 This is not advisory work. It is a private, single engagement where
//                                 avoidance ends and answerability becomes visible.
//                             </p> */}

//                 <PrivateAlignmentModal
//   show={showModal}
//   handleClose={() => setShowModal(false)}
// />
//                         </div>
//                     </Container>
//                 </section>
//   <section className="the-private-what-this pd-common">
//                     <Container>
//                             <div className="sec-title">
//                             <h2 className="title-heading">The Decision You Can’t Avoid</h2>

//                                <p className="supporting-copy mt-2 text-center">
//                                 For individuals carrying decisions whose consequence cannot be
//                                 delegated, diluted, or quietly reversed.
//                             </p>

//                             <p className="supporting-copy mt-2 text-center">
//                                 Bhupendra Chaudhary is sought when intelligence is already present,
//                                 options are already visible, and yet action remains unresolved
//                                 because of what the decision will demand of the person making it.
//                                 This is not advisory work. It is a private, single engagement where
//                                 avoidance ends and answerability becomes visible.
//                             </p>
//                         </div>

//                     </Container>
//                 </section>
//                 <section className="who-seeks-section pd-common">
//                     <Container>

//                         {/* Section Heading */}
//                         <div className="sec-title">
//                             <h2 className="title-heading">Who Seeks This</h2>
//                             <p className="supporting-copy">
//                                 The Private Council is for individuals who hold final authority over consequen;al
//                                 decisions, cannot outsource the cost of deciding, and operate at a level where errors
//                                 cannot be quietly corrected. It is sought across enterprise, leadership, capital, influence,
//                                 ins;tu;onal power, and personal authority when consensus has become a shield and
//                                 delay has become a decision in disguise.
//                             </p>
//                         </div>

//                         <Row>
//                             {data.map((item, index) => (
//                                 <Col md={4} key={index}>
//                                     <div className="who-card">

//                                         {/* Image as background (better scaling) */}
//                                         <div
//                                             className="who-card-image"
//                                             style={{ backgroundImage: `url(${item.image})` }}
//                                         />

//                                         {/* Content */}
//                                         <div className="who-card-content">
//                                             <h5>{item.title}</h5>
//                                             <p>{item.text}</p>
//                                         </div>

//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>

//                     </Container>
//                 </section>

//                 <section className="the-private-what-this pd-common">
//                     <Container>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={6} lg={6}>
//                                 <div className="private-what-this-content">
//                                     <h2 className="title-heading">What This Is</h2>
//                                     <p>The Private Council is the form through which Bhupendra Chaudhary engages. It is
//                                         not a program, not an ins;tu;on independent of him, and not repeatable without him.
//                                         It is a closed-door engagement convened personally when further deferral would
//                                         amount to evasion. The purpose is not to provide direc;on. The purpose is to remove
//                                         avoidance. </p>
//                                 </div>
//                             </Col>
//                             <Col xs={12} md={6} lg={6}>
//                                 <div className="private-council-block">
//                                     <img src={WhatThisIs} alt="What This Is" className="img-fluid" />
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </section>

//                 <section className="what-happens-section">
//                     <Container>

//                         <Row className="align-items-center">

//                             {/* LEFT: Hard Statements */}
//                             <Col md={5}>
//                                 <div className="left-panel">
//                                     <h2 className="section-title">What Happens</h2>

//                                     <ul className="statement-list">
//                                         <li>No advice is given.</li>
//                                         <li>No reassurance is offered.</li>
//                                         <li>No outcomes are promised.</li>
//                                     </ul>
//                                 </div>
//                             </Col>

//                             {/* RIGHT: Deep Content */}
//                             <Col md={7}>
//                                 <div className="right-panel">
//                                     <p className="main-text">
//                                         What becomes visible is what the decision will require you to
//                                         bear, without role protection, narrative insulation, or borrowed
//                                         certainty.
//                                     </p>

//                                     <p className="final-line">
//                                         This is not an experience. It is a confrontation with
//                                         answerability.
//                                     </p>
//                                 </div>
//                             </Col>

//                         </Row>

//                     </Container>
//                 </section>

//                 <section className="what-not-visual pd-common">
//                     <Container>

//                         {/* Heading */}
//                         <div className="text-center header">
//                             <h2>What This Is Not</h2>
//                             <p>
//                                 This is not for optimization, personal development, performance
//                                 enhancement, or guidance-seeking. If reassurance, validation, or
//                                 instruction is required, the Council is not appropriate.
//                             </p>
//                         </div>

//                         {/* Visual Grid */}
//                         <Row className="g-4">
//                             {items.map((item, index) => (
//                                 <Col md={3} sm={6} key={index}>
//                                     <div
//                                         className="visual-card"
//                                         style={{ backgroundImage: `url(${item.image})` }}
//                                     >
//                                         <div className="overlay" />

//                                         <div className="content">
//                                             <span className="cross">✕</span>
//                                             <h5>{item.title}</h5>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>

//                         {/* Bottom Statement */}
//                         <div className="bottom-text">
//                             <p>
//                                 This must be distinguished from mentorship, spiritual teaching,
//                                 consulting, or executive coaching.
//                             </p>
//                             <p className="highlight">
//                                 The Council is exact, narrow, and final.
//                             </p>
//                         </div>

//                     </Container>
//                 </section>
//                 <section className="why-bhupendra pd-common">
//                     <Container>
//                         <Row className="align-items-center">

//                             {/* LEFT IMAGE */}
//                             <Col md={6}>
//                                 <div className="image-block" />
//                             </Col>

//                             {/* RIGHT CONTENT */}
//                             <Col md={6}>
//                                 <div className="content-block">
//                                     <h2 className="section-title">Why Bhupendra</h2>

//                                     <p className="text">
//                                         Bhupendra Chaudhary is sought when decisions carry irreversible consequence
//                                         and cannot be delegated, op;mized, or absorbed by role or system.
//                                     </p>

//                                     <p className="text">
//                                         His work sits beyond advisory, strategy, or coaching. He engages
//                                         only when intelligence is already present and avoidance is the
//                                         remaining obstacle.
//                                     </p>

//                                     <p className="text highlight">
//                                         The Private Council is the form through which he convenes,
//                                         rarely and privately, to surface what a decision will require
//                                         the individual to carry — without reassurance or dilution.
//                                     </p>
//                                 </div>
//                             </Col>

//                         </Row>
//                     </Container>
//                 </section>
//                 <section className="engagement-threshold pd-common">
//                     <div className="overlay" />

//                     <Container>
//                         <div className="threshold-card">

//                             <h2 className="title">Condition of Engagement</h2>

//                             <p className="text">
//                                 Engagement requires a six- to seven-figure contribution, payable in
//                                 advance at the time the convening is scheduled.
//                             </p>

//                             <p className="text">
//                                 This is not a fee for time and not a commercial exchange in the
//                                 ordinary sense. It is a threshold condition that establishes
//                                 readiness before the room is entered.
//                             </p>

//                             <p className="text highlight">
//                                 Hesitation, negotiation, comparison, or justification indicates
//                                 misalignment. In such cases, the Council is not convened.
//                             </p>

//                         </div>
//                     </Container>
//                 </section>
//                 <section className="process-section pd-common">
//                     <Container>
//                         <h2 className="section-title">How Engagement Occurs</h2>
//                         {/* Timeline */}
//                         <div className="timeline">
//                             {steps.map((step, index) => (
//                                 <div
//                                     key={index}
//                                     className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
//                                 >
//                                     <div className="timeline-content">

//                                         {/* Image */}
//                                         <div
//                                             className="timeline-image"
//                                             style={{ backgroundImage: `url(${step.image})` }}
//                                         />

//                                         {/* Text */}
//                                         <div className="timeline-text">
//                                             <h5>{step.title}</h5>
//                                             <p>{step.text}</p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </Container>
//                 </section>

//                 <section
//                     className="closing-cta pd-common">
//                     <div className="overlay" />

//                     <Container>
//                         <div className="cta-content">
//                             <h2 className="cta-title">
//                                 When consequence can no longer be postponed
//                             </h2>

//                             <p className="cta-text">
//                                 If this resonates, submit a private alignment request. If it does
//                                 not, the Council is not appropriate.
//                             </p>

//                             <div className="btn-toolbar-title my-4"><a href="javascript:void(0);" data-discover="true"><button className="btn bh-btn-dark view-all">Submit Private Alignment Review</button></a></div>

//                             <p className="cta-note">
//                                 All submissions are reviewed privately. Silence is also an outcome.
//                             </p>

//                         </div>
//                     </Container>
//                 </section>

//             </div>
//         </>
//     );
// }

// export default PrivateCouncil;
