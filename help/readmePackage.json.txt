4️⃣ Integración práctica en package.json

Puedes dejar ambos modos listos en tu package.json así:

{
  "scripts": {
    "dev": "npx ts-node src/test/procesarCompra.ts",
    "build": "npx tsc",
    "start": "node dist/test/procesarCompra.js"
  }
}


Así podrás usar:

npm run dev     # modo desarrollo (directo con ts-node)
npm run build   # compila TypeScript a JS
npm run start   # ejecuta el build compilado