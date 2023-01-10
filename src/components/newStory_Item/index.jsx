import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

function NewStoryItem(props) {
	const { idNews, title, date, countComments, score, author } = props;
	return (
		<div className="item-story">
			<Title level={2} className="item-story__title">
				<Link to={`/${idNews}`}>{title}</Link>
			</Title>
			<div className="item-story__info info">
				<span>Data: {date}</span>
				<span>Score: {score}</span>
				<span>Author: {author}</span>
				<span>Count comments: {countComments}</span>
			</div>
		</div>
	);
}

export default NewStoryItem;
