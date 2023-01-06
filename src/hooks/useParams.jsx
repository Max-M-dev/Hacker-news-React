import React from "react";

import { __RouterContext as RouterContext } from "react-router-dom";

const useContext = React.useContext;
export default function useParams() {
	const match = useContext(RouterContext).match;
	return match ? match.params : {};
}
