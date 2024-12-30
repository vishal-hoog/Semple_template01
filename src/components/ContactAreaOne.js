import React, { useState } from 'react';
import axios from 'axios';

const ContactAreaOne = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form default behavior

    // Post data using axios
    axios.post('http://localhost:5000/formData', {
      name,
      email,
      phone,
      subject,
      message
    })
    .then((res) => {
      alert(`${name} your data has been submited successfull'`)
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    })
    .catch((err) => {
      console.error(err); // Handle the error
    });
  
  };
  

  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="assets/img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="assets/img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img className="w-100" src="assets/img/bg/4.png" alt="img" />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <p className="content">
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <form className="mt-4" onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name='name'
                            value={name}
                            placeholder="Your Name"
                            onChange={(e) => {setName(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="email"
                            name='email'
                            value={email}
                            placeholder="Your Email"
                            onChange={(e) => {setEmail(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name='phone'
                            value={phone}
                            placeholder="Your Phone"
                            onChange={(e) => {setPhone(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            name= "subject"
                            value={subject}
                            placeholder="Your Subject"
                            onChange={(e) => {setSubject(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea
                            placeholder="Message"
                            value={message}
                            name='message'
                            onChange={(e) => {setMessage(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-black mt-0 w-100 border-radius-5"
                        >
                          Submit now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
