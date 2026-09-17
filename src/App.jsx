import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import MovieSearch from './pages/MovieSearch';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/movieSearch", element: <MovieSearch></MovieSearch> },
      {path: "/about", element: <About></About>},

    ]
  }
]);

function Router() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
};

export default Router
