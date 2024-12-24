import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    filter: 'all' // all, regular, business
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addUser, deleteUser, updateUser, setFilter } = userSlice.actions;
export default userSlice.reducer; 