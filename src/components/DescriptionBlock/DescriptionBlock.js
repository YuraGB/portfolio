/**
 * topList
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, {useContext, useState} from 'react';

import classes from "./Description.module.css";
import Context from "../../Context/context";
import Auxx from "../../hoc/Auxx/Auxx";

/**
 * DescriptionBlock
 *
 * @param {string}type
 * @param {boolean} active
 * @return {*}
 * @constructor
 */
const DescriptionBlock = ({type, active}) => {
    const {
        stateBooks
    } = useContext(Context);

    const [activeCategory, setActive] = useState(null);

    let topList = null;
    let categoryData = [];
    let setDescriptionData = null;

    if (active && activeCategory) {
        setDescriptionData = (
        <Auxx>
            <div className={classes.Description}>
                <div className="description-img">
                    <img src={activeCategory.imgLing} alt={activeCategory.title}/>
                </div>
                <div className="description-text">
                    <p className="title">{activeCategory.title}</p>
                    <p className="text">{activeCategory.description}</p>
                </div>
            </div>
        </Auxx>
        );
    }

    if (type) {
        switch (type) {
            case 'reading' :
                categoryData = stateBooks;
                break;
            default :
                categoryData = [];
        }

        if (categoryData && categoryData.length ) {
            topList = categoryData.map(el => <li
                key={el.id}
                onMouseEnter={() => {
                    setActive(el)
                }}
            >
                {el.title}
            </li>);
        }
    }

    return (
        <section className={classes.Description}>
            {topList &&
                <ul>
                    {topList}
                </ul>
            }
            <section>
                {setDescriptionData}
            </section>
        </section>
    )
};

export default DescriptionBlock;