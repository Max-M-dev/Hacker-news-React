import { createSlice } from "@reduxjs/toolkit";

const initState = {
	listEntityNews: [],
	listIdsNews: [],
	offset: 10,
	countDisplayItems: 10,
};

const store = createSlice({
	name: "news",
	initialState: initState,
	reducers: {
		appendEntityNews(state, { payload }) {
			if (payload === 0) return state;
			state.listEntityNews = [...state.listEntityNews, ...payload];
		},
		prependEntityNews: (state, { payload }) => {
			state.listEntityNews = [...payload, ...state.listEntityNews];
		},
		correctionOffset(state, action) {
			state.offset += action.payload;
		},
		setOffset(state, { payload }) {
			state.offset = payload;
		},
		prependIds: (state, { payload }) => {
			state.listIdsNews = [...payload, ...state.listIdsNews];
		},
		saveId: (state, action) => {
			state.listIdsNews = action.payload;
		},
		refresh: (state, action) => {},

		reset: (state, action) => {},
	},
});

export const {
	reset,
	refresh,
	saveId,
	prependIds,
	setOffset,
	correctionOffset,
	prependEntityNews,
	appendEntityNews,
} = store.actions;
export { update, nextRenderNews } from "./asyncThunk";
export default store.reducer;
