import EntityCommentUI from "./EntityCommentUI";
import EntityCommentLogic from "./EntityCommentLogic";

export default function EntityComment(props) {
	return EntityCommentLogic(EntityCommentUI, props);
}
