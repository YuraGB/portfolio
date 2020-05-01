/**
 * topList
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, {useContext} from 'react';
import Context from "../../Context/context";

/**
 * DescriptionBlock
 *
 * @param {string}type
 * @return {*}
 */
const DescriptionBlock = ({type}) => {
    const {
        stateBooks
    } = useContext(Context);

    let topList = null;
    let categoryData = [];

    if (type) {
        switch (type) {
            case 'reading' :
                categoryData = stateBooks;
                break;
            default :
                categoryData = [];
        }

        topList = categoryData.map( el => <li key={el.id}>{el.title}</li>)
    }

    return (
        <section>
            <ul>
                {topList}
            </ul>
        </section>
    )
};

export default DescriptionBlock;