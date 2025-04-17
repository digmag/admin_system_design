import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceProps } from "./data";

export const initialState : AuthSliceProps = {
    isAuth: false
}
export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
        login(state){
            state.isAuth=true
        }
    }
})

export const {login}=authSlice.actions