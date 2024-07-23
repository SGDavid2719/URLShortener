import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";

import "./app.css";

import { useUrls } from "./hooks/useUrls";

import { URL } from "./interfaces/types";

function App() {
	const { urls, handleUrls } = useUrls();

	return (
		<div className="futuristic-container">
			<Table
				urls={urls}
				deleteById={(id: number) => handleUrls({ action: "REMOVE", id: id })}
			/>
			<hr />
			<Form
				addUrl={(newUrl: URL) => handleUrls({ action: "ADD", newUrl: newUrl })}
			/>
		</div>
	);
}

export default App;
