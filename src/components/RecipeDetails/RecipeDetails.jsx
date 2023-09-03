import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MealService from '../../service/MealService';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Details from './Details';



const RecipeDetails = () => {
    const params = useParams();
    const mealService = new MealService();

    const {isLoading, isError, data} = useQuery({
        queryKey: ['recipeDetails', params.id],
        queryFn: () => mealService.getRecipeDetails(params.id),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <Container>
            <Link to='/'>Return to Categories</Link>
            <Card>
                <Col>
                    {data && data.meals.map(details =>
                        <Col key={details.idMeal}>
                            <Card.Title>{details.strMeal}</Card.Title>
                            <Card.Text>{details.strCategory}</Card.Text>
                            <Image src={details.strMealThumb} alt={details.strMeal}/>
                            <Details details={details}></Details>
                        </Col>
                    )}
                </Col>
            </Card>
        </Container>
  );
}

export default RecipeDetails