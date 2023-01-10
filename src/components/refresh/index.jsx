import { ReloadOutlined } from "@ant-design/icons";
import style from "./refresh.module.css";
export default function Refresh({ spin, onClick }) {
	return (
		<ReloadOutlined spin={spin} onClick={onClick} className={style.refresh} />
	);
}
