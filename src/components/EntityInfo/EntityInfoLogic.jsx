import React from "react";
import { timeConverter } from "../../utils/time";

export default function EntityInfoLogic(UI, props) {
	const propsForUI = {
		...props,
	};
	if (props?.time) {
		propsForUI.data = timeConverter(props.time);
	}
	return UI(propsForUI);
}
