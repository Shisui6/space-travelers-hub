import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../app/store';
import Mission from '../features/Mission/Mission';

test('Testing Mission with snapshot', async () => {
  const data = {
    mission_id: 2,
    mission_name: 'Telstar',
    description:
      'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
    reserved: false,
  };
  const tree = render(
    <Provider store={store}>
      <Mission mission={data} />
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
