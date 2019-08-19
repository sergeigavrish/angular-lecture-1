export enum Actions {
    ADD = 'add',
    REDUCE = 'reduce',
    MULTIPLE = 'multiple',
    SPLIT = 'split'
}

export enum ActionTypes {
    INCREASE = 'increase',
    DECREASE = 'decrease'
}

export type MultipleActions = Actions.MULTIPLE | Actions.SPLIT;

export type AdditionActions = Actions.ADD | Actions.REDUCE;
