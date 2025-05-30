import { configureStore } from '@reduxjs/toolkit';
import intensityReducer from './intensitySlice';

const store = configureStore({
    reducer: {
        intensity: intensityReducer,
    },
});

export default store;
