import { Typography } from "antd";
import { Link } from "react-router-dom";
import EntityInfo from "../EntityInfo/";
const { Title } = Typography;

function NewStoryItem(props) {
  const { idNews, title, time, countComments, score, author } = props;
  return (
    <div className="item-story">
      <Title level={2} className="item-story__title">
        <Link to={`/${idNews}`}>{title}</Link>
      </Title>
      <EntityInfo
        time={time}
        score={score}
        author={author}
        countComments={countComments}
      />
    </div>
  );
}

export default NewStoryItem;
