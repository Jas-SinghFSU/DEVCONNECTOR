# Packages

- Express : Main web framework
- Express-validator : Data validation. When we make a post request to API and there's fields that need to be there but aren't, this helps.
- Bcryptjs: For password encryption.
- Config: For global variables (ex: default.json for mongodb)
- Gravatar: For profile avatars
- jsonwebtoken: We're using JWT and this helps with web tokens
- Mongoose: MongoDB helper
- Request: Helps us make http requests


## Package Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
```

# Dev Dependencies
- Nodemon: Refreshes the server after saves
- Concurrently: Allows us to run our backend express server and front end react dev server with a single command

## Dev Dependencies Installation

```bash
npm i -D nodemon concurrently
```

#Database

Cluster hosted on www.mongodb.com .

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)