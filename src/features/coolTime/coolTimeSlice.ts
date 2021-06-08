import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import { fetchCoolTime } from './coolTimeAPI';

export interface StartCool {
  time: string;
  chance?: number;
  desc?: string;
}

export interface CoolTimeRow {
  cool: string;
  jewel_no: number | null;
  level_10: number | null;
  level_11: number | null;
  level_12: number | null;
}

export interface CoolTime {
  id: string;
  type: string;
  heroes: string[];
  start_cool: StartCool[];
  list: CoolTimeRow[];
}

export interface CoolTimeState {
  list: CoolTime[];
  selectedType: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CoolTimeState = {
  list: [],
  selectedType: '',
  status: 'idle',
};

export const requestCoolTimeAsync = createAsyncThunk<CoolTime[]>(
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
    selectCoolTime: (state, action: PayloadAction<string>) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestCoolTimeAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(requestCoolTimeAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
        state.selectedType = action.payload[0].id;
      });
  },
});

export const { selectCoolTime } = coolTimeSlice.actions;

export const selectedType = (state: RootState) => state.coolTime.selectedType;
export const selectedCoolTime = (state: RootState) => state.coolTime.list.find(ct => ct.id === state.coolTime.selectedType);
export const tabList = (state: RootState) => state.coolTime.list.map(({ id, type }) => ({ id, type }));

export default coolTimeSlice.reducer;

