import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../asstes/styles/privateAlignmentModal.scss";

const PrivateAlignmentModal = ({ show, handleClose }) => {
  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    if (show) {
      setErrors({});
      setFormData(initialForm);
      setStatus({ type: "", message: "" });
    }
  }, [show]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.terms) newErrors.terms = "You must accept Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const body = new URLSearchParams({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbxKCrX5xUJLFKGE0BXKHrcD0N0guXmfbi_wVmf6ae8ryE3RKtsq8o3FASN9yi-DLtR8Nw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        },
      );

      setStatus({
        type: "success",
        message: "Your request has been submitted successfully.",
      });

      setFormData(initialForm);

      // setTimeout(() => handleClose(), 1500);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   console.log("Private Alignment Request:", formData);
  //   handleClose();
  // };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Request Private Alignment Review</Modal.Title>
      </Modal.Header>

      <Modal.Body className="private-alignment-modal">
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              className="custom-input"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              isInvalid={!!errors.fullName}
            />
            <div className="error-text">{errors.fullName}</div>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="custom-input"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <div className="error-text">{errors.email}</div>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="custom-input"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <div className="error-text">{errors.phone}</div>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>City</Form.Label>
            <Form.Control
              className="custom-input"
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />
            <div className="error-text">{errors.city}</div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="terms"
              label="I agree that Terms & Conditions apply"
              checked={formData.terms}
              onChange={handleChange}
            />
            <div className="error-text">{errors.terms}</div>
          </Form.Group>

          <Button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Private Alignment Review"}
          </Button>
        </Form>

   {status.message && (
  <div
    className={`form-status ${
      status.type === "success" ? "success-text" : "error-text"
    }`}
  >
    {status.message}
  </div>
)}
      </Modal.Body>
    </Modal>
  );
};

export default PrivateAlignmentModal;
