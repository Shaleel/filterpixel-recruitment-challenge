**Steps to replicate the project**

- Installing dependencies
  - for frontend run the following commands
    `cd front-end && npm i`
  - for backend simply run `npm i` in the root directory
- Setting up the database
  - Add the db credentials in the env file as mentioned in the `sample.env` file
    -Change the db credentials accordingly

```
ACCESS_TOKEN_SECRET = accesstokensecret

DB_USERNAME = root

DB_PASSWORD = ""

DB_NAME = filterpixel

DB_HOST = localhost

PORT = 8000
```

- Running in development

  - frontend :`cd front-end && npm run dev`
  - backend : `npm run dev`
    Front end application will start at `port:5173` & backend application will start at `port:8000`

- Running in production
  `npm run build-frontend` then run `npm start`.
  The application will start at `port:8000`
