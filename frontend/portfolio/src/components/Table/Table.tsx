import { useState, useEffect } from "react";
import { URL } from "../../interfaces/types";

export function Table() {
	// States
	const [urls, setUrls] = useState<URL[]>([]);

	// UseEffects
	useEffect(() => {
		fetch("/api/urls", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setUrls(data))
			.catch((error) => console.error(error));
	}, []);

	// Functions
	const deleteUrl = (id: number) => {
		fetch(`/api/urls/${id}`, {
			method: "DELETE",
		})
			.then((_) => {
				setUrls(urls.filter((url) => url.id !== id));
			})
			.catch((error) => {
				console.error("There was an error deleting the URL!", error);
			});
	};

	return (
		<div>
			<h2>All URLs</h2>
			<table>
				<thead>
					<tr>
						<th>Long URL</th>
						<th>Short Code</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{urls.map((url) => (
						<tr key={url.id}>
							<td>{url.longUrl}</td>
							<td>{url.shortCode}</td>
							<td>
								<button onClick={() => deleteUrl(url.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
