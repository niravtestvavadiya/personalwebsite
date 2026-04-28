import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "../asstes/styles/contactUsPage.scss"
import login_banner from "../asstes/images/Contact-Us-Img.jpg"

// -------------------------------------------

const ContactUsPage = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.number().required('Phone Number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log("Form Data: ", values)
    },
  })

  return (
    <>
      <div className='exce-contactUs-page'>
        <div className='exce-contactUs-page__inner'>
          <div className='contact-upper-section'>
            <div className='upper-section-left-img-div'>
              <img src={login_banner} alt="Contact img" />
            </div>
            <div className='upper-section-right-div'>
              <div className='upper-section-right-div__inner'>
                <div className='contact-form-header-div'>
                  <p className='contact-form-heading'>
                    Tell us how we can help and we'll get in touch shortly.
                  </p>
                  <p className='contact-form-desc'>Enter your details to continue</p>
                </div>

                <form onSubmit={formik.handleSubmit} className='contact-form-div'>
                  <input
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className='error'>{formik.errors.firstName}</p>
                  )}

                  <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className='error'>{formik.errors.lastName}</p>
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className='error'>{formik.errors.email}</p>
                  )}

                  <input
                    type="text"
                    name="phone"
                    placeholder='Phone Number'
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className='error'>{formik.errors.phone}</p>
                  )}

                  <textarea
                    name="message"
                    cols={8}
                    rows={4}
                    placeholder='Message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className='error'>{formik.errors.message}</p>
                  )}

                  <div className='contact-form-submit-btn'>
                    <button type='submit'>Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <div className='contact-lower-section'>
            <h1>Let's Connect</h1>
            <div className='contact-box-outer-box'>
              <div className='contact-box-div'>
                <p className='contact-box-heading'>
                  Location
                  <span className='contact-box-line'></span>
                </p>
                <p className='contact-box-desc'>
                  One Embarcadero Center, Suite 500 San Francisco, CA - 94111
                </p>
              </div>
              <div className='contact-box-div'>
                <p className='contact-box-heading'>
                  Email Address
                  <span className='contact-box-line'></span>
                </p>
                <p className='contact-box-desc'>
                 contact@bhupendrachaudhary.com 
                 council@bhupendrachaudhary.com
                </p>
              </div>
              <div className='contact-box-div'>
                <p className='contact-box-heading'>
                  Contact Number
                  <span className='contact-box-line'></span>
                </p>
                <p className='contact-box-desc'>
                  +1 4082358011
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsPage
