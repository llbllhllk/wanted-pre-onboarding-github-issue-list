import { issues } from './issues';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { issues: issues.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
