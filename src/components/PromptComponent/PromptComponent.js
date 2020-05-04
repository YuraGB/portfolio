import React, {useContext, useRef, useEffect} from 'react';

import Context from "../../Context/context";
import classes from './Prompt.module.css';
import {CSSTransition} from "react-transition-group";

const PromptComponent = React.memo(() => {
    const {prompt} = useContext(Context);
    const ref = useRef(null);
    let component = null;

    useEffect(() => {
        if (prompt.show) {
            if(ref.current.offsetWidth > prompt.coordinates.w) {
                ref.current.style.transform = `translateX(-${ref.current.offsetWidth + 10}px)`;
            } else {
                ref.current.style.transform = `translateX(10px)`;
            }

            ref.current.style.width = ref.current.offsetWidth;
        }
    }, [prompt.show]);

    if (prompt.show) {
        component = (
            <span
                ref={ref}
                className={classes.Prompt}
                  style={{
                    position: "fixed",
                    top: prompt.coordinates.y,
                    left: prompt.coordinates.x
            }}>
                {prompt.text}
            </span>);
    }
    return (

        <CSSTransition
            in={prompt.show}
            classNames='fade'
            timeout={300}
        ><span>
         {component}
        </span>
        </CSSTransition>
    )
});

export default PromptComponent;