import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/formAuth/authSlice"
import boardBanReducer from "../pages/tasks/boardBanSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boardBan: boardBanReducer,
  },
})
