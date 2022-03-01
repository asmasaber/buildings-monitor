import { render, screen } from '@testing-library/react';
import BuildingsMonitor from './BuildingsMonitor';

describe('BuildingsMonitor', () => {
  test('test basic renders', () => {
    render(<BuildingsMonitor />);
    screen.getByText('Buildings Monitor');
    screen.getByTestId('users-select');
    screen.getByText('Please select client you want to preview his buildings');
  });
});
