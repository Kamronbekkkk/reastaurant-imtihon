import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';
import SinglePage from './Pages/SinglePage/SinglePage'
import axios from 'axios';


async function menu() {
  const response = await axios.get('/restaurant.json');
  return response.data;
}

async function singlePage({ params }) {
  const response = await axios.get('/restaurant.json');
  const data = response.data;
  return data.find((restaurant) => restaurant.id === params.restaurantId);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    loader: menu,
  },
  {
    path: '/single/:restaurantId',
    element: <SinglePage />,
    loader: singlePage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
