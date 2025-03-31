// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // Load env file based on `mode` in the current working directory
  // const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tailwindcss(),
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react(),
    ],
    // define: {
    //   __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    //   "process.env": env,
    // },
  };
});
