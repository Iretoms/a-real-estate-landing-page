import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {
    return (
        <MainHeader>
            <MainNav>
                <h1>
                    <Link to="/">Dee's Estate</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/" className='current'>Home</Link>
                    </li>
                    <li>
                        <Link to="/">Rent</Link>
                    </li>
                    <li>
                        <Link to="/">Land</Link>
                    </li>
                    <li>
                        <Link to="/">Agent</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
                <button>Get Started</button>
            </MainNav>

            <Outlet/>
        </MainHeader>
    );
};

const MainHeader = styled.header`
   width: 100vw;
   border-bottom: 1px solid #eee;
`
const MainNav = styled.nav`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  h1 {
    font-family: 'Lobster', cursive;
  }
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
        margin-left: 2rem;
    }
  }
  .current {
    color: #2748d6;
  }
`




export default Header;