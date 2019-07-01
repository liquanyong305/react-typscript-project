import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

class Header extends Component {

    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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

const mapStateToProps = (state:) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
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
		handleChangePage(page, totalPage, spin) {
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