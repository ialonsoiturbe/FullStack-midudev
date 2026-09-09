import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//Configura Vite para usar el plugin de React con SWC
export default defineConfig({
  plugins: [react()],
})