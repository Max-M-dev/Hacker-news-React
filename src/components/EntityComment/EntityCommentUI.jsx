import React from "react";
import "./EntityComment.css";
import EntityInfo from "../EntityInfo";

export default function EntityCommentUI(props) {
	const { text, author, time, countComments } = props;
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: text }} />
			<EntityInfo author={author} time={time} countComments={countComments} />
		</div>
	);
}
