import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ListCategory:React.FC<{type:string}> = ({type}) => {
    let topList;
    const books = useSelector(state => {
        console.log(state);
        return state.books});

    if(type) {
        switch (type) {
            case 'reading': {
                console.log(books);
                topList = books.map( item => <li key={item.id}>{item.title}</li>);
                break;
            }
        }

    } else {

        topList = null
    };
    return (
        <ul>
            {topList}
        </ul>
    )
};

export default ListCategory;