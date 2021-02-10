import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import classes from './ScrollToTop.module.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 500) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div className={classes.ScrollToTop} onClick={scrollToTop}>
            <ArrowUpwardIcon className={classes.ArrowUpwardIcon}/>
        </div>
    );
};

export default ScrollToTop;