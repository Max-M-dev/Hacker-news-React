import { linkWithVersion } from "./config";
import request from "../controller/request";
import { timeConverter } from "../utils/time";

export async function getItem(id) {
  const response = await request(`${linkWithVersion}item/${id}/.json`);
  return response;
}

export async function getItems(ids) {
  const promiseRequestListId = ids.map((id) => getItem(id));

  const listPromiseFulfilled = await Promise.allSettled(promiseRequestListId)
    .then((responseAll) =>
      responseAll.filter((response) => response.status === "fulfilled")
    )
    .then((fulfilledList) =>
      fulfilledList.map((response) => response.value.json())
    );

  const listValues = Promise.allSettled(listPromiseFulfilled).then((list) =>
    list.map((data) => {
      return data.value;
    })
  );
  return listValues;
}

export async function getNewStoriesIds() {
  return await request(`${linkWithVersion}newstories.json`);
}

export async function getNewStories(limit = 5) {
  if (!(typeof limit === "number")) {
    throw new Error("getNewStories args 'limit' is not number");
  }

  let listIdNewStories = await getNewStoriesIds().then((response) =>
    response.json()
  );
  if (limit > 0) {
    listIdNewStories = listIdNewStories.slice(0, limit);
  }

  const listValuesNews = getItems(listIdNewStories).then((list) =>
    list.map((data) => {
      data.date = timeConverter(data.time);
      return data;
    })
  );
  return listValuesNews;
}

export async function getMaxItemId() {
  return await request(`${linkWithVersion}maxitem.json`);
}
