import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import ShowcasePage from '../pages/ShowcasePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'showcase', element: <ShowcasePage /> },
    ],
  },
]);
