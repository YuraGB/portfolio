/**
 * Interfaces and Types
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

export interface HomePageState {
        hobbies: {},
        work: {},
        weaknessesStrengths: WeaknessesStrengths | {}
}

export interface WeaknessesStrengths {
    angry: string,
    'like games': string
}

export interface CommentsInterface {
    authorsComment: string,
    authorsEmail: string,
    authorsName: string,
    date: number
}

export interface Action {
    type: string,
    payload: object
}

export interface HomePageBlockInterface {
    category: {[key:string]: any},
    title:string,
    type?:string | undefined,
    linkDirection:string
}

export interface LinkItemInterface {
    name:string,
    link:string
}

export interface InfoBlockComponentInterface {
    title: string,
    children: ChildrenType
}

export interface NaveLinkInterface {
    link: string,
    className?: string,
    children: ChildrenType
}

export type ChildrenType = JSX.Element[] | JSX.Element | string;

export interface ToolbarInterface {
    clicked: ()=> void,
}

export interface Generator<T = unknown, TReturn = any, TNext = unknown>
    extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}