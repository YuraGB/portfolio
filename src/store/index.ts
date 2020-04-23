/**
 * Context
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import {createContext} from "react";

export interface ContextInterface  {
    is_directToAboutMe?: boolean,
    directToAboutMe?: ()=>void,
    showModal?: boolean,
    onOpenModalHandler?: ()=>void,
    message?: null | string,
    hideApplicationMessage?: (arg:any)=>void,
    state?: object,
    stateHandler?: (arg:any)=>void
}

export const Index = createContext<ContextInterface | null>(null);

export const Consumer = Index.Consumer;
