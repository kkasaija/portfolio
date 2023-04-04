/* eslint-disable react/jsx-props-no-spreading */

import {
  Container, Row, Col, Tab, Nav,
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { v4 as uuidv4 } from 'uuid';
import SourceCode from './SourceCode';
import ProjectCard from './ProjectCard';
import mealMaster from '../assets/img/meal-master-icon.png';
import expenseTracker from '../assets/img/expense_tracker.png';
import todoList from '../assets/img/todo-list.png';
import calcBasic from '../assets/img/calc-icon.png';
import spaceX from '../assets/img/spaceX.png';
import movieSite from '../assets/img/movies.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import '../styles/Project.css';

const Projects = () => {
  const projects = [
    {
      title: 'meal-master',
      description: `A web application for ordering food. Key features are Authentication and Authorization.
      Users can select foods by theme, place orders, view their order history, and add or delete items (for admins only). 
      The app includes a form for adding new items and a list of orders with food name, date, and city. Full API documentation is provided.`,
      imgUrl: mealMaster,
      demoLink: 'https://master-meal.netlify.app/',
    },
    {
      title: 'movies site',
      description: `This project is about building a web application based on an external API. 
      The web app has 2 user interfaces: the home page and the comments popup.
      The home page shows a list of items that you can like. Each item has a "Comments" button that you can use to open the comments popup.
      The comments popup shows details about an item and allows users to leave comments.`,
      imgUrl: movieSite,
      demoLink: 'https://kasaija-kenneth.github.io/JavaScript-Capstone-Group-Project/dist/',
    },
    {
      title: 'todo-list',
      description: `A simple to-do list App for performing complete CRUD operations.
      Built with React and Redux`,
      imgUrl: todoList,
      demoLink: 'https://kasaija-kenneth.github.io/To-Do-List/dist/',
    },
    {
      title: 'expense-tracker',
      description: `A mobile, web based application where you can manage your budget:
      allows one to register and log in, introduce new transactions associated with
      a category, and see the money spent on each category`,
      imgUrl: expenseTracker,
      demoLink: 'https://expense-meter.onrender.com/',
    },
    {
      title: 'Basic Calculator',
      description: `Performs: Addition, Subtraction, Division, Multiplication, Modulo (Remainder).
      Developed using React and Deployed using Netlify`,
      imgUrl: calcBasic,
      demoLink: 'https://voluble-fairy-0cefaa.netlify.app/',
    },
    {
      title: 'The space traveller\'s hub',
      description: `This website lets you view Rocket varieties available at SpaceX.
      With an option for rocket reservation and Space mission subscription.
      Site developed in React-Redux`,
      imgUrl: spaceX,
      demoLink: 'https://capable-madeleine-7613ec.netlify.app/',
    },
  ];

  const sourceLink = [
    {
      title: 'meal-master',
      sourceLink: 'https://github.com/Kasaija-Kenneth/meal-master-frontend',
    },
    {
      title: 'movies site',
      sourceLink: 'https://github.com/Kasaija-Kenneth/JavaScript-Capstone-Group-Project/',
    },
    {
      title: 'todo-list',
      sourceLink: 'https://github.com/Kasaija-Kenneth/To-Do-List/',
    },
    {
      title: 'expense-tracker',
      sourceLink: 'https://github.com/Kasaija-Kenneth/expense_meter/',
    },
    {
      title: 'Basic Calculator',
      sourceLink: 'https://github.com/Kasaija-Kenneth/MathMagiciansApp/',
    },
    {
      title: 'The space traveller\'s hub',
      sourceLink: 'https://github.com/Kasaija-Kenneth/space-travellers-hub/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Below is a list of some of the projects I have worked on recently.
                    They range from simple websites to complex web applications.
                    Feel free to check them out. If you like what you see,
                    Kindly checkout my Github profile. and do not forget to leave a star.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Live Demo-links</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Source code-links</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                          projects.map((project) => (
                            <ProjectCard
                              key={uuidv4()}
                              {...project}
                            />
                          ))
                        }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            sourceLink.map((project) => (
                              <SourceCode
                                key={uuidv4()}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="representation" />
    </section>
  );
};

export default Projects;
