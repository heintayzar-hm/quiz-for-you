import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../../components/Button/Button';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    text: 'Click me',
    onClick: jest.fn(),
    className: 'custom-button',
    disabled: false,
    type: 'button',
  };

  it('renders the button with the provided text', () => {
    const {  getByTestId } = render(<Button {...defaultProps} />);
    const buttonElement = getByTestId('button')
    expect(buttonElement).toBeInTheDocument();
  });

  it('triggers the onClick event when clicked', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const buttonElement = getByTestId('button')
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

});
