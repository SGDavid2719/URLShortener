import { URL } from "../../interfaces/types";
import { Button } from "../Button/Button";
import "./table.css";

interface Table {
	urls: URL[];
	deleteById: (id: number) => void;
}

export function Table({ urls, deleteById }: Table) {
	// Functions
	const deleteUrl = (id: number) => {
		fetch(`/api/urls/${id}`, {
			method: "DELETE",
		})
			.then((_) => {
				deleteById(id);
			})
			.catch((error) => {
				console.error("There was an error deleting the URL!", error);
			});
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
			<h1>All URLs</h1>
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
							<td>
								<Button onClick={() => redirectToShortUrl(url.shortCode)}>
									{url.shortCode}
								</Button>
							</td>
							<td>
								<Button onClick={() => deleteUrl(url.id)}>Delete</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
