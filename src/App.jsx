import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./components/CategoryList/CategoryList";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import './App.css';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/categories/:categoryName" element={<RecipeList />} />
        <Route path="/meals/:id" element={<RecipeDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;