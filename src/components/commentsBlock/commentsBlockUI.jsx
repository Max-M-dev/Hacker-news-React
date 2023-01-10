import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function CommentBlockUI(props) {
	const { data, onLoadData } = props;
	return (
		<Tree
			loadData={onLoadData}
			showLine
			switcherIcon={<DownOutlined />}
			treeData={data}
		/>
	);
}
