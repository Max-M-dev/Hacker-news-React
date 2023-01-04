import { Typography } from "antd";
const { Title } = Typography;

function NewStoryItem(props) {
	const { title, date, countComment, score, author } = props;
	return (
		<div className="item-story">
			<Title level={2} className="item-story__title">
				{title}
			</Title>
			<div className="item-story__info">
				<span>Data: {date}</span>
				<span>Score: {score}</span>
				<span>author: {author}</span>
				<span>Count comment: {countComment}</span>
			</div>
		</div>
	);
}

export default NewStoryItem;
