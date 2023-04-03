import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import '../styles/Contact.css';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs.sendForm('service_ifapyqn', 'template_kv3ehwh', form.current, 'U-9NlPdgqq0SD8v-Q')
      .then((result) => {
        console.log(result.text);
        setButtonText('Send');
        setFormDetails(formInitialDetails);
        setFormDetails(formInitialDetails);
        setStatus({ succes: true, message: 'Message sent successfully' });
      }, (error) => {
        console.log(error.text);
        setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      });
    // setButtonText('Send');
    // const result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code === 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully' });
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt="Contact Me" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <p>
                    If you have an application you are interested in developing,
                    a feature that you need built or a project that needs coding.
                    I would love to help.
                  </p>
                  <br />
                  <form onSubmit={handleSubmit} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          name="firstName"
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          name="lastName"
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          name="email"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          name="phone"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        />
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                      status.message
                      && (
                      <Col>
                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                      </Col>
                      )
                    }
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
