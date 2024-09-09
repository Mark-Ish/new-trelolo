import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: 1, value: "today", title: "Today", cardItems: [] },
  { id: 2, value: "tomorrow", title: "Tomorrow", cardItems: [] },
  { id: 3, value: "up-this-week", title: "Up this week", cardItems: [] },
  { id: 4, value: "by-next-week", title: "By next week", cardItems: [] },
  { id: 5, value: "deferred", title: "Deferred", cardItems: [] },
  { id: 6, value: "completed", title: "Completed", cardItems: [] },
]

const boardBanSlice = createSlice({
  name: "boardBan",
  initialState,
  reducers: {
    addTaskToday(state, action) {
      state[0].cardItems.push(action.payload)
    },
    addTaskTomorrow(state, action) {
      state[1].cardItems.push(action.payload)
    },
    addTaskUpThisWeek(state, action) {
      state[2].cardItems.push(action.payload)
    },
    addTaskByNextWeek(state, action) {
      state[3].cardItems.push(action.payload)
    },
    addTaskDeferred(state, action) {
      state[4].cardItems.push(action.payload)
    },

    clearTaskToday(state, action) {
      state[0].cardItems = state[0].cardItems.filter(
        (card) => card?.id !== action.payload
      )
    },
    clearTaskTomorrow(state, action) {
      state[1].cardItems = state[1].cardItems.filter(
        (card) => card.id !== action.payload
      )
    },
    clearTaskUpThisWeek(state, action) {
      state[2].cardItems = state[2].cardItems.filter(
        (card) => card?.id !== action.payload
      )
    },
    clearTaskByNextWeek(state, action) {
      state[3].cardItems = state[3].cardItems.filter(
        (card) => card?.id !== action.payload
      )
    },
    clearTaskDeferred(state, action) {
      state[4].cardItems = state[4].cardItems.filter(
        (card) => card?.id !== action.payload
      )
    },
    completedTask(state, action) {
      state.map((column) =>
        column.cardItems.map((card) => {
          if (card.id === action.payload) {
            card.isCompleted = true
          }
        })
      )
    },
  },
})

export const {
  addTaskToday,
  addTaskTomorrow,
  addTaskUpThisWeek,
  addTaskByNextWeek,
  addTaskDeferred,
  clearTaskToday,
  clearTaskTomorrow,
  clearTaskUpThisWeek,
  clearTaskByNextWeek,
  clearTaskDeferred,
  completedTask,
} = boardBanSlice.actions

export default boardBanSlice.reducer
