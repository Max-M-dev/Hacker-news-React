import React from "react";

export default function EntityCommentLogic(UI, props) {
	const propsForUI = {
		...props,
	};
	return UI(propsForUI);
}
