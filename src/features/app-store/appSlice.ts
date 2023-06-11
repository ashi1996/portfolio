// import { FestivalsResponse, HostsResponse } from './../../common/consts/model';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface AppState {
  darkMode: boolean,
  language: 'en' | 'he',
  magicWand : boolean
}

// Define the initial state using that type
const initialState: AppState = {
  darkMode: true,
  language : 'en',
  magicWand : true
}

export const appSlice = createSlice({
  name: 'appslice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleI18: (state) => {
      state.language = (state.language === 'en') ? 'he' : 'en';
    },
    toggleDarkMode: (state) => {
      if(state.darkMode && state.magicWand){
        state.magicWand = false;
      } 
      state.darkMode = !state.darkMode;
    },
    toggleMagicWand: (state) => {
      if(!state.darkMode && !state.magicWand){
        state.darkMode = true;
      } 
      state.magicWand = !state.magicWand;
    },
    // chengeHosts: (state, action: PayloadAction<HostsResponse[]>) => {
    //   state.hosts =  action.payload;
    // },
  },
})

export const { 
  toggleDarkMode,
  toggleI18,
  toggleMagicWand
} = appSlice.actions


export default appSlice.reducer