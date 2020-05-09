/**
 * topList
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, {useContext} from 'react';

import classes from "./Description.module.css";
import Context from "../../Context/context";
import Auxx from "../../hoc/Auxx/Auxx";

/**
 *
 * @param {string} type
 * @param {boolean} active
 * @param {function} setActiveCategory
 * @param {object} activeCategory
 * @return {*}
 * @constructor
 */
const DescriptionBlock = ({
                              type,
                              active,
                              setActiveCategory,
                              activeCategory
                          }) => {
    const {
        stateBooks
    } = useContext(Context);

    let topList = null;
    let categoryData = [];
    let setDescriptionData = null;

    if (active && activeCategory) {
        setDescriptionData = (
        <Auxx>
            <div className={classes.DescriptionImg}>
                <img src={activeCategory.imgLing} alt={activeCategory.title}/>
            </div>
            <div className={classes.descriptionText}>
                <p className={classes.title}>{activeCategory.title}</p>
                <p className="text">{activeCategory.description}</p>
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
                    setActiveCategory(el)
                }}
            >
                {el.title}
            </li>);
        }
    }

    return (
        <section className={classes.description}>
            {topList &&
                <ul>
                    {topList}
                </ul>
            }
            {setDescriptionData}
        </section>
    )
};

export default DescriptionBlock;