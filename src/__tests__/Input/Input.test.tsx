import { fireEvent, render } from '@testing-library/react';
import Input from '../../components/Input/Input';

test('Renders Input component with correct props', () => {
  // Render the Input component with some props
    const mock = jest.fn();
  const { container } = render(
    <Input
      type="text"
      placeholder="Enter your name"
      value="John Doe"
      onChange={() => { mock() }}
    />
  );

  // Verify the presence of the input element
  const inputElement = container.querySelector('input');
  expect(inputElement).toBeInTheDocument();
    if (!inputElement) {
        throw new Error('Input element not found');
    }
  // Verify that the input element has the correct props
  expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('value', 'John Doe');
    expect(mock).toHaveBeenCalledTimes(0);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(mock).toHaveBeenCalledTimes(1);
});
