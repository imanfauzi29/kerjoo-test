import { configureStore } from "@reduxjs/toolkit"
import districtReducer from "./slicer/districtSlicer"

export const store = configureStore({
  reducer: {
    district: districtReducer
  }
})
