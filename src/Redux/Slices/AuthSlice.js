import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.isAuth = action.payload
    },
    authLogout: (state) => {
        state.isAuth = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { authLogin, authLogout } = authSlice.actions

export default authSlice.reducer