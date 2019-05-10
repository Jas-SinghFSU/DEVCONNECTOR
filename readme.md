# Packages

- Express : Main web framework
- Express-validator : Data validation. When we make a post request to API and there's fields that need to be there but aren't, this helps.
- Bcryptjs: For password encryption.
- Config: For global variables (ex: default.json for mongodb)
- Gravatar: For profile avatars
- jsonwebtoken: We're using JWT and this helps with web tokens
- Mongoose: MongoDB helper
- Request: Helps us make http requests
- Uuid: Install in client. Generates a universal id for various uses

## Package Installation

```bash
npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request uuid
```

# Dev Dependencies

- Nodemon: Refreshes the server after saves
- Concurrently: Allows us to run our backend express server and front end react dev server with a single command

## Dev Dependencies Installation for Server

```bash
npm i -D nodemon concurrently
```

## Dev Dependencies Installation for Client (React)

Change directory to the client folder in the root directory. Then install dependencies.

```bash
cd client
npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment uuid
```

# Software

- Postman - For backend and api testing
- Node - Self explanitory
- Git - For version control

# React

```bash
npx create-react-app client
```

Run the command above to create a react app in the client folder.
The go back to the main project directory in the bash terminal by using

```bash
cd ..
```

Then in package.json, under "scripts" : {} add
"client": "npm start --prefix client" which will run it within the client folder.
"dev" : "concurrently \"npm run server\" \"npm run client\"" to run both the server and client concurrently

To run project, use

```bash
npm run dev
```

Add Proxy in package.json at the very end
{
"proxy": "http://localhost:5000"
}

Delete Files in client folder called:

- App.test.js
- index.css // And remove import reference from index.js
- logo.svg //Remove import reference from app.js
- serviceWorker.js // And remove import reference and any reference from index.js

# Database

Cluster hosted on www.mongodb.com .

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
