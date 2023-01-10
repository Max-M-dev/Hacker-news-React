import { Link } from "react-router-dom";
import { Row, Col, Typography, Skeleton } from "antd";
import CommentBlock from "../commentsBlock";
import { RollbackOutlined } from "@ant-design/icons";
import EntityInfo from "../EntityInfo";
const { Title, Text, Paragraph } = Typography;

export default function ViewNewsUI({
	data,
	dataIsError,
	dataIsLoading,
	dataIsOk,
}) {
	/* 	if (typeof data !== "object") {
		return "No data";
	} */
	if (dataIsOk) {
		const {
			title,
			by,
			time,
			text = null,
			url,
			kids,
			descendants: countComments = 0,
		} = data;
		console.log(data);
		return (
			<>
				<Link to="/">
					<span>
						Home
						<RollbackOutlined />
					</span>
				</Link>
				<Row>
					<Col className="item-story">
						<Title level={1}>{title}</Title>
						<Paragraph>
							{text ? <p dangerouslySetInnerHTML={{ __html: text }} /> : ""}

							<EntityInfo
								time={time}
								author={by}
								url={url}
								countComments={countComments}
							/>
						</Paragraph>
					</Col>
				</Row>
				{countComments && (
					<Row>
						<Col>
							<CommentBlock listId={kids} />
						</Col>
					</Row>
				)}
			</>
		);
	} else if (dataIsLoading) {
		return <Skeleton active />;
	} else if (dataIsError) {
		return <Text>Ошибка получение данных</Text>;
	} else {
		return <Text>Неизвестная ошибка</Text>;
	}
}
