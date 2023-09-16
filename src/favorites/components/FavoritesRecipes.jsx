import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FavoriteButton from '../../favorites/components/FavoriteButton';
import { useSelector } from 'react-redux';
import { favoritesSelector } from '../store/favoriteSelectors';



const FavoritesRecipes = () => {
    const favorites = useSelector(favoritesSelector);

    return (
        <Container>
        <Link className='text-black' to='/'>Return to Categories</Link>
        <Card className='mt-5 w-1/3 mx-auto p-3'>
            <Col>
                <Card.Title className='text-center'>Favorites Recipes</Card.Title>
                <div>
                    {favorites.map(recipe =>
                        <div key={recipe.idMeal}>
                            <Link to={`/meals/${recipe.idMeal}`}>
                                <Card.Subtitle className='text-center text-black text-decoration-line: underline mb-3 mt-4'>{recipe.strMeal}</Card.Subtitle>
                            </Link>
                            <Col>
                                <Image className='h-36 mx-auto' src={recipe.strMealThumb} alt={recipe.strMeal}/>
                            </Col>
                            <FavoriteButton recipe={recipe}/>
                        </div>
                        )}
                </div>
            </Col>
        </Card>
    </Container>
  );
}

export default FavoritesRecipes