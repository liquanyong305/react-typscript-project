import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div className='HeaderWrapper'>
                <Link to="/">
                    <div className='Logo'/>
                </Link>
            </div>
        );
    }
}

export default Header