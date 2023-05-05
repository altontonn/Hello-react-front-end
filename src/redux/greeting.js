import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_URL = 'http://127.0.0.1:3000/api/v1/messages';

export const getRandomGreeting = createAsyncThunk('greeting/message/FETCH_DATA', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data.message;
});

const initialState = {
  greeting: '',
  status: '',
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        greeting: action.payload,
      }))
      .addCase(getRandomGreeting.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;
