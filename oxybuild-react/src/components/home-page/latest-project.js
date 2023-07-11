import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectSlider from '../projects/project-slider';
import classes from './latest-project.module.scss';
import SwiperComps, { Slide } from '../swiper';

function LatestProject({ projects, projectSectionItems, settings }) {
    
}

LatestProject.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default LatestProject;
