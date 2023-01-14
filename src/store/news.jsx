import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../controller/server"

const initState = {
  listEntityNews: [],
  listIdsNews: [],
  offset:0,
  countDisplayItems: 10
};

const getIds = createAsyncThunk("news/getIds",async ()=>{
		return await server
			.getNewStoriesId();
});
const getContentByIds = createAsyncThunk(("news/contentByIds",async (ids)=>{
  return await server.items(ids);
}))

export const update = createAsyncThunk("news/updateNews",async (_,{getState})=>{
  const responseIdsNews = await getIds(); 
  const {news:storeNews} = getState();
  console.log(storeNews);
  if(storeNews.listIdsNews.length === 0){
    console.log("Нету id записей в состояние. Добавляем");
  }else{
    console.log("Есть ид записи, Append");
  }
});

const store = createSlice({
  name: "news",
  initialState: initState,
  reducers: {
    append: (state, action) => {},
    saveId: (state, action) => {},
    prepend: (state, action) => {},
    refresh: (state, action) => {},

    reset: (state, action) => {},
  },
  extraReducers:{

  },
});

export const { append, prepend, refresh, reset } = store.actions;

export default store.reducer;
