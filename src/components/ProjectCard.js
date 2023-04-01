import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imgUrl }) => (
  <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl} alt="representation" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </Col>
);

// Prop validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
