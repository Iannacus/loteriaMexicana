import styled from 'styled-components';

import cover from '../imgs/backcard.jpg';
export const CardContainer =  styled.div`
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

export const CardContent = styled.div`
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

export const FrontContent = styled.div`
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

export const BackContent = styled.div`
position: absolute;
background-image: url(${cover});
background-size: cover;
background-position: center center;
width: 100%;
height: 100%;
margin: 0;
`;

export const CardText = styled.p`
transition: 1s ease-in-out;
letter-spacing: 1px;
margin: 0;
font-size: 36px;
font-weight: 700;
text-align: ${(props) => props.align || ''};
`;