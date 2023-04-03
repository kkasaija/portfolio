/* eslint-disable no-unused-vars */

import Carousel from 'react-multi-carousel';
import js from '../assets/img/js.svg';
import react from '../assets/img/react-icon.svg';
import redux from '../assets/img/redux-icon.svg';
import ruby from '../assets/img/ruby-icon.svg';
import rails from '../assets/img/rails-icon.png';
import leader from '../assets/img/leader-icon.png';
import colaborate from '../assets/img/colaborate-icon.png';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import '../styles/Skills.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have learned and developed a number of skills over time.
                <br />
                {' '}
                Below are some of the skills I have developed and mastered.
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="javascript-icon" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react-icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux-icon" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={ruby} alt="ruby-icon" />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <img src={rails} alt="rails-icon" />
                  <h5>Ruby on Rails</h5>
                </div>
                <div className="item">
                  <img src={leader} alt="leadership-icon" />
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img src={colaborate} alt="collaboration-icon" />
                  <h5>Collaboration</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="alternative" />
    </section>
  );
};

export default Skills;
