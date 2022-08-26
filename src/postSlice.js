import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('post/fetch', 
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        return data;
    }
)

const initialState = {
    postList: [],
    fetchingPost: false,
    errorMessage: null,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.postList = action.payload;
            state.fetchingPosts = false;
        },
        [fetchPosts.pending]: (state) => {
            state.fetchingPost = true;
        },
        [fetchPosts.rejected]: (state) => {
            state.fetchingPost = false;
            state.errorMessage = 'Somthing went wrong ...';
        }
    }
})

export default postSlice.reducer;