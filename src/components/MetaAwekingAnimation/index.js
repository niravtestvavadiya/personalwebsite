import { useEffect, useRef } from "react";
// ----------------------------------------------------------

const MetaAwakening = ({ title, desc, className, id, img, showing, setProgress, resize }) => {
  const myRef = useRef(null);

  const setProgressHandler = () => {

    const progressRef = myRef?.current?.getBoundingClientRect();

    const progress = (progressRef?.top * 100) / (progressRef?.height);
    setProgress(progressRef?.top === 60 ? 100 : 100 - Math.ceil(progress));

  }

  useEffect(() => {
    if (myRef?.current) {

      window.addEventListener('scroll', setProgressHandler);
    }
    // eslint-disable-next-line
  }, [myRef])

  return (
    <section ref={myRef} className={`bh-meta-awakening ${className} ${resize && "resize"}`} >
      <div className="awakening-inner">
        <div
          className="bgimage"
          style={{
            backgroundImage: `url("${img}")`
          }}
        />
        <div className="position-sticky-awe">
          <div className="awakening-container" >
            <div className="meta-awakening-desc">
              <p>
                {desc}
              </p>
            </div>
            <div className="text-rail-wrapper">
              <div className="text-rail-track" id="animate" >
                <div id={id} className="rail-track" >
                  <h2 className="font-180">{title}-{title}-{title}-</h2>
                  <h2 className="font-180">{title}-{title}-{title}-</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showing === 1}
      </div>
    </section >
  )
}

export default MetaAwakening;






