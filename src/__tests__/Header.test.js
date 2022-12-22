import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../features/Header/Header';

describe('Header', () => {
  it('renders Header component', async () => {
    const tree = render(<Router><Header /></Router>);
    expect(tree).toMatchSnapshot();
  });

  it('contains the mission link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
});
