import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper = styled.div`
    height: 100px;
    background: #454545;
    padding: 0 5%;
`;
export const LogoHeader = styled.img`
    height: 80px;
    float: left;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px; 
`;
export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    position: relative;
    line-height: 100px;
    padding: 0 100px;
`;
export const StyledLogLink = styled(Link)`
    color: white;
    float: right;
    line-height: 100px;
    padding: 0 50px;
    text-decoration: none;
    font-size: 20px;
    position: relative;
`;