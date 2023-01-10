import { useState, useEffect } from "react";
import server from "../../controller/server";
import { useCallback } from "react";
import EntityComment from "../EntityComment";
export default function CommentBlock(ui, props) {
	const { listId } = props;
	const [data, setData] = useState([]);

	async function getComments(ids) {
		const respone = await server.items(ids);
		return respone;
	}
	function prepareForTree(listData) {
		return listData.map((item, index) => {
			const result = {
				title: (
					<EntityComment
						text={item.text}
						author={item.by}
						time={item.time}
						countComments={item?.kids ? item.kids.length : 0}
					/>
				),
				key: index,
				isLeaf: !item?.kids,
			};
			if (item?.kids) {
				result.kids = item.kids;
			}
			return result;
		});
	}
	const loadCommentForTree = (ids) => {
		return getComments(ids).then(prepareForTree);
	};
	useEffect(() => loadCommentForTree(listId).then(setData), []);
	const updateData = (listData, key, children) => {
		return listData.map((item) => {
			if (item.key === key) {
				return {
					...item,
					children,
				};
			}
			if (item.children) {
				return { ...item, children: updateData(item.children, key, children) };
			}
			return item;
		});
	};

	const onLoadData = ({ key, children, kids, ...other }) => {
		console.log(kids);
		if (children) {
			console.log("Yes children");
			return Promise.resolve();
		}
		return loadCommentForTree(kids).then((listComments) => {
			setData(updateData(data, key, forEachAddKey(listComments, key)));
		});
	};

	function forEachAddKey(list, key) {
		return list.map((item, index) => {
			item.key = `${key}-${index}`;
			return item;
		});
	}
	const propsForUi = {
		...props,
		onLoadData,
		data,
	};
	return ui(propsForUi);
}
