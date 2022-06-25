import React from 'react';
import styled from 'styled-components';
import chooseUs from '../../images/choose-us.51e22e146de6a1d3b055.png'
import { FiCheckSquare } from 'react-icons/fi'

const ChooseUs = () => {
    return (
        <section>
            <ChooseUsSec>
                <article>
                    <img src={chooseUs} alt='chooseus'/>
                </article>
                <article>
                    <h1>Why you should choose us.</h1>
                    <p>
                        Creating quality urban lifestyles, building stronger <br/>
                        communities
                    </p>
                    <Check>
                        <div>
                            <FiCheckSquare color='#2748d6'/>
                            <h3>World class</h3>
                        </div>
                        <div>
                            <FiCheckSquare color='#2748d6'/>
                            <h3>Affordable</h3>
                        </div>
                    </Check>
                    <Check>
                        <div>
                            <FiCheckSquare color='#2748d6'/>
                            <h3>Trusted</h3>
                        </div>
                        <div className='amenities'>
                            <FiCheckSquare color='#2748d6'/>
                            <h3>Amenities</h3>
                        </div>
                    </Check>
                </article>
            </ChooseUsSec>
        </section>
    );
};

const ChooseUsSec = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
   h1 {
    font-size: 2rem;
    color:#2748d6;
    margin-bottom: 1.5rem;
   }
   p {
    margin-bottom: 1.5rem;
   }

`
const Check = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
    h3 {
        margin-left: 1rem;
    }
  }
  .amenities {
    margin-right: 0.7rem;
  }
`


export default ChooseUs;