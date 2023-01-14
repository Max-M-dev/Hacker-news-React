import { configureStore } from "@reduxjs/toolkit";
// import newsReducer from "./reducer/news";
import newsReducer from "./news";

const store = configureStore({
  reducer: { news: newsReducer },
});

export default store;
