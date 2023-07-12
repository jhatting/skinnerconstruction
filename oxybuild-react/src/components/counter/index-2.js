import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import classes from './counter.module.scss';

function CounterTwo() {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    
}

export default CounterTwo;
