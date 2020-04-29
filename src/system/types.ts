/**
 * Interfaces and Types
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

export interface IHomePageState {
        hobbies: {},
        work: {Work} | {},
        weaknessesStrengths: IWeaknessesStrengths | {}
}

export interface IWeaknessesStrengths {
    angry: string,
    'like games': string
}

export type ICommentInterface = {
    authorsComment: string,
    authorsEmail?: string,
    authorsName: string,
    date: number
}

export interface ICommentsComponentInterface {
    comments: {
        id: number
        commentData: ICommentInterface,
        length: number
    }[],
    commentsSize?: number
}

export type CommentType = {
        id: string
        commentData: ICommentInterface
    }[]

export interface IAction {
    type: string,
    payload: object | any
}

export interface IHomePageBlockInterface {
    category: {[key:string]: any},
    title:string,
    type?:string | undefined,
    linkDirection:string
}

export interface ILinkItemInterface {
    name:string,
    link?:string
}

export interface IInfoBlockComponentInterface {
    title: string,
    children: ChildrenType
}

export interface INaveLinkInterface {
    link: string,
    className?: string,
    children: ChildrenType
}

export type ChildrenType = JSX.Element[] | JSX.Element | string | null;

export interface IToolbarInterface {
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

export interface IUIInputInterface {
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

export interface IUIButtonInterface {
    disabled?: boolean,
    btnType?: string,
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

export interface IReturnHPInterface {
    location: {
        pathname:string
    }
}

export interface IBackdropInterface {
    show: boolean;
    clicked: () => void
}

export interface IModalInterface {
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

export interface IFormInterface {
   formFields: IUIInputInterface;
    onChangeHandler: (e:any, id:number) => void;
    isValidated?: boolean | any;
    spinner: boolean;
    onSubmitHandler: () => void;
}