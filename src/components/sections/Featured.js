import React from 'react';
import styled from 'styled-components';
import feature1 from '../../images/Feature-1.b15dd9a9ed51ebdbac4f.png'
import feature2 from '../../images/Feature-2.4bdc683c2373c8fef0bb.png'
import feature3 from '../../images/Feature-3.d2bdba60cd98f99f7240.png'

const Featured = () => {
    return (
        <section>
            <FeaturedSec>
                <h1 className='featured-head'>Our Featured Properties.</h1>
                <p className='featured-para'>
                    One of our biggest product to be featured and that has sold <br/>
                    out the most.
                </p>
                <div className='button-container'>
                    <button>View more</button>
                </div>
                <Property>
                    <article>
                        <img src={feature1} alt='thePalace'/>
                        <Home>
                            <div>
                                <h4 className='home-name'>The Palace</h4>
                                <p>Lekki, phase 2</p>
                            </div>
                            <div>
                                <p>Duplex</p>
                                <h4 className='price'>$2,000</h4>
                            </div>
                        </Home>
                    </article>

                    <article>
                        <img src={feature2} alt='ivyRory'/>
                        <Home>
                            <div>
                                <h4 className='home-name'>Ivy Rory</h4>
                                <p>Lekki, phase 2</p>
                            </div>
                            <div>
                                <p>Duplex</p>
                                <h4 className='price'>$2,000</h4>
                            </div>
                        </Home>
                    </article>

                    <article>
                        <img src={feature3} alt='rexona'/>
                        <Home>
                            <div>
                                <h4 className='home-name'>Rexona</h4>
                                <p>Lekki, phase 2</p>
                            </div>
                            <div>
                                <p>Duplex</p>
                                <h4 className='price'>$2,000</h4>
                            </div>
                        </Home>
                    </article>
                </Property>
            </FeaturedSec>
        </section>
    );
};

const FeaturedSec = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 10rem 0;
  .featured-head {
    text-align: center;
    color: #192684;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .featured-para {
    text-align: center;
    font-size: 1.2rem;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0
  }
`

const Property = styled.div`
 display: flex;
 justify-content: space-between;
 article {
    box-shadow: rgba(0, 0, 0, 0.05) 24px 24px 48px 0px;
    padding: 1rem 1rem 2rem 2rem;
    background-color: #fff;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
 }
`

const Home = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
.home-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}
.price {
    color: #192684;
    margin-top: 0.5rem;
}
`

export default Featured;