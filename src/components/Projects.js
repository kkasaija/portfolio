/* eslint-disable react/jsx-props-no-spreading */

import {
  Container, Row, Col, Tab, Nav,
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './ProjectCard';
import mealMaster from '../assets/img/meal-master-icon.png';
import projImg2 from '../assets/img/project-img2.png';
import todoList from '../assets/img/todo-list.png';
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
    },
    {
      title: 'tasty-trek',
      description: `An app to keep track of all your recipes, ingredients,
      and inventory. It will allow you to save ingredients, keep track of what
      you have, create recipes, and generate a shopping list based on what you
      have and what you are missing from a recipe`,
      imgUrl: projImg2,
    },
    {
      title: 'todo-list',
      description: `A simple to-do list App for performing complete CRUD operations.
      Built with React and Redux`,
      imgUrl: todoList,
    },
    {
      title: 'expense-tracker',
      description: `A mobile, web based application where you can manage your budget:
      allows one to register and log in, introduce new transactions associated with
      a category, and see the money spent on each category`,
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam,
                          quod neque provident velit, rem explicabo excepturi
                          id illo molestiae blanditiis,eligendi dicta officiis asperiores
                          delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Cumque quam, quod neque provident velit,
                          rem explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                        </p>
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
