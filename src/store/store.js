import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		favorites: favoriteReducer,
	},
});
