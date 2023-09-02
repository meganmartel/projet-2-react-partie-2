import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MealService from '../service/MealService';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



const RecipeList = () => {
    const params = useParams();
    const mealService = new MealService();

    const {isLoading, isError, data} = useQuery({
        queryKey: ['category', params.categoryName],
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
            <Link to='/'>Return to Categories</Link>
            <Card>
                <Col>
                    <Card.Title>{params.categoryName}</Card.Title>
                    <div>
                        {data && data.meals.map(meal =>
                            <div key={meal.strMeal}>
                                <Link to={`/meals/${meal.strMeal}`} key={meal.idMeal}>
                                    <Card.Subtitle>{meal.strMeal}</Card.Subtitle>
                                </Link>
                                <Col nd={1}>
                                    <Image src={meal.strMealThumb} alt={meal.strMeal}/>
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