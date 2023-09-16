import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MealService from '../../service/MealService';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const RecipeList = () => {
    const params = useParams();
    const mealService = new MealService();

    const {isLoading, isError, data} = useQuery({
        queryKey: ['recipeList', params.categoryName],
        queryFn: () => mealService.getRecipeList(params.categoryName),
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
            
            <Card className='mt-5 w-1/3 mx-auto p-3'>
                <Col>
                    <Card.Title className='text-center'>{params.categoryName}</Card.Title>
                    <div>
                        {data && data.meals.map(meal =>
                            <div key={meal.strMeal}>
                                <Link to={`/meals/${meal.idMeal}`}>
                                    <Card.Subtitle className='text-center text-black text-decoration-line: underline mb-3 mt-4'>{meal.strMeal}</Card.Subtitle>
                                </Link>
                                <Col>
                                <Image className='h-36 mx-auto' src={meal.strMealThumb} alt={meal.strMeal}/>
                                </Col>
                            </div>
                            )}
                    </div>
                </Col>
            </Card>
        </Container>
  );
}

export default RecipeList