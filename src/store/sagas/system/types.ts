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

export interface HomePageBlock {
    category: {[key:string]: any},
    title:string,
    type:string,
    linkDirection:string
}

export interface LinkItemInterface {
    name:string,
    link:string
}