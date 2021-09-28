import React from 'react';
import styled from 'styled-components';

const CardContainer =  styled.div`
  width: 90%;
  background: gray;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 500px;
  }
`;

const CardContent = styled.div`
  background: yellow;
  border: 20px solid white;
  width: 100%;
  height: 70%;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-align: ${(props) => props.align || ''};
`;



const Card = ({ number, name, next }) => {
  return (
    <CardContainer>
      <CardContent onClick={() => next()}>
        <CardText align="left">{number}</CardText>
        <CardText align="center">{name}</CardText>
      </CardContent>
    </CardContainer>
  )
}

export default Card;