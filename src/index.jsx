import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './routes/App';
import ErrorPage from './routes/error-page';
import Profile from './features/Profile/Profile';
import RocketList from './features/RocketList/RocketList';
import MissionList from './features/Mission/MissionList';
import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <RocketList />,
      },
      {
        path: 'missions',
        element: <MissionList />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

reportWebVitals();
