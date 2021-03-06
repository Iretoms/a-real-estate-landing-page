import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../images/Hero-image.03914c98eda5b94687e4.png';

const Description = () => {
    
    return (
        <section>
            <DescriptionSection>
                <article>
                    <h1>
                        Helping you find the <br/>
                        property of your <br/>
                        dreams.
                    </h1>
                    <p>
                        Creating quality urban lifestyles, building <br/>
                        stronger communities.
                    </p>
                    <button>
                        Learn more
                    </button>
                </article>
                <DesImgCon>
                    <img src={HeroImage} alt='hero'/>
                    <div className='blue-circle'></div>
                </DesImgCon>
            </DescriptionSection>
        </section>
    );
};

const DescriptionSection = styled.div`
   width: 85%;
   margin: 0 auto;
   padding: 5rem 0 6rem;
   display: flex;
   justify-content: space-between;
   h1 {
    color: #192684;
    font-size: 3rem;
   }
   p {
    font-size: 1.1rem;
    margin: 1rem 0 2.5rem;
   }
`

const DesImgCon = styled.article`
   position: relative;
   width: 38rem;
   height: 23rem;
   img {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 1rem;
   }
   .blue-circle {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 6rem;
    background-color: #2748d6;
    position: absolute;
    bottom: 0.5rem;
    left: 0.9rem;
    box-shadow: 15px 15px 20px rgba(0,0,0,0.1);
   }
`

export default Description;