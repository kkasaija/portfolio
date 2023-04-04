import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/SourceCode.css';

const SourceCode = ({ title, sourceLink }) => (
  <Col size={12} sm={6} md={4}>
    <a href={sourceLink} target="_blank" rel="noreferrer" className="sourceLink">
      <div className="project-source code">
        <div className="code-header">
          <h4>{title}</h4>
          <p>
            Click Me to visit my source code
          </p>
        </div>
      </div>
    </a>
  </Col>
);

// Prop validation
SourceCode.propTypes = {
  title: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export default SourceCode;
