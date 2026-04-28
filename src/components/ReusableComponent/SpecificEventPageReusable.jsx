import React, { useState } from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEvent, setQuantity } from '../../redux/registerEvent';

// ------------------------------------------

const SpecificEventPageReusable = ({ data, selectedOption, key }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1)

  // Registration Button 
  const handleBookNow = (eventData) => {
    const isPastEvent = selectedOption === "Past" ? true : false

    if (isPastEvent) {
      alert("You cannot register for past events!");
      return;
    }

    dispatch(setQuantity(qty))
    dispatch(setEvent(eventData));
    navigate("/registration");
  };

  return (
    <>
      <div className="col-lg-12" key={key}>
        <div className="bh-event-crad-full">
          <div className="row exce-specific-event-main-card">
            <div className="col-lg-6 col-sm-12 col-md-6 exce-specific-event-outer-img-div">
              <div className="bh-event-image">
                <img src={`${process.env.REACT_APP_API_BASE_URL}${data?.thumbnail}`} alt="Meta Event" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 exce-specific-event-outer-details-div">
              <div className="bh-event-details">
                <div className="bh-event-details-view exce-specific-event-bh-event-details-view">
                  <h2>{data?.name}</h2>
                  <p className="desc">{data?.description}</p>
                  <div className="event-dt">
                    <div className="event-meta-tag exce-specific-event-meta-tag">
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
                      <p className="event-badge">
                        <span className="event-icon">
                          <i className="bi bi-geo-alt"></i>
                        </span>
                        {data?.city ?? "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="event-footer">
                  <h3 className="event-price">
                    <i className={`bi ${data?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"}`}></i>
                    {data?.display_price ?? "0"}{" "}
                    {data?.original_price > 0 && (
                      <span className="event-offer">
                        <i
                          className={`bi ${data?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"
                            }`}
                        ></i>
                        {data?.original_price}
                      </span>
                    )}
                  </h3>
                  <div className="specificEve-tollBar">
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
                      type="buttton"
                      className="btn btn-default"
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
        </div>
      </div>
    </>
  )
}

export default SpecificEventPageReusable
