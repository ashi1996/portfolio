// import { FestivalsResponse, HostsResponse } from './../../common/consts/model';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { popUpName } from './popUp.models'


// Define a type for the slice state
interface PopUpState {
    popUpData : any,
    popUpName : `${popUpName}` | null,
    isActive : boolean
}

const initialState: PopUpState = {
    popUpName : null,
    popUpData : null,
    isActive : false
}

export const popUpSlice = createSlice({
  name: 'popUpslice',
  initialState,
  reducers: {
    closePopUp : (state) => {
        state.isActive = false;
        state.popUpData = null;
        state.popUpName = null;
    },
    openPopUp : (state,  action: PayloadAction<any>) => {
        state.isActive = true;
        state.popUpData = action.payload.data;
        state.popUpName = action.payload.name;
    },
  },
})

export const { 
    closePopUp,
    openPopUp
} = popUpSlice.actions


export default popUpSlice.reducer