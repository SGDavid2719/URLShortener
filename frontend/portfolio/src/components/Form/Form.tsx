import { useState } from "react";
import { Button } from "../Button/Button";
import "./form.css";
import { Input } from "../Input/Input";
import { URL } from "../../interfaces/types";

interface Form {
	addUrl: (newUrl: URL) => void;
}

export function Form({ addUrl }: Form) {
	// States
	const [longUrl, setLongUrl] = useState("");
	const [shortCode, setShortCode] = useState("");

	// Functions

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
			.then(({ shortCode, longUrl, id }) => {
				setShortCode(shortCode);
				addUrl({
					id: id,
					longUrl: longUrl,
					shortCode: shortCode,
				});
			})
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
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<Input
					name="longUrl"
					type="url"
					value={longUrl}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setLongUrl(e.target.value)
					}
					placeholder="Enter your URL"
					required
				/>
				<Button type="submit">Shorten</Button>
			</form>
			{shortCode && (
				<div className="response-container">
					<p>Your new shortened URL is:</p>
					<Button onClick={() => redirectToShortUrl(shortCode)}>
						{shortCode}
					</Button>
				</div>
			)}
		</div>
	);
}
