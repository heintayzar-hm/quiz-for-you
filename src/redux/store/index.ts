import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middleWares = [logger, thunk];


const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

const persistor = persistStore(store);

export { store, persistor };
