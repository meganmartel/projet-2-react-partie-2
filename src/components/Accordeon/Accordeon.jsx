import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Details from '../RecipeDetails/Details';

const Accordeon = ({details}) => {
  return (
    <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Ingredients And Measures</Accordion.Header>
            <Accordion.Body className='visible'>
                <Details details={details}></Details>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Instructions</Accordion.Header>
            <Accordion.Body className='visible'>{details.strInstructions}</Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default Accordeon