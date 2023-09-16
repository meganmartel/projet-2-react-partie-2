import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MealService from '../../service/MealService';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordeon from '../Accordeon/Accordeon';
import FavoriteButton from '../../favorites/components/FavoriteButton';



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
            <Link className='text-black' to='/'>Return to Categories</Link>
            <Card className='mt-5 w-1/2 mx-auto p-3'>
                <Col>
                    {data && data.meals.map(details =>
                        <Col key={details.idMeal}>
                            <Card.Title className='text-center'>{details.strMeal}</Card.Title>
                            <Card.Text className='text-center'>{details.strCategory}</Card.Text>
                            <Image className='h-96 mx-auto mb-4' src={details.strMealThumb} alt={details.strMeal}/>
                            <Accordeon details={details}></Accordeon>
                            <FavoriteButton recipe={details}></FavoriteButton>
                        </Col>
                    )}
                </Col>
            </Card>
        </Container>
  );
}

export default RecipeDetails