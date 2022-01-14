import { render, screen } from '@testing-library/react';
import Controls from './Controls.js';

test('should render a search bar ', async () => {
  const container = render(<Controls types={['bug', 'ice']} />);
  await screen.findByPlaceholderText('search pokemon');
  expect(container).toMatchSnapshot();
});
