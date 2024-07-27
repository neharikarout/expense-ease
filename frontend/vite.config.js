import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port:3000,
		proxy: import.meta.env.MODE === "development" ? {
			'/graphql': {
			  target: 'http://localhost:4000',
			  changeOrigin: true,
			  rewrite: (path) => path.replace(/^\/graphql/, ''),
			},
		  } : undefined,
	},
});
