import { createSlice } from "@reduxjs/toolkit";

interface AuthSliceProps{
    isAuth: boolean
}

const initialState : AuthSliceProps = {
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