# ReactJS Starter Setup by Viery

1. fontawesome icon
2. toaster
3. import aliases
4. atomic design
5. tailwindCSS
6. react-router-dom

# How to Explore?

1. clone this repository

   ```
   git clone https://github.com/vierynugroho/setup-react-project-by-Viery.git .
   ```

2. running this command for install used dependencies
   ```
   npm install
   ```
3. running this command for exploring code with awesome UI experience

   ```
   npm run dev
   ```

# Config Aliases Import for ReactJS by Viery

1. create file `jsconfig.json` in root folder
2. paste this code to `jsconfig.json`

   ```
   {
   	"compilerOptions": {
   		// ...
   		"baseUrl": ".",
   		"paths": {
   			"./": ["src"],
   			"@components/*": ["src/components/*"],
   			"@pages/*": ["src/pages/*"]
   		}
   		// ...
   	}
   }
   ```

3. paste this code to `vite.config.js`

   ```

   import path from 'path';
   import react from '@vitejs/plugin-react';
   import { defineConfig } from 'vite';
   import { dirname } from 'path';
   import { fileURLToPath } from 'url';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = dirname(\_\_filename);

   export default defineConfig({
      plugins: [react()],
      resolve: {
         alias: {
      		'@components': path.resolve(__dirname, 'src/components/'),
      		'@pages': path.resolve(__dirname, 'src/pages/'),
         },
      },
   });

   ```

4. run this command to fix error paths

   ```

   npm i -D @types/node

   ```

5. now you can use import aliases. example

   ```

   import Button from '@components/elements/Button';

   ```
