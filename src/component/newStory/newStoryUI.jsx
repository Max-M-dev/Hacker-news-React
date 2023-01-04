import { Card, Typography } from "antd";
const { Title } = Typography;
export default function NewStoryUI(props) {
	return (
		<div className="new-story">
			<div className="new-story__list">
				<div className="new-story__item item-story">
					<Title level="2" className="item-story__title">
						Ask HN: The Arc Effect
					</Title>
					<div className="item-story__info">
						<span>Source: wikipeda.com</span>
						<span>Data: 12-12-2023</span>
						<span>Count comment: 32</span>
					</div>
				</div>
				<div className="new-story__item item-story">
					<Title level="2" className="item-story__title">
						Ask HN: The Arc Effect
					</Title>
					<div className="item-story__info">
						<span>Source: wikipeda.com</span>
						<span>Data: 12-12-2023</span>
						<span>Count comment: 32</span>
					</div>
				</div>
			</div>
		</div>
	);
}
