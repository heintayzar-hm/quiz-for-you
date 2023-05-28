import { fireEvent, render } from '@testing-library/react';
import Error from '../../components/Error/Error';
import { APP } from '../../constants';



test('Renders Error component with correct content', () => {
    const { getByText, getByTestId } = render(<Error />);

    // Verify the presence of specific text content in the component
    expect(getByText('Oops!')).toBeInTheDocument();
    expect(getByText('Something went wrong!!! Please try again later.')).toBeInTheDocument();
    expect(getByText('Or you can reload the page.')).toBeInTheDocument();
    expect(getByTestId('button')).toBeInTheDocument();
    expect(getByText('If this issue continues, please contact the email:')).toBeInTheDocument();
    expect(getByText(APP.email)).toBeInTheDocument();
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });
    const reloadButton = getByTestId('button')
    fireEvent.click(reloadButton);
    expect(reloadMock).toHaveBeenCalledTimes(1);

  });
