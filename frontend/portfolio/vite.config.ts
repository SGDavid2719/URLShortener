import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		define: {
			"process.env.VITE_REACT_APP_API_URL": JSON.stringify(
				env.VITE_REACT_APP_API_URL
			),
		},
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: "http://localhost:8080",
					changeOrigin: true,
				},
			},
		},
	};
});
