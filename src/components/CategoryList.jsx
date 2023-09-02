import React from 'react'
import {useQuery} from "@tanstack/react-query"
import MealService from "../service/MealService";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CategoryList = () => {
    const mealService = new MealService();

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['category'],
        queryFn: () => mealService.getAllCategories(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
    <Container>
        <h1>Recipes Book</h1>
        <Card>
            <Card.Title>All Categories</Card.Title>
            <div>
                {data && data.categories.map(category =>
                    <Link to={`/categories/${category.strCategory}`} key={category.idCategory}>
                        <Card.Subtitle>{category.strCategory}</Card.Subtitle>
                    </Link>
                )}
            </div>
        </Card>
    </Container>
  );
}

export default CategoryList