import { render, screen } from '@testing-library/react';
import Controls from './Controls.js';

test('should render a ', async () => {
  const container = render(<Controls />);
  await screen.findByPlaceholderText('search pokemon');
  expect(container).toMatchSnapshot();
});
