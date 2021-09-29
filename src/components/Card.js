import React, { useState } from 'react';
import styled from 'styled-components';
import cover from '../imgs/backcard.jpg';

const CardContainer =  styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 500px;
  }
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  perspective: 600px;
  transform: ${(props) => props.trans || ''};
`;

const CardContent = styled.div`
  position: relative;
  border: 26px solid white;
  width: 100%;
  height: 70%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${(props) => props.anim};
`;

const FrontContent = styled.div`
  position: absolute;
  /*transform: rotateY(180deg);*/
  background-color: yellow;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BackContent = styled.div`
  position: absolute;
  background-image: url(${cover});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const CardText = styled.p`
  transition: 1s ease-in-out;
  letter-spacing: 1px;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-align: ${(props) => props.align || ''};
`;



const Card = ({ number, name, next, used }) => {

  //const [activate, setActivate] = useState('');
  //const [anim, setAnim] = useState('')

  /*const flipCard = () => {
    console.log('activando')
    setActivate('rotateY(180deg)');
    setAnim('travel 3s ease');
  }*/

  return (
    <CardContainer trans={activate}>
      <CardContent anim={anim}
        onClick={() => 
          {
            next();
          }
        }
      >
        {used ? null : <BackContent />}
        {used ? (<FrontContent>
          <CardText>{number}</CardText>
          <CardText align="center">{name}</CardText>
        </FrontContent>) : null}
      </CardContent>
    </CardContainer>
  )
}

export default Card;