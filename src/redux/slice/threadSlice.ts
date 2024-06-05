// threadSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Thread {
  id: string;
  image: string;
  content: string;
  totalLikes: number;
  totalReplies: number;
  userId: number;
}

interface ThreadState {
  thread: Thread | null;
}

const initialState: ThreadState = {
  thread: null,
};

const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    SET_THREAD: (state, action: PayloadAction<Thread>) => {
      state.thread = action.payload;
    },
  },
});

export const { SET_THREAD } = threadSlice.actions;
export default threadSlice.reducer;