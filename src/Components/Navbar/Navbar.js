import React from 'react';
import styled from 'styled-components/macro';
import image1 from './image1.png'
import { BrowserRouter, Link } from 'react-router-dom';

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
font-size: 15px;
`;
const RightLinks = styled.div`
align-items: center;
display: flex;
padding: 10px;
margin-right: 15px;
position: absolute;
right: 0;
`;
const NavLinks = styled(Link)`
padding: 0 8px;
text-decoration: none;
color: #000;
svg {
    height: 24px;
    width: 24px;
`;
const Navbar = () => {
    return (
        <Nav>
            <RightLinks>
                <NavLinks to="/gmail">Gmail</NavLinks>
                <NavLinks to="/images">Images </NavLinks>
                <NavLinks to="/"
                css={`padding-right: 20px;`}>
                    <svg class="gb_Pe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                    </NavLinks>
                    <Link to="">
                        <img css={`border-radius: 50%; height: 24px; width: 24px;`} src={image1} alt="" />
                    </Link>
            </RightLinks>
        </Nav>
    )
}
export default Navbar