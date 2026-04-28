import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../asstes/styles/paymentStatus.scss"
import confirmIcon from "../asstes/images/confrimIcon.png"
import cancelIcon from "../asstes/images/cancelIcon.png"

const PaymentStatus = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [transactionData, setTransactionData] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");
    const paymentStatus = queryParams.get("payment_status");
    const paymentRequestId = queryParams.get("payment_request_id");
    const eventBookingId = queryParams.get("event_booking_id");

    if (!paymentId || !paymentStatus || !paymentRequestId || !eventBookingId) {
      navigate("/");
    } else {
      const requestData = {
        payment_id: paymentId,
        payment_status: paymentStatus,
        payment_request_id: paymentRequestId,
        event_booking_id: parseInt(eventBookingId),
      };

      setTransactionData(requestData);

      fetch(`${process.env.REACT_APP_API_BASE_URL}api/event/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.status === 500) {
            setIsError(true)
          }
          return response.json()
        })
        .then((data) => {
          setBookingResponse(data);
        })
        .catch((error) => {
          console.error("Error confirming booking:", error);
          setBookingResponse({ has_error: true, message: "Failed to confirm booking." });
        })
        .finally(() => {
          setLoading(false);
        });

    }
  }, [location, navigate]);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">Loading... <br /> Please do not refresh the Page</div>;
  }

  return (
    <>
      <div className="exce-payment-page">
        <div className="main-box">
          <div className="banner">
          </div>
          <div className="reg-box">
            <div className="status-box">
              <div className="status-box__inner">
                <div className="status-box-left-icon">
                  {
                    transactionData.payment_status === "Credit" & !isError ? <img src={confirmIcon} alt="Confirm Tick" /> : <img src={cancelIcon} alt="Confirm Tick" />
                  }
                </div>
                <div className="status-box-right-section">
                  <p className={`status-box-title ${transactionData.payment_status === "Credit" && !isError ? "status-success" : "status-failed"
                    }`}>
                    {transactionData.payment_status === "Credit" && !isError ? " Booking Confirmed" : "Payment Failed"}
                  </p>
                  <p className="status-box-desc">
                    {transactionData.payment_status === "Credit" & !isError ? " Your ticket are successfully booked. Here's looking forward to an awesome time!" : "Something went Wrong"}

                  </p>
                </div>
              </div>
            </div>
            {bookingResponse && !isError ? (
              bookingResponse?.data?.attendees.map((ele, index) => {
                return (
                  <>
                    <div className="qr-detail-box">
                      <div className="qr-detail-box__inner">
                        <p className="qr-detail-event-title">
                          {bookingResponse?.data?.name}
                        </p>
                        <img src={ele?.qr_code} alt="QR Code" className="w-25" />
                      </div>
                    </div>
                    <div className="events-detail-box">
                      <div className="events-detail-box__inner">
                        <div className="event-detail-date-time-div">
                          <div className="event-detail-date-div">
                            <p className="event-detail-heading">DATE</p>
                            <p className="event-detail-desc">Tuesday,14 Jan,25</p>
                          </div>
                          <div className="event-detail-time-div">
                            <p className="event-detail-heading">TIME</p>
                            <p className="event-detail-desc">09:00 - 11:00 Am</p>
                          </div>
                        </div>
                        <div className="event-detail-venue-outer">
                          <div className="event-detail-venue-div">
                            <p className="event-detail-heading">VENUE</p>
                            <p className="event-detail-desc">Via Nova 42, Urbs Antiqua, Ager Romanus, 12345</p>
                          </div>
                        </div>
                      </div>
                      <div className="event-detail-btn">
                        <Link to={"/"}>
                          <button>Continue</button>
                        </Link>
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <div className="event-detail-btn outer-btn-continue">
                <Link to={"/"}>
                  <button>Continue</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatus;