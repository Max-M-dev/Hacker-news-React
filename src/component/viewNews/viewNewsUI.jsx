import { Link } from "react-router-dom";
export default function ViewNewsUI({ data }) {
	if (typeof data !== "object") {
		return "No data";
	}
	const { title, by } = data;
	return (
		<>
			<Link to="/">
				<span>{document.location.pathname}</span>
			</Link>

			<span>
				{title} - {by}
			</span>
		</>
	);
}
