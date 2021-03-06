import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerLinks } from '../../data';
import { connect } from 'react-redux';
import Logout from './Logout';

const Header = (props) => {

    return (
        <header className="header">
            <div>
                <h1>BitMen Battles</h1>
            </div>
            
            {props.isAuthorized ?
                <div className="links-container">
                    <div className="links">
                        {headerLinks.map((link, index) => (
                            <div>
                                <NavLink key={index} exact to={link.link} activeClassName="active">
                                    {link.title}
                                </NavLink>
                            </div>
                        ))}
                        
                    </div>
                    <Logout />
                </div>
            :
            null
                // <div>
                //     <Login />
                // </div>
            }
            
            
            
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized
    }
}

export default connect(mapStateToProps,{})(Header);