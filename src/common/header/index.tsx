import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Action } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import {
    IStoreState
} from '../../store/stateTypes'
import {IHeaderState} from './entity/stateTypes'

interface HeaderPropType {
	header:IHeaderState,
	handleInputFocus:Function,
	handleInputBlur:Function,
	handleMouseEnter:Function,
	handleMouseLeave:Function,
	handleChangePage:Function
}

class Header extends Component<HeaderPropType> {
	private spinIcon: React.RefObject<any>;
	constructor(props:HeaderPropType) {
		super(props)
		this.spinIcon = React.createRef();
	}
	getListArea() {
		const { header, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = header.list;
		const pageList = [];

		if (newList.length) {
			for (let i = (header.page - 1) * 10; i < header.page * 10; i++) {
				pageList.push(
					<button className="SearchInfoItem" key={newList[i]}>{newList[i]}</button>
				)
			}
		}

		if (header.focused || header.mouseIn) {
			return (
				<div className="SearchInfo" 
					onMouseEnter={()=>handleMouseEnter()}
					onMouseLeave={()=>handleMouseLeave()}
				>
					<div className="SearchInfoTitle">
						热门搜索
						<span className="SearchInfoSwitch" 
							onClick={() => handleChangePage(header.page, header.totalPage, this.spinIcon)}
						>
							<i ref={this.spinIcon} className="iconfont spin">&#xe851;</i>
							换一批
						</span>
					</div>
					<div>
						{pageList}
					</div>
				</div>
			)
		}else {
			return null;
		}
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
                            Download
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
									className={header.focused ? 'NavSearch focused': 'NavSearch'}
									onFocus={() => handleInputFocus(header.list)}
									onBlur={() =>handleInputBlur()}
								>
								</input>
							</CSSTransition>
							<i className={header.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
							</i>{this.getListArea()}
						</div>
					</div>
					<div className="Addition">
						<div className='Button writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</div>
						<div className='Button reg'>注册</div>
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
		handleChangePage(page: number, totalPage:number, spin:React.RefObject<any>) {
			// let originAngle = spin.current.transform.replace(/[^0-9]/ig, '');
			// if (originAngle) {
			// 	originAngle = parseInt(originAngle, 10);
			// }else {
			// 	originAngle = 0;
			// }
			// spin.current.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);