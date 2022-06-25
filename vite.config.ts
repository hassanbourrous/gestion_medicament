import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig()
	.withPlugin(vue)
    .merge({
        server: {
			host: "0.0.0.0",
            port: 3000
        }
    })
// export default defineConfig({
//     server: {
// 	    hmr: {
// 		    host: 'localhost',
// 		    protocol: 'ws'
// 	    }
//     }
// })
// .withPlugin(vue);



