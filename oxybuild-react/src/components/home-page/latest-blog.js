import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import LatestBlogItem from '../blogs/latest-blog-item';
import classes from './latest-blog.module.scss';
import SwiperComps, { Slide } from '../swiper';

function LatestBlog({ blogs, blogSectionItems, settings }) {
    
}

LatestBlog.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default LatestBlog;
