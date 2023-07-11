import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ServiceItem from '../services/service-item';
import classes from '../services/service.module.scss';
import SwiperComps, { Slide } from '../swiper';

function HomePageServices({ services, serviceSectionItems, settings }) {
   
}

HomePageServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HomePageServices;
