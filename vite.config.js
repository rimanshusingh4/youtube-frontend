import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8000/api/v1',
  //     '/users': 'http://localhost:8000/api/v1',
  //     'video': 'http://localhost:8000/api/v1'
  //   }
  // }
})
