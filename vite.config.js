import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // https: {
    //   key: fs.readFileSync("./key.pem"), // Path to your key.pem file
    //   cert: fs.readFileSync("./cert.pem"), // Path to your cert.pem file
    // },
  },
  plugins: [react()],
});
