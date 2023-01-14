import { Col, Row, Skeleton } from "antd";
import NewStoryItem from "../newStory_Item";
import Refresh from "../refresh";
export default function NewStoryUI(props) {
  const { reloadDataList, listNews, spinRefresh } = props;
  return (
    <>
      <Row>
        <Col span={2} offset={22}>
          <Refresh spin={spinRefresh} onClick={() => reloadDataList()} />
        </Col>
      </Row>
      <div className="new-story">
        <div className="new-story__list">
          {Array.isArray(listNews) && listNews.length ? (
            listNews.map((item) => {
              const { title, time, descendants, id, by, score } = item;
              return (
                <NewStoryItem
                  key={id}
                  idNews={id}
                  title={title}
                  time={time}
                  author={by}
                  countComments={descendants}
                  score={score}
                />
              );
            })
          ) : listNews === "loading" ? (
            <Skeleton active />
          ) : (
            "Error"
          )}
        </div>
      </div>
    </>
  );
}
