# study-react

## How to run

### For Development

```sh 
npm run dev
```

And access it using a web browser [Localhost](http://localhost:3000/)

### For Production

Build first 
```sh
npm run build
```
Then run the server
```sh
npm start
```

## Installed packages & components

### Client Side

1. React
1. Webpack
1. Babel
1. React Components

### Server Side

1. Node
1. Express
1. Express-Handlebars
1. Server Side Routing

## NPM Scripts

Test script
* test - testing using Jest
  
For starting the app in development  
* dev - used for starting the server in the development environment  
* dev-client - run webpack with watch option to create bundle.js  
* dev-server - run server(Express)  

For starting the app in production  
* start - used for starting the server(Express) in the production environment  
* build - run webpack without watch option to create bundle.js  

# Database - SQLite3

1. Create the example table
```sh
npm run knex migrate:latest
```
2. Add seed rows to the example table
```sh
npm run knex seed:run
```
The shcema of the example table
| Column name | Type |
| ----------- | ----------- |
| id | integer |
| count | integer |
| title | string |
| description | string |

## API end point

URL for testing the example end point which returns the records of the example table
```
http://localhost:3000/example/data/
```

# Testing

* Used libraries
1. Jest is the core part
1. Supertest for testing HTTP/API endpoints
1. Cheerio: server side JQuery implementation
1. Testing-library for testing UI components(React)
* Test file locations
1. Client-side: client/tests
1. Server-side: server/tests
* Running tests
```sh
npm run test
```
## Client Side Testing
### Snapshot Testing
Updating snapshot

```sh
npm test -- -u
```

## Server Side Testing

## To Do List

* Refactoring package.json - adjust versions
* Server Side API endpoints - revisit
* Test for React components(add another example component) - revise to remove the warning
* Testing backend with injected DB - before/after in Test
* Testing routing/json from API with injected backend
