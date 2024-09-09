import { createSlice } from "@reduxjs/toolkit"

const initialState = { email: "", id: "", token: "" }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.token = action.payload.token
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.token = null
    },
  },
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
