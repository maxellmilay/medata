import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  mediaTypes: String[];
}

const initialState: InitialStateType = {
  mediaTypes: [],
};

export const counterSlice = createSlice({
  name: 'mediaType',
  initialState,
  reducers: {
    FETCH_MEDIA_TYPE: (state, action) => {},
  },
});

export const { FETCH_MEDIA_TYPE } = counterSlice.actions;

export default counterSlice.reducer;
