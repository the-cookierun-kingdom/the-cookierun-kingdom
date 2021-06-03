import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import { fetchCoolTime } from './coolTimeAPI';

export interface CoolTimeState {
  list: any[];
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CoolTimeState = {
  list: [],
  value: 0,
  status: 'idle',
};

export const requestCoolTimeAsync = createAsyncThunk(
  'coolTime/fetchCoolTime',
  async () => {
    const response = await fetchCoolTime();
    return response.data;
  }
);

export const coolTimeSlice = createSlice({
  name: 'coolTime',
  initialState,
  reducers: {
    // selectCoolTime: (state, action: PayloadAction<number>) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestCoolTimeAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(requestCoolTimeAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectCoolTime = (state: RootState) => state.coolTime.value;

export default coolTimeSlice.reducer;

