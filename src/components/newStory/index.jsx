import NewStoryUI from "./newStoryUI";
import NewStory from "./newStory.jsx";

export default function LogicWithUi(props) {
	return NewStory(NewStoryUI, props);
}
