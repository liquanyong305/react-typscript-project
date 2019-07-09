import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import {
	IHeaderState,
    IStoreState,
    IAction,
	IActionCreator,
	defaultState
} from '../../store/stateTypes'


interface HeaderPropType {
	header:IHeaderState,
	handleInputFocus:Function,
	handleInputBlur:Function,
	handleMouseEnter:Function,
	handleMouseLeave:Function,
	handleChangePage:Function
}

class Header extends Component<HeaderPropType> {
	constructor(props:HeaderPropType) {
		super(props)
	}

    render() {
		const { header, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
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
                    
						<div className='SearchWrapper'>
							<CSSTransition in={header.focused}	timeout={200} classNames="slide">
								<input type="text" 
									placeholder="search" 
									className="NavSearch {headerState.focused ? 'focused': ''}" 
								>
								</input>
							</CSSTransition>
						</div>
					</div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state:IStoreState) => ({
		header: state.header,
})

const mapDispathToProps = (dispatch: ThunkDispatch<IStoreState, void, Action>) => {
	return {
		handleInputFocus(list: Array<string>) {
			if(list.length === 0) {
				dispatch(actionCreators.getList());
			} 
			dispatch(actionCreators.searchFocus());
		},
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