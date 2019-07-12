import {IHeaderState} from '../common/header/entity/stateTypes'

// ******** store state ********* //
export type IStoreState = {
    header: IHeaderState
}

// ******** action ********* //
export type IAction = {
    readonly type: string
    [propName: string]: any
}

export type IActionCreator = (param: any) => IAction
