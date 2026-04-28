import { useState } from "react";
import MetaAwakening from "../MetaAwekingAnimation";
import MetaAwekingImg from "../../asstes/images/backgroundimages/Home_animation_img1.jpg";
import ChaitanyaYogKriya from "../../asstes/images/backgroundimages/Home_animation_img2.jpg";
import BhupendraQauntumForce from "../../asstes/images/backgroundimages/Home_animation_img3.jpg";
import "../../asstes/styles/home.scss";
import { Link } from "react-router-dom";

// -------------------------------------------------------

const MetaAwakeningContainer = () => {

  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  return (
    <div className="Awakening-container exce-home-page-animation-aweking">
      <div className="Awakening-section">
        <Link to={"/meta-awakening"} className="h-100 d-block"  >
          <MetaAwakening
            id={'first-MetaAwaking'}
            desc={'Through Meta Awakening, you uncover your true needs, align with your soul’s purpose, and gain clarity on where you’re meant to go and what you’re meant to become'}
            title={'The Meta Awakening'}
            img={MetaAwekingImg}
            showing={1}
            setProgress={setProgress1}
          />
        </Link>
      </div>
      <div className="Awakening-section">
        <Link to={"/chaitanya-yog-kriya"} className="h-100 d-block" >
          <MetaAwakening
            id={'first-MetaAwaking'}
            desc={'Chaitanya Yog Kriya is a 3-day immersive journey that leads you to a profound realization of your real self by bringing the body, brain, and being into deep alignment. '}
            title={'Chaitanya Yog Kriya'}
            img={ChaitanyaYogKriya}
            setProgress={setProgress2}
          />
        </Link>
      </div>
      <div className="Awakening-section resize">
        <Link to={"/quantumforce"} className="h-100 d-block" >
          <MetaAwakening
            id={'first-MetaAwaking'}
            desc={'Bhupendraz QuantumForce is a powerful system that aligns your awareness, energy, and intelligence to enhance leadership and transform workplace dynamics.'}
            title={'Bhupendraz Quantum Force'}
            img={BhupendraQauntumForce}
            setProgress={setProgress3}
            resize={true}
          />
        </Link>
      </div>
      <div className="event-progress-container" >
        <div className="event-progress-sticky" >
          <div className="event-progress-div" >
            <span style={{ width: `${progress1}%` }} className="event-progress-bar" ></span>
          </div>
          <div className="event-progress-div" >
            <span style={{ width: `${progress1 < 100 ? 0 : progress2}%` }} className="event-progress-bar" ></span>
          </div>
          <div className="event-progress-div" >
            <span style={{ width: `${progress2 < 100 ? 0 : progress3}%` }} className="event-progress-bar" ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaAwakeningContainer;