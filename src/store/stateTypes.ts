export type IHeaderState = {
	focused: boolean,
	mouseIn: boolean,
	list: Array<string>,
	page: number,
	totalPage: number
};

// ******** store state ********* //
export type IStoreState = {
    header: IHeaderState
}

export const defaultState: IStoreState = {
    header: {
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