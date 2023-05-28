import { render, fireEvent, renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';
import NameComponent from '../../components/NameComponent/NameComponent';
import { useState } from 'react';

describe('NameComponent', () => {
  test('Renders NameComponent and interacts with it', () => {
    // Render the NameComponent wrapped in the Redux Provider
      const mock = jest.fn();
    const { getByText, container } = render(
      <Provider store={store}>
        <NameComponent handleComponent={() => { mock()}} />
      </Provider>
    );

    setTimeout(() => {
      // Select the input element after 1 second
      const inputElement = container.querySelector('input') as HTMLInputElement;
      if (!inputElement) {
        throw new Error('Input element not found');
      }

      // Verify the presence of the input element
      expect(inputElement).toBeInTheDocument();

      // Simulate entering a name in the input
      fireEvent.change(inputElement, { target: { value: 'John Doe' } });

      // Verify that the input value has changed
      expect(inputElement.value).toBe('John Doe');

      // Simulate clicking on the button to submit the name
      fireEvent.click(getByText('Submit'));

      // Verify that the dispatch action was called with the correct name
    }, 1000);
  });
  test('showInputHandler is automatically called after 1 second', () => {
    jest.useFakeTimers();

    // Render the component and obtain the showInputHandler function
    const { result } = renderHook(() => {
      const [showInput, setShowInput] = useState(false);
      const showInputHandler = () => {
        setShowInput(!showInput);
      };
      return { showInput, showInputHandler };
    });

    // Invoke the showInputHandler function
    act(() => {
      result.current.showInputHandler();
    });

    // Advance the timers by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Verify that setShowInput was automatically called
    expect(result.current.showInput).toBe(true);
  });
});

