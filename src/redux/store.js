import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlicer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})