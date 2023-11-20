import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	//base: './',
	plugins: [
		react()
		// ViteImageOptimizer({
		// 	svg: {
		// 		quality: 80
		// 	},
		// 	png: {
		// 		// https://sharp.pixelplumbing.com/api-output#png
		// 		quality: 80
		// 	},
		// 	jpeg: {
		// 		// https://sharp.pixelplumbing.com/api-output#jpeg
		// 		quality: 80
		// 	},
		// 	jpg: {
		// 		// https://sharp.pixelplumbing.com/api-output#jpeg
		// 		quality: 80
		// 	},
		// 	tiff: {
		// 		// https://sharp.pixelplumbing.com/api-output#tiff
		// 		quality: 80
		// 	},
		// 	// gif does not support lossless compression
		// 	// https://sharp.pixelplumbing.com/api-output#gif
		// 	gif: {},
		// 	webp: {
		// 		// https://sharp.pixelplumbing.com/api-output#webp
		// 		lossless: true
		// 	},
		// 	avif: {
		// 		// https://sharp.pixelplumbing.com/api-output#avif
		// 		lossless: true
		// 	}
		// })
	],
	resolve: {
		alias: { "~": path.resolve(__dirname, "./src") }
	}
});
