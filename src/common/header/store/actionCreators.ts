import * as constants from './constants';
import axios from 'axios';
import { Dispatch } from 'redux'

const changeList = (data: Array<String>) => ({
	type: constants.CHANGE_LIST,
	data: data,
	totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page: number) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
	return (dispatch: Dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};