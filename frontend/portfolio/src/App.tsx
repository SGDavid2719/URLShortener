import { useState } from "react";
import "./App.css";

function App() {
	const [longUrl, setLongUrl] = useState("");
	const [shortCode, setShortCode] = useState("");

	const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetch("/api/shorten", {
			method: "POST",
			body: longUrl,
			headers: {
				"Content-Type": "text/plain",
			},
		})
			.then((response) => response.json())
			.then((data) => setShortCode(data.shortCode))
			.catch((error) => console.error(error));
	};

	const redirectToShortUrl = (shortCode: string) => {
		fetch(`/api/${shortCode}`, {
			method: "GET",
		})
			.then((response) => response.text())
			.then((url) => {
				window.open(url);
			})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="url"
					value={longUrl}
					onChange={(e) => setLongUrl(e.target.value)}
					placeholder="Enter your URL"
					required
				/>
				<button type="submit">Shorten</button>
			</form>
			{shortCode && (
				<div>
					<p>
						Your shortened URL is:{" "}
						<button onClick={() => redirectToShortUrl(shortCode)}>
							{shortCode}
						</button>
					</p>
				</div>
			)}
		</div>
	);
}

export default App;
