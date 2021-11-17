# Boilerplate 
Using
* Express
* React
* Handlebars
* Knex
* Handlebars
* Jest

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

# Installed packages & components

## Client Side

1. React
1. Webpack
1. Babel
1. React Components

## Server Side

1. Node
1. Express
1. Express-Handlebars
1. Server Side Routing

# NPM Scripts

## Test script
* test - testing using Jest
  
## For starting the app in development  
* dev - used for starting the client & server in the development environment  
* dev-client - run webpack with watch option to create bundle.js  
* dev-server - run server(Express)  

## For starting the app in production (e.g. Heroku) 
* start - used for starting the server(Express) in the production environment  
* build - run webpack without watch option to create bundle.js  

## For database operations
* knex - used for running knex commands

# Database - SQLite3

1. Create the example table
```sh
npm run knex migrate:latest
```
2. Add seed rows to the example table
```sh
npm run knex seed:run
```
The schema of the example table
| Column name | Type |
| ----------- | ----------- |
| id | integer |
| count | integer |
| title | string |
| description | string |

# Examples
## Client - Example React Components

```
http://localhost:3000/#/example4
```
### Example component 1
This shows how to use form in React

###  Example component 2
This shows how to get data from the API end point using superagent

## Server Side - Example Server Routes

### Server Routes
* A default route - Rendering using HBS
```
http://localhost:3000/examples
```
* A route accepts a parameter
```
http://localhost:3000/examples/param/<parameter>
```
* A route accepts a query string 
```
http://localhost:3000/examples/query?key=<value>
```
* A route accepts post data - userId and content
```html
<form action="http://localhost:3000/examples/posttest" method="post">
  <input name="userId"/>
  <input name="Content"/>
</form>
```

### Example API end point
URL to access the example end point which returns the records of the example table
```
http://localhost:3000/examples/api/
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
Client side test shows how to conduct snapshot testing and UI testing  
[Client side example.test.js](/client/tests/example.test.js)
### Refreshing the snapshot
Run the below command to update the snapshot

```sh
npm test -- -u
```

## Server Side Testing
Server side test shows how to use supertest and cheerio library for testing  
[Server side example.test.js](/server/tests/example.test.js)

API testing
[API testing example-api.test.js](/server/tests/example-api.test.js)

## To do 
* Heroku deployment - DB configuration/package.json
* Add Redux with testing
* Add authentication & authorization with JWT

## Stretch
* CSS - using TailwindCSS
* Refactoring package.json - adjust package versions
