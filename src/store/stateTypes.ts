export type HeaderState = {
	focused: boolean,
	mouseIn: boolean,
	list: Array<string>,
	page: number,
	totalPage: number
};

// ******** store state ********* //
export type IStoreState = {
    headerState: HeaderState
}

export const defaultState: IStoreState = {
    headerState: {
        focused: false,
        mouseIn: false,
        list: [],
        page: 1,
        totalPage: 1
    }
}

// ******** action ********* //
export type IAction = {
    readonly type: string
    [propName: string]: any
}

export type IActionCreator = (param: any) => IAction