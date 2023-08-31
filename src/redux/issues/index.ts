import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGetIssues } from 'api/issues';
import { Issue } from 'types';

export interface IssuesState {
  data: Issue[];
  organization: string;
  repository: string;
  page: number;
  loading: string;
}

export interface GetIssueOptions {
  organization: string;
  repository: string;
  page: number;
}

export const fetchAllIssues = createAsyncThunk(
  'get/fetchIssues',
  async ({ organization, repository, page }: GetIssueOptions) => {
    return await fetchGetIssues(organization, repository, page);
  },
);

const initialState: IssuesState = {
  data: [],
  organization: 'facebook',
  repository: 'react',
  page: 1,
  loading: 'idle',
};

export const issues = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllIssues.pending.type]: (state: IssuesState) => {
      state.loading = 'pending';
    },
    [fetchAllIssues.fulfilled.type]: (state: IssuesState, action: PayloadAction<Issue[]>) => {
      state.data = [...(state.data || []), ...(action.payload || [])];
      state.loading = 'fulfilled';
      state.page += 1;
    },
    [fetchAllIssues.rejected.type]: (state: IssuesState) => {
      state.loading = 'rejected';
    },
  },
});
