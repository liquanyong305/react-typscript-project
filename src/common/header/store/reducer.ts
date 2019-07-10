import * as constants from './constants'
import {
	IHeaderState,
    defaultState,
    IAction
} from '../../../store/stateTypes'

const header = (state:IHeaderState = defaultState.header, action:IAction) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return Object.assign({}, state,  {focused: true});
		case constants.SEARCH_BLUR:
			return Object.assign({}, state,  {focused: false});
		case constants.CHANGE_LIST:
			return Object.assign({}, state,  {
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return Object.assign({}, state,  {mouseIn: true});
		case constants.MOUSE_LEAVE:
			return Object.assign({}, state,  {mouseIn: false});
		case constants.CHANGE_PAGE:
			return Object.assign({}, state,  {page: action.page});
		default:
			return state;
	}
}

export default header
