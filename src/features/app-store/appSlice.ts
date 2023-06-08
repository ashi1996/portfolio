// import { FestivalsResponse, HostsResponse } from './../../common/consts/model';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface AppState {
  darkMode: boolean,
  language: 'en' | 'he'
}

// Define the initial state using that type
const initialState: AppState = {
  darkMode: true,
  language : 'en'
}

export const appSlice = createSlice({
  name: 'appslice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleI18: (state) => {
      state.language = (state.language === 'en') ? 'he' : 'en';
    },
    // chengeHosts: (state, action: PayloadAction<HostsResponse[]>) => {
    //   state.hosts =  action.payload;
    // },
    // refreshData: (state) => {
    //   state.refreshReducer =  ++state.refreshReducer;
    // },
  },
})

export const { 
  toggleDarkMode,
  toggleI18
//   chengeHosts,
//   refreshData
} = appSlice.actions


export default appSlice.reducer