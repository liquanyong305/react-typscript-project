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
                                className="NavSearch" 
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

export default Header