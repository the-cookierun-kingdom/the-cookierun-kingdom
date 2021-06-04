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
    return response;
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
        state.list = action.payload;
      });
  },
});

export const selectCoolTime = (state: RootState) => state.coolTime.value;
export const selectCoolTimeList = (state: RootState) => state.coolTime.list;

export default coolTimeSlice.reducer;

