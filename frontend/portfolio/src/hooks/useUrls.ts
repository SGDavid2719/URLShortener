import { useEffect, useState } from "react";
import { URL } from "../interfaces/types";

export function useUrls() {
	// States
	const [urls, setUrls] = useState<URL[]>([]);

	// UseEffects
	useEffect(() => {
		fetch(`${process.env.VITE_REACT_APP_API_URL}/urls`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => setUrls(data))
			.catch((error) => console.error(error));
	}, []);

	// Functions
	const handleUrls = ({
		action,
		id,
		newUrl,
	}: {
		action: "ADD" | "REMOVE";
		id?: number;
		newUrl?: URL;
	}) => {
		if (action === "ADD") {
			setUrls((prevState) => (newUrl ? [...prevState, newUrl] : prevState));
		} else {
			setUrls((prevState) => prevState.filter((url) => url.id !== id));
		}
	};

	return { urls, handleUrls };
}
