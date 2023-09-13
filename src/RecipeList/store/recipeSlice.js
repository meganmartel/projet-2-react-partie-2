import { createSlice } from '@reduxjs/toolkit'
import reducers from './recipeReducers';

export const recipeSlice = createSlice({
	name: 'recipe',
	initialState: {
		recipe: []
	},
	reducers: reducers,
});

export const { updateRecipeList } = recipeSlice.actions;

export default recipeSlice.reducer;
