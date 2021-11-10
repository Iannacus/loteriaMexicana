import React from 'react';
import { CardContainer, CardContent, CardText, FrontContent, BackContent } from './cards.styled';

const Card = ({ number, name, next, used }) => {

  //const [activate, setActivate] = useState('');
  //const [anim, setAnim] = useState('')

  /*const flipCard = () => {
    console.log('activando')
    setActivate('rotateY(180deg)');
    setAnim('travel 3s ease');
  }*/

  return (
    <CardContainer >
      <CardContent 
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