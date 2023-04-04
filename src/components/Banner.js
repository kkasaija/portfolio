/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/ken1.png';
import '../styles/Banner.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Tel: +256(0)777-311748', 'Front-end', 'Back-end', 'UI/UX Designer', 'Ruby', 'Ruby on Rails'];
  const period = 2000;

  /* eslint-disable max-len */
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  /* eslint-enable max-len */

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {'Hi! I\'m Kasaija Kenneth'}
                    {' '}
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Front-end", "Back-end", "UI/UX Designer", "Ruby", "Ruby on Rails" ]'
                    >
                      <span
                        className="wrap"
                      >
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p>
                    I’m a software developer! I can help you build a product,
                    feature or website Look through some of my work and experience!
                    If you like what you see and have a project you need coded,
                    don’t hestiate to contact me
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
