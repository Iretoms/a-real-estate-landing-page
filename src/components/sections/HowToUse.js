import React, {useRef} from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import styled from 'styled-components';
import location from '../../images/location.png'
import smartHouse from '../../images/Smart-house.60a02eb41b60bde5949b.png'
import secure from '../../images/Secure.cf988d3b61a4f398306a.png'

const HowToUse = () => {
    const howToUseRef = useRef(null)

    const intersection = useIntersection(howToUseRef, {
        root:null,
        rootMargin:"10px",
        threshold: 0.2
    })

    const fadeIn =(element) =>{
        gsap.to(element,{
            duration:1,
            opacity:1,
            y:-60,
            ease:'power4.out',
            stagger: {
                amount: .3
            }
        })
    }
        
    

    const fadeOut = (element) =>{
        gsap.to(element,{
            duration:1,
            opacity:0,
            y:-20,
            ease:'power4.out'
        })
    }


    intersection && intersection.intersectionRatio < 0.2 ?
    fadeOut(".fade-in")
    : fadeIn(".fade-in")

    return (
        <section >
            <HowToUseSection ref={howToUseRef}>
                <h1 className='use-heading fade-in'>How it works.</h1>
                <p className='use-para fade-in'>This is how our products works</p>
                <div className='fade-in'>
                    <UseArticle>
                        <img src={location} alt='location' className='location'/>
                        <h3>Find Home</h3>
                        <p>
                            Our properties are located at <br/>
                            prime area where by there <br/>
                            won't be problem with <br/>
                            transportation
                        </p>
                    </UseArticle>
                    <UseArticle>
                        <img src={smartHouse} alt='secure'/>
                        <h3>Make Payments</h3>
                        <p>
                            Our estates comes with <br/>
                            good network, portable <br/>
                            water, 24hrs light and round <br/>
                            the clock security
                        </p>
                    </UseArticle>
                    <UseArticle>
                        <img src={secure} alt='smartHouse'/>
                        <h3>Make it Official </h3>
                        <p>
                            We have been in business for <br/>
                            over 32 years, for client <br/>
                            outside the country you can <br/>
                            trust us to deliver well.
                        </p>
                    </UseArticle>
                </div>
            </HowToUseSection>
        </section>
    );
};

const HowToUseSection = styled.div`
   width: 85%;
   margin: 0 auto;
   padding: 8.5rem 0;
   .use-heading {
    font-size: 2rem;
    text-align: center;
    color:#192684;
    margin-bottom: 0.5rem;
   }
   .use-para {
    text-align: center;
    font-size: 1.2rem;
   }
   div {
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
`

const UseArticle = styled.article`
   text-align: center;
   margin-top: 3rem;
   width: 31%;
   height: 30rem;
   padding-top: 5rem;
   background-color: #fff;
   box-shadow: rgba(0, 0, 0, 0.05) 24px 24px 48px 0px;
   img {
    margin-bottom: 1.5rem;
   }
   .location {
    margin-bottom: 2.5rem;
   }
   h3 {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
   }
   p {
    font-size: 1rem;
   }
`

export default HowToUse;