import React from 'react';
import logo from '../../assets/logo.png';
import {HeaderWrapper, LogoHeader, StyledLink, StyledLogLink} from './styles';
import {withRouter} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <HeaderWrapper>
                <LogoHeader src={logo} />
                <StyledLink to = "/">Home</StyledLink>
                <StyledLogLink to = "/register">Register</StyledLogLink>
                <StyledLogLink to = "/login">Login</StyledLogLink>
            </HeaderWrapper>
        );
    }
}


export default withRouter (Header);