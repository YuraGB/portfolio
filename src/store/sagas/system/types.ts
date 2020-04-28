/**
 * Interfaces and Types
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

export interface HomePageState {
        hobbies: {},
        work: {Work} | {},
        weaknessesStrengths: WeaknessesStrengths | {}
}

export interface WeaknessesStrengths {
    angry: string,
    'like games': string
}

export type CommentInterface = {
    authorsComment: string,
    authorsEmail?: string,
    authorsName: string,
    date: number
}

export interface CommentsComponentInterface {
    comments: {
        id: number
        commentData: CommentInterface,
        length: number
    }[],
    commentsSize?: number
}

export type CommentType = {
        id: string
        commentData: CommentInterface
    }[]


export interface Action {
    type: string,
    payload: object | any
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

export type ChildrenType = JSX.Element[] | JSX.Element | string | null;

export interface ToolbarInterface {
    clicked: ()=> void,
}

export type elementConfig = [
    {
        value: string,
        validation: {
            required: boolean
        }
    }
];

export interface UIInputInterface {
    invalid: boolean,
    touched: boolean,
    shouldValidate: boolean,
    changed: (e:any) => void,
    name: string,
    elementType: string,
    elementConfig: {options:elementConfig},
    value?: string,
    label:string,
    isValidated?:boolean
}

export interface UIButtonInterface {
    disabled?: boolean,
    btnType: string,
    clicked?: () => void,
    children?: ChildrenType
}

export interface Generator<T = unknown, TReturn = any, TNext = unknown>
    extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

export interface ReturnHPInterface {
    location: {
        pathname:string
    }
}

export interface BackdropInterface {
    show: boolean;
    clicked: () => void
}

export interface ModalInterface {
    show: boolean,
    children: ChildrenType,
    modalClosed: ()=> void
}

export type stateType = {
    error:null | {message:string}
}

export type Work = {
    [key:string]: {
        profission: string
    }
}

export interface systemMessages {
    message?: Message
}

export type Message = {
    text: string,
    status: string
}

export interface FormInterface {
   formFields: UIInputInterface;
    onChangeHandler: (e:any, id:number) => void;
    isValidated?: boolean | any;
    spinner: boolean;
    onSubmitHandler: () => void;
}