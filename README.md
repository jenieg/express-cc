1. npm init -y
2. npm i express
3. touch .gitignore
    - node_modules
    - .env
4. touch server.js
5. In `package.json` create scripts
    - `"start": "node server"`
    - `"dev": "node --watch server"` (built in alternative to nodemon)
    - use `npm run dev`
6. Explicity imply .env in `package.json`
    - `"dev": "node --watch --env-file=.env server"`
7. Use ES Modules in`package.json`
    - `"type": "module"`
8. npm i colors