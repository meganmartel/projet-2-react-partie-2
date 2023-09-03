import React from 'react'
import {useQuery} from "@tanstack/react-query"
import MealService from "../../service/MealService";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CategoryList = () => {
    const mealService = new MealService();

    const {isLoading, isError, data} = useQuery({
        queryKey: ['categories'],
        queryFn: () => mealService.getAllCategories(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
    <Container className='mt-5'>
        <h1 className='text-uppercase text-center'>Recipes Book</h1>
        <Card className='w-1/4 mx-auto mt-4 p-3'>
            <Card.Title className='text-center'>All Categories</Card.Title>
            <div className='my-3'>
                {data && data.categories.map(category =>
                    <Link to={`/categories/${category.strCategory}`} key={category.idCategory}>
                        <Card.Subtitle className='text-center p-2 text-black text-decoration-line: underline'>{category.strCategory}</Card.Subtitle>
                    </Link>
                )}
            </div>
        </Card>
    </Container>
  );
}

export default CategoryList