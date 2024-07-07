import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    host: '0.0.0.0',  // This allows the server to be accessible externally
    port: 5173,       // Ensure this port matches your Docker run command
  }
})
