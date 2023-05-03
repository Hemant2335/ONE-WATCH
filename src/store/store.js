import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import homeslice from './homeslice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    home : homeslice
  },
  middleware : [thunk , logger]
})