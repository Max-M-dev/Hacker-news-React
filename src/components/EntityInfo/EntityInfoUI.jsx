import React from "react";
import {
	CommentOutlined,
	UserOutlined,
	CalendarOutlined,
} from "@ant-design/icons";
import "./EntityInfo.css";

export default function EntityInfoUi(props) {
	const { data, author, countComments, score, url } = props;
	return (
		<div className="info">
			{url && (
				<span>
					<a href={url} target="blank">
						Source
					</a>
				</span>
			)}
			{data && (
				<span>
					<CalendarOutlined /> {data}
				</span>
			)}
			{author && (
				<span>
					<UserOutlined /> {author}
				</span>
			)}
			{score && <span>Score: {score}</span>}
			{countComments && (
				<span>
					<CommentOutlined /> {countComments}
				</span>
			)}
		</div>
	);
}
