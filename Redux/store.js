import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'
// import { counterSlice } from './Slice'
import counterReducer from "./Slice";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
