import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './newsletter.module.scss';

function Newsletter({ newsletterItems }) {
    return (
        <div className={`${classes.bg}`}>
            
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
