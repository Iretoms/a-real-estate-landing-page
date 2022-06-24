import React from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsSearch } from 'react-icons/bs'


const Search = () => {
    return (
        <section>
           <SearchSection>
              <article>
                <Div>
                    <div><h4>Location</h4> <BsChevronDown color='#2748d6'/></div>
                    <p>Lekki</p>
                </Div>

                <Div>
                    <div><h4>Property Type</h4> <BsChevronDown color='#2748d6'/></div>
                    <p>Duplex</p>
                </Div>

                <Div>
                    <div><h4>Max Price</h4> <BsChevronDown color='#2748d6'/></div>
                    <p>$10,000</p>
                </Div>

                <button>
                    <BsSearch size='0.8rem'/> Search
                </button>
              </article>
           </SearchSection> 
        </section>
    );
};

const SearchSection = styled.div`
  width: 85%;
  margin: 0 auto;
  article {
    width: 93%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 2rem 2.5rem;
    box-shadow: 3px 5px 20px  rgba(0,0,0,0.1);
    border-radius: 15px;
  }
  
`

const Div = styled.div`
  div {
    display: flex;
    align-items: flex-end;
    h4 {
        margin-right: 0.3rem;
        color: #2748d6;
        font-size: 0.9rem;
    }
  }

  p {
    color: rgba(0,0,0,0.5);
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`

export default Search;