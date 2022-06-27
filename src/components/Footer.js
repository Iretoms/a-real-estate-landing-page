import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterSection>
            <div>
                <article className='footer-info'>
                    <h1>Dee's Estate</h1>
                    <p>
                        Solution for easy and flexible <br/>
                        house hunting. you can trust us <br/>
                        anywhere through this <br/>
                        platform.
                    </p>
                </article>
                <article className='footer-links'>
                    <h1>Property</h1>
                    <ul>
                        <li>Learning Modules</li>
                        <li>Partnership</li>
                        <li>Watch Demo</li>
                        <li>Event</li>
                    </ul>
                </article> 
                <article  className='footer-links'>
                    <h1>About</h1>
                    <ul>
                        <li>Our Company</li>
                        <li>career</li>
                        <li>investors relations</li>
                        <li>social impact</li>
                    </ul>
                </article>
                <article className='footer-links'>
                    <h1>Resources</h1>
                    <ul>
                        <li>Contact</li>
                        <li>Give feedback</li>
                        <li>system status</li>
                        <li>privacy policy</li>
                    </ul>
                </article>   
            </div>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
  width: 100vw;
  padding: 8rem 0 10rem;
  background-color: #192684;
  color: #fff;
  div {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    .footer-info {
        h1 {
            font-family: 'Lobster', cursive;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
    .footer-links {
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
        ul {
            list-style: none;
            li {
               margin-bottom: 1.5rem;
            }
        }
    }
  }
`

export default Footer;