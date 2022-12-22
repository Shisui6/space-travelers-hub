import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import Rocket from '../features/Rocket/Rocket';

test('renders correctly', () => {
  const data = {
    name: 'Falcon 1',
    desc: 'A very fast ship',
    type: 'Spaceship',
    flickr_images: ['img'],
  };

  const { getByText } = render(
    <Provider store={store}>
      <Rocket rocket={data} />
    </Provider>,
  );

  expect(getByText(/Reserve/i)).toBeInTheDocument();
});
