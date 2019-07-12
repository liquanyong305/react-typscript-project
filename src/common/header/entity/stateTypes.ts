export type IHeaderState = {
	focused: boolean,
	mouseIn: boolean,
	list: Array<string>,
	page: number,
	totalPage: number
};
export const defaultHeaderState: IHeaderState = {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
}
