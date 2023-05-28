/**
 * @jest-environment jsdom
 */
import { act, render } from '@testing-library/react';

// To Test
import App from '../App';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from '../components/Loading/Loading';

// Tests
test('Renders main page correctly', async () => {
   // Setup
    await act(
        async () => {
            render(
                <Provider store={store}>
                        <PersistGate loading={<Loading />} persistor={persistor}>
                        <App />
                        </PersistGate>

                </Provider>
            )
       }
   )

   // Pre Expecations

   // Init

   // Post Expectations
  expect(true).toBeTruthy();
});
