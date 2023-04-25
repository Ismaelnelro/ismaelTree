import React from 'react'
import styled from 'styled-components'

export default function Card({ inf }) {
  return (
    <ContainerStyle>
      <a href={inf.path} target='_blank'>
        <div className='card'>
          <div className='img'>
            <img src={inf.icon} alt="" />
          </div>
          <div className='link'>
            {inf.linkname}
          </div>
        </div>
      </a>
    </ContainerStyle >
  )
}

const ContainerStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  a{
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 100%;
    text-decoration: none;
    color: #232323;
  .card{
    width: 90%;
    min-height: 4.5rem;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 0.8rem;
    border-radius: 0.4rem;
    border: 3px solid black;
    box-shadow: 0.45em 0.25em;
    background-color: white;
    
    .img{
      display: flex;
      justify-content: start;
      align-items: center;
      img{
        width: 2rem;
        height:2rem;
      }
    }
    .link{
      display: flex;
      justify-content: center;
      align-items: center;
    } 
  }
  
  @media (min-width: 768px) {
    width: 40%;
  }
}
  
  .card:hover{
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.25em 0.15em;
  }
` 