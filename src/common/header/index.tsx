import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
    IStoreState,
    IAction
} from '../../store/stateTypes'
class Header extends Component {

    render() {
        
        return (
            <div className='HeaderWrapper'>
                <Link to="/">
                    <div className='Logo'/>
                    <div className="Nav">
                        <div className="NavItem left active">
                            homepage
                        </div>
                        <div className="NavItem left">
                            Login
                        </div>
                        <div className="NavItem right">
                            <i className="iconfont">&#xe636;</i>
                        </div>
                    </div>
                    <div className='SearchWrapper'>
						<CSSTransition in={focused}	timeout={200} classNames="slide">
                            <input type="text" 
                                placeholder="search" 
                                className="NavSearch {focused ? 'focused': ''}" 
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                                </input>
                        </CSSTransition>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state:IStoreState) => {
	return {
		focused: state.headerState.focused,
		list: state.headerState.list,
		page: state.headerState.page,
		totalPage: state.headerState.totalPage,
		mouseIn: state.headerState.mouseIn
	}
}

const mapDispathToProps = (dispatch:Dispatch) => {
	return {
		// handleInputFocus(list: Array<string>) {
		// 	(list.length === 0) && dispatch(actionCreators.getList());
		// 	dispatch(actionCreators.searchFocus());
		// },
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page: number, totalPage:number, spin:any) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);