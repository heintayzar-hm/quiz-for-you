import { fireEvent, render } from '@testing-library/react';
import Explanation from '../../components/Explanation/Explanation';

test('Renders Explanation component with correct content and triggers changePage event', () => {
  // Create a mock function for the changePage event
  const mockChangePage = jest.fn();

  // Render the Explanation component with the mock function
  const {  getByTestId } = render(<Explanation changePage={mockChangePage} />);

  // Verify the presence of specific text content in the component
  expect(getByTestId('explanation-title')).toBeInTheDocument();

  const button = getByTestId('button');
  expect(button).toBeInTheDocument();

  // Simulate a click event on the button
  fireEvent.click(button);

  // Verify that the changePage event is triggered
  expect(mockChangePage).toHaveBeenCalledTimes(1);
});
