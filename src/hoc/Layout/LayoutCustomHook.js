/**
 * Layout custom hook
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import {useState} from 'react';

import mousePos from './utils/mouseCoordinates';

/**
 * useCustom hook
 *
 * @return {{onOpenModalHandler: (function(): void), stateHandler: React.Dispatch<React.SetStateAction<{abMe: null, hp: null}>>, is_directToAboutMe: boolean, hideApplicationMessage: hideApplicationMessage, state: {abMe: null, hp: null}, message: unknown, stateBooks: unknown, showModal: boolean, prompt: {show: boolean, text: string}, stateBooksHandler: React.Dispatch<React.SetStateAction<unknown>>, directToAboutMe: (function(): void), promptHendler: (function(*=): function(...[*]=))}}
 */
export default function () {
    let timer;
    const [is_directToAboutMe, directToAbouteMeHendler] = useState(false);
    const [showModal, setModalStatus] = useState(false);
    const [message, applicationMessageHendler] = useState(null);
    const [state, stateHandler] = useState({hp:null, abMe:null});
    const [stateBooks, stateBooksHandler] = useState(null);
    const [prompt, setPrompt] = useState({show: false, text: ''});

    const onOpenModalHandler = () => setModalStatus(prevState => !prevState);
    const directToAboutMe = () => directToAbouteMeHendler(true);
    const hideApplicationMessage = (response) => {
        applicationMessageHendler(response);

        setTimeout(() => {
            applicationMessageHendler(null)
        }, 5000);
    };
    const promptHendler = (data) => (event) => {
        const coordinates = mousePos(event);
        clearTimeout(timer);

        timer = setTimeout(() => {
             setPrompt( prevState => ({
                ...prevState,
                ...data,
                coordinates
            }))
        }, 300)
     };

    return  {
        stateBooks,
        stateBooksHandler,
        is_directToAboutMe,
        directToAboutMe,
        showModal,
        onOpenModalHandler,
        message,
        hideApplicationMessage,
        state,
        stateHandler,
        prompt,
        promptHendler
    }
};