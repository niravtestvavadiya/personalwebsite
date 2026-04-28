import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../asstes/styles/registration.scss";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CryptoJS from "crypto-js";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { setQuantity } from "../redux/registerEvent";

// -----------------------------------------------

function RegistrationPageView() {

  const searchParams = new URLSearchParams(window.location.search);
  const eventCode = searchParams.get("event_code");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const SECRET_KEY = process.env.REACT_APP_SECRET_ENCR_KEY;

  console.log("eventCode", eventCode)

  // const selectedEvent = useSelector((state) => state.registerEvent.selectedEvent);
  const [selectedEvent, setSelectedEvent] = useState(null)

  const selectedQty = useSelector((state) => state.registerEvent.selectedQty);
  const totalCost = selectedEvent?.display_price
    ? (parseFloat(selectedEvent.display_price) * selectedQty).toFixed(2)
    : "0.00";


  const fetchEvent = async () => {
    try {
      const { data } = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}api/events?event_code=${eventCode}`, {
        method: "get"
      }
      ).then((res) => res.json());
      setSelectedEvent(data.events[0])
      dispatch(setQuantity(1));
    } catch (err) {
      console.error("Event fetch error:", err);
      navigate("/");
    }
  };

  useEffect(() => {
    if (eventCode) {
      fetchEvent();
    }
    // eslint-disable-next-line
  }, [eventCode, dispatch, navigate]);

  console.log("selectedEvent", selectedEvent)

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [user_id, setUsersId] = useState("")

  const [formData, setFormData] = useState(
    Array(selectedQty).fill({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country_code: "",
      address: "",
    })
  );

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    if (typeof value === "object" && value !== null) {
      updatedFormData[index] = { ...updatedFormData[index], ...value };
    } else {
      updatedFormData[index] = { ...updatedFormData[index], [field]: value };
    }
    setFormData(updatedFormData);
  };

  // Pay now Btn 
  const handleSubmit = async () => {

    const allFieldsFilled = formData.every(
      (entry) =>
        entry.first_name.trim() !== "" &&
        entry.last_name.trim() !== "" &&
        entry.email.trim() !== "" &&
        entry.phone.trim() !== "" &&
        entry.country_code.trim() !== "" &&
        entry.address.trim() !== ""
    );

    if (!allFieldsFilled) {
      toast.warn("Please fill all the required fields.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    if (!checkbox1 || !checkbox2) {
      toast.warn("Please accept both waivers.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // User Detail From the Local Storage 
    const UserDetail = localStorage.getItem("auth_user");
    if (UserDetail) {
      const decryptedData = CryptoJS.AES.decrypt(UserDetail, SECRET_KEY).toString(CryptoJS.enc.Utf8);
      const parsedData = JSON.parse(decryptedData);
      setUsersId(parsedData?.id);
    }

    // Payload To be Send in API 
    const registrationData = {
      event_id: selectedEvent?.id || "N/A",
      ...(user_id ? { user_id } : {}),
      attendees: formData,
      redirect_url: `${process.env.REACT_APP_BASE_URL}payment-status`
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}api/event/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData)
      });

      const result = await response.json();

      if (response.status === 200) {

        if (result.data) {
          window.location.href = result.data;
        } else {
          toast.error("Something Went wrong", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }

      } else if (response.status === 401) {
        navigate("/sign-in")
        toast.error("Session Expired Please Login Again", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        console.log("result.error", result.error)
        toast.error(result.error, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to register. Please try again later.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

  };

  useEffect(() => {
    if (!eventCode) {
      navigate(-1);
    }
    // eslint-disable-next-line
  }, [navigate]);

  const handleAddMore = () => {
    if (selectedEvent && formData.length < selectedEvent.max_qty) {
      setFormData([
        ...formData,
        {
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          country_code: "",
          address: "",
        },
      ]);
      dispatch(setQuantity(formData.length + 1));
    }
  };

  const handleRemoveForm = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
    dispatch(setQuantity(updatedFormData.length));
  };

  // const [phone, setPhone] = useState("");

  return (
    <>
      {
        selectedEvent ? (<div className="exce-reg-page">
          <section className="page-banner banner registration-banner banner-two ">
            <Container>
              <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Events</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Event Form
                  </li>
                </ol>
              </nav>
              <Row>
                <Col xs={12} md={8} lg={8} className="me-auto exce-about-banner-outer">
                  <div className="about-banner-content">
                    <h1 className="banner-title">Join Us in Making a Difference</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="registration-sec bg-dark-b">
            <div className="container">
              <Row>
                <Col xl={8} lg={8} xs={12}>
                  <div className="registration-accordian">
                    <div className="registration-form">
                      <Accordion defaultActiveKey={['0']} alwaysOpen className="registration-panel">
                        {[...Array(selectedQty)].map((_, index) => (
                          <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                              Adult {index + 1}*
                              {formData.length > selectedEvent?.min_qty && (
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  style={{
                                    marginLeft: "10px",
                                    position: "absolute",
                                    right: "-50px",
                                    top: "-55px",
                                    border: "1px solid white",
                                    fontSize: "15px",
                                    color: "black",
                                    height: "fit-content",
                                    width: "fit-content",
                                    background: "#FFFFFF"
                                  }}
                                  onClick={() => handleRemoveForm(index)}
                                >
                                  &#x2715;
                                </Button>
                              )}
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="layout-of-form">
                                <div className="row">
                                  <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        onChange={(e) =>
                                          handleInputChange(index, "first_name", e.target.value)
                                        } />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        onChange={(e) =>
                                          handleInputChange(index, "last_name", e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="you@company.com"
                                        onChange={(e) =>
                                          handleInputChange(index, "email", e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-sm-12 col-md-6">
                                    <div className="form-group">
                                      <PhoneInput
                                        country={"in"}
                                        inputClassName="form-control"
                                        placeholder="Enter Mobile Number"
                                        onChange={(phone, country) => {
                                          const formattedPhone = phone?.replace(`${country?.dialCode}`, "").trim();
                                          const countryCode = `+${country?.dialCode}`;
                                          handleInputChange(index, null, { phone: formattedPhone, country_code: countryCode });
                                        }}

                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-sm-12 col-md-12">
                                    <div className="form-group mb-0">
                                      <textarea
                                        className="form-control"
                                        placeholder="Start Typing your Address here..."
                                        onChange={(e) =>
                                          handleInputChange(index, "address", e.target.value)
                                        }
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                      <div className="add-more-btn-div">
                        {
                          selectedEvent && formData.length !== selectedEvent.max_qty ?
                            (
                              <button className="add-more-form-event-btn w-fit" onClick={handleAddMore}>
                                + Add more
                              </button>
                            ) : ""
                        }
                      </div>
                      <div className="btn-continue">
                        <button className="btn btn-default bh-btn-white w-100" onClick={handleSubmit}>
                          Pay Now
                        </button>
                      </div>
                      <div className="decleration-msg">
                        <p>
                          <input type="checkbox" className="custom-checkbox" onChange={() => setCheckbox1(!checkbox1)} />
                          <span>Please accept this waiver -</span> I am
                          participating in the event with my own free will. I
                          understand that this is a self-development program and
                          there is no guarantee of a specific outcome. The
                          contribution is to cover the costs of the event, such as
                          venue, logistics, seating, literature etc. The
                          contribution is for single use and non-refundable.{" "}
                        </p>
                        <p>
                          <input type="checkbox" className="custom-checkbox" onChange={() => setCheckbox2(!checkbox2)} />
                          <span>Please accept this waiver -</span> I am
                          participating in the event with my own free will. I
                          understand that this is a self-development program and
                          there is no guarantee of a specific outcome. The
                          contribution is to cover the costs of the event, such as
                          venue, logistics, seating, literature etc. The
                          contribution is for single use and non-refundable.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} xs={12} className="exce-reg-card-outer">
                  <div className="registration-card">
                    <div className="reg-header">
                      <h2>{selectedEvent?.name}</h2>
                      <span>Virtual Ticket</span>
                    </div>
                    <ul className="reg-details-view">
                      <li>
                        <span className="reg-label">Timing</span>
                        <span className="reg-label-vl">
                          {selectedEvent?.dates?.length > 0 ? (
                            selectedEvent.category === "Chaitanya Yog Kriya" ? (
                              selectedEvent.dates.slice(0, 3).map((ele, index) => (
                                <span className="reg-label-vl" key={index}>
                                  Day {index + 1}:{" "}
                                  {moment(ele.start_time, "HH:mm:ss").format("h:mm A")} to{" "}
                                  {moment(ele.end_time, "HH:mm:ss").format("h:mm A")}
                                  {index !== Math.min(selectedEvent.dates.length, 3) - 1 && ", "}
                                </span>
                              ))
                            ) : (
                              <span className="reg-label-vl">
                                {moment(selectedEvent.dates[0].start_time, "HH:mm:ss").format("h:mm A")} to{" "}
                                {moment(selectedEvent.dates[0].end_time, "HH:mm:ss").format("h:mm A")}
                              </span>
                            )
                          ) : (
                            <span>No timings available</span>
                          )}
                        </span>
                      </li>
                      <li>
                        <span className="reg-label">Location</span>
                        <span className="reg-label-vl">{selectedEvent?.address}</span>
                      </li>
                      <li>
                        <span className="reg-label">Date</span>
                        <span className="reg-label-vl">
                          {moment(selectedEvent?.start_date).isSame(selectedEvent?.end_date, 'day')
                            ? moment(selectedEvent?.start_date).format("Do MMMM")
                            : `${moment(selectedEvent?.start_date).format("Do MMMM")} - ${moment(selectedEvent?.end_date).format("Do MMMM")}`
                          }
                        </span>
                      </li>
                    </ul>
                    <div className="reg-footer">
                      <span>
                        <i className={`bi ${selectedEvent?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"}`}></i>{selectedEvent?.display_price} X {selectedQty}</span>
                      <div className="total-cost">
                        <h3>Total Cost:</h3>
                        <h3>{totalCost}  <i className={`bi ${selectedEvent?.country === "India" ? "bi-currency-rupee" : "bi-currency-dollar"}`}></i></h3>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <ToastContainer />
        </div>) : (
          <div className="min-vh-100 bg-black d-flex justify-content-center align-items-center">
            <p className="text-white ">No Data Found</p>
          </div>
        )
      }
    </>
  );
}

export default RegistrationPageView;
