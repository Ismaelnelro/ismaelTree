import React from 'react'
import avatar from '../assets/avatar1.png'
import github from '../assets/githubicon.png'
import web from '../assets/webicon.png'
import linkedin from '../assets/linkedinicon.png'
import styled from 'styled-components'
import Card from '../components/Card'

const info = [
  {
    icon: github,
    linkname: "GITHUB",
    path: 'https://github.com/Ismaelnelro'
  },
  {
    icon: linkedin,
    linkname: "LINKDIN",
    path: ''
  },
  {
    icon: web,
    linkname: "WEB",
    path: ''
  }
]

export function Home() {
  return (
    <ContainerStyle>
      <div className='container'>
        <div className='imagen'>
          <img src={avatar} alt="" />
        </div>
        <div className='name'>
          <p>@ismaeltech</p>
        </div>
        <div className='cards'>
          {
            info.map((inf, index) => (
              <Card key={index} inf={inf} />
            ))
          }
        </div>
        <div className='powerby'>
         BY Ismael Rosas
        </div>
      </div>
    </ContainerStyle>
  )
}


const ContainerStyle = styled.div`
  .container{
    background-color: rgba(0, 0,0, 0.7); 
    width: 100vw;
    height: 100%;
  
    .imagen{
      width: 100vwe;
      height: auto;
      padding: 2rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
      img{
          width: 8rem;
          border-radius: 100%;
          border: .2rem solid #343434;
          border: 3px solid black;
          box-shadow: 0.45em 0.25em;
        }
        img:hover {
          transform: translate(-0.05em, -0.05em);
          box-shadow: 0.25em 0.15em;
        }
        img:active {
          transform: translate(0.05em, 0.05em);
          box-shadow: 0.05em 0.05em;
        }
    }

    .name{
      width: 100vw;
      height: 2rem;
      display: flex;
      justify-content: center;
      p{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 600;
        letter-spacing: 0.2rem;
        font-size:1.2rem;
        color: white;
      }
    }
    .cards{
      height: calc(100vh - 19rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:0.7rem;
      margin-top: 2rem;
    }
    .powerby{
      width: 100vw;
      font-weight: 600;
      min-height: 3rem;
      text-align: center;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 1rem;
      color: white;
    }
  }
`