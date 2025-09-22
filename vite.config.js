import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Registration-Web-Application-for-Research-and-Development/',
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],
   

  
  },
})
