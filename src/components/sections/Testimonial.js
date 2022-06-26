import React from 'react';
import styled from 'styled-components';

const Testimonial = () => {
    return (
        <section>
            <TestimonialSec>
                <h1 className='testimonial-head'>Testimonials.</h1>
                <p className='testimonial-para'>
                    This is what our client are saying
                </p>
                <div className='button-container'>
                    <button>View more</button>
                </div>
                <Testimonies>
                    <article>
                        <h1>Alex Godwin</h1>
                        <h3>nigeria</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia soluta quae eos autem. Est maxime iure harum totam doloribus 
                            doloremque!
                        </p>
                    </article>

                    <article>
                        <h1>Iretomiwa</h1>
                        <h3>canada</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia soluta quae eos autem. Est maxime iure harum totam doloribus 
                            doloremque!
                        </p>
                    </article>

                    <article>
                        <h1>Emmanuel</h1>
                        <h3>Ireland</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia soluta quae eos autem. Est maxime iure harum totam doloribus 
                            doloremque!
                        </p>
                    </article>
                </Testimonies>
            </TestimonialSec>
        </section>
    );
};

const TestimonialSec = styled.div`
width: 85%;
  margin: 0 auto;
  padding: 5rem 0 8rem;
  .testimonial-head {
    text-align: center;
    color: #192684;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .testimonial-para {
    text-align: center;
    font-size: 1.2rem;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0
  }
`

const Testimonies = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
article {
    width:32%;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 24px 24px 48px 0px;
    h1 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 0.8rem;
        text-transform: capitalize;
        margin: 0.5rem 0 1rem;
    }
}
`

export default Testimonial;