import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  province: null,
  regency: null,
  district: null,
  village: null
}

export const districtSlice = createSlice({
  name: "district",
  initialState,
  reducers: {
    setProvince: (state, action) => {
      console.log(action)
      state.province = action.payload
      state.regency = null
      state.district = null
      state.village = null
    },
    setRegency: (state, action) => {
      state.regency = action.payload
      state.village = null
      state.district = null
    },
    setDistrict: (state, action) => {
      state.district = action.payload
      state.village = null
    },
    setVillage: (state, action) => {
      state.village = action.payload
    }
  }
})

export const { setDistrict, setProvince, setRegency, setVillage } =
  districtSlice.actions

export default districtSlice.reducer
