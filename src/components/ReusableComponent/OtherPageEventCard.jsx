import moment from "moment";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setEvent, setQuantity } from '../../redux/registerEvent';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------

const OtherPageEventCard = ({ data, selectedOption }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1)

  const handleBookNow = (eventData) => {

    if (eventData?.country === "United States" && eventData?.external_redirection_url) {
      window.open(`${eventData?.external_redirection_url}`);
    }
    else {
      const isPastEvent = selectedOption === "Past"

      if (isPastEvent) {
        return;
      }
      dispatch(setQuantity(qty))
      dispatch(setEvent(eventData));
      navigate(`/registration?event_code=${eventData.code}`);
    }
  };

  useEffect(() => {
    setQty(data?.min_qty || 1)
  }, [data])

  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12 exce-all-event-main-div" >
        <div className="bh-event-card">
          <div className="bh-event-image">
            <img className="other-events-card-bg-img" src={`${process.env.REACT_APP_API_BASE_URL}${data?.thumbnail}`} alt="Event" />
            <div className="event-dt">
              <div className="event-meta-tag exce-all-event-meta-tag">
                {
                  data?.category === "Chaitanya Yog Kriya" ? (
                    data?.dates?.slice(0, 3).map((date, index) => (
                      <div key={index}>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          {moment(date?.date).format("Do MMMM YYYY")}
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          {moment(date?.start_time ?? "", "HH:mm:ss").format("h:mm")} -
                          {moment(date?.end_time ?? "", "HH:mm:ss").format("h:mm A")}
                        </p>
                      </div>
                    ))
                  ) : (
                    <>
                      <div>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-calendar-event"></i>
                          </span>
                          {moment(data?.start_date).format("Do MMMM YYYY")}
                        </p>
                        <p className="event-badge">
                          <span className="event-icon">
                            <i className="bi bi-stopwatch"></i>
                          </span>
                          {moment(data?.dates?.[0]?.start_time ?? "", "HH:mm:ss").format("h:mm")} -
                          {moment(data?.dates?.[0]?.end_time ?? "", "HH:mm:ss").format("h:mm A")}
                        </p>
                      </div>
                    </>
                  )}

              </div>
            </div>
          </div>
          <div className="event-body-content">
            <h2 className="event-title">{data?.name}  <p className="event-badge">
              <span className="event-icon">
                <i className="bi bi-geo-alt"></i>
              </span>
              {data?.city ?? "N/A"}
            </p></h2>
            {data?.main_speaker && <p className="tagline-event">
              Speaker : {data?.main_speaker}
            </p>}

            <div className="event-footer exce-all-event-footer-price">
              <h3 className="event-price exce-all-event-price">
                <span>
                  <i className={`bi ${data?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"}`}></i>
                  {data?.display_price ?? "0"}{" "}
                </span>
                {data?.original_price && data.original_price > data?.display_price && (
                  <span className="event-offer">
                    <i
                      className={`bi ${data?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"
                        }`}
                    ></i>
                    {data?.original_price}
                  </span>
                )}
              </h3>
              <div className="exce-all-event-page-btn-toolbar">
                <div className="quantity-container">
                  <span className="label-qty">Qty :</span>
                  <div className="custom-dropdown">
                    <select
                      id="quantity"
                      name="quantity"
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                    >
                      {Array.from(
                        { length: (data?.max_qty || 1) - (data?.min_qty || 1) + 1 },
                        (_, i) => (
                          <option key={i + (data?.min_qty || 1)} value={i + (data?.min_qty || 1)}>
                            {i + (data?.min_qty || 1)}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleBookNow(data)}
                  disabled={selectedOption === "Past"}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtherPageEventCard
