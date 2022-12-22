import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import Profile from '../features/Profile/Profile';

test('renders correctly', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(getAllByText(/Missions/i).length).toBe(2);
});
