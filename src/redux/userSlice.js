import axios from 'axios';

/* 
	use redux-thunk in order to make api async call 
	(to use pending, fulfilled and rejected)
*/
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const updateUser = createAsyncThunk('users/update', async (user) => {
	const res = await axios.post(
		`http://localhost:8800/api/users/1/update`,
		user,
	);

	return res.data;
});

export const deleteUser = createAsyncThunk('users/update', async (user) => {
	const res = await axios.post(
		`http://localhost:8800/api/users/1/update`,
		user,
	);

	return res.data;
});

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userInfo: {
			name: 'merry',
			email: 'merry@gmail.com',
		},
		pending: null,
		error: false,
	},
	reducers: {},
	extraReducers: {
		[updateUser.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[updateUser.fulfilled]: (state, action) => {
			state.pending = false;
			state.error = false;
			state.userInfo = action.payload;
		},
		[updateUser.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
		[deleteUser.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[deleteUser.fulfilled]: (state, action) => {
			state.pending = false;
			state.error = false;
			state.userInfo = action.payload;
		},
		[deleteUser.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export default userSlice.reducer;
