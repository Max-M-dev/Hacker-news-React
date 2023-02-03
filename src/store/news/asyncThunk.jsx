import { createAsyncThunk } from "@reduxjs/toolkit";

import server from "../../controller/server";

import {
	prependEntityNews,
	appendEntityNews,
	prependIds,
	saveId,
	setOffset,
	correctionOffset,
} from "./index";

export const update = createAsyncThunk(
	"news/updateNews",
	async (_, { getState, dispatch, rejectWithValue }) => {
		console.log("run > news/updateNews");
		const responseIdsNews = await server.getNewStoriesIds();
		if (!responseIdsNews.ok) {
			console.error("Error request getNewStoriesIds");
			rejectWithValue("Error request getNewStoriesIds");
			return;
		}
		const responseIdsNewsValue = await responseIdsNews.json();
		if (responseIdsNewsValue.length === 0) return;
		const { news: storeNews } = getState((store) => store.news);
		//Init
		if (storeNews.listIdsNews.length === 0) {
			console.log("run > news/updateNews > init store");
			dispatch(saveId(responseIdsNewsValue));
			const offsetContent = responseIdsNewsValue.slice(0, storeNews.offset);
			const responseEntity = await server.items(offsetContent);
			const responseEntityValue = await responseEntity;
			dispatch(prependEntityNews(responseEntityValue));
		} else if (responseIdsNewsValue[0] !== storeNews.listIdsNews[0]) {
			// phase update
			console.log("run > news/updateNews > phase update store");
			const firstLocalId = storeNews.listIdsNews[0];
			const newIds = [];
			for (let i = 0; i < responseIdsNewsValue.length; i++) {
				if (firstLocalId === responseIdsNewsValue[i]) {
					break;
				}
				newIds.push(responseIdsNewsValue[i]);
			}
			// insert new ids to store
			dispatch(prependIds(newIds));
			const entityFromNewIds = await server.items(newIds);
			// insert new entity to store
			dispatch(prependEntityNews(entityFromNewIds));

			dispatch(correctionOffset(newIds.length));
		}
	}
);

const operationNextRenderNews = async (_, { getState, dispatch }) => {
	const {
		news: { listIdsNews, offset, countDisplayItems },
	} = getState((state) => state.news);
	console.log(`operationNextRenderNews`);
	const nextIdsRender = listIdsNews.slice(offset, offset + countDisplayItems);
	const entityFromNextIds = await server.items(nextIdsRender);
	dispatch(appendEntityNews(entityFromNextIds));
	dispatch(setOffset(offset + countDisplayItems));
};

export const nextRenderNews = createAsyncThunk(
	"news/nextRenderNews",
	operationNextRenderNews
);
