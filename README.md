# Odd-jobs

## Used Libraries
* Express
* React
* Knex - Sqlite3
* Jest
* Redux
* SQLite/Postgres
* Auth0 - (in progress)

## How to run

### For local environment
#### Install NPM packages
```sh
npm i
```
#### Setup database
1. Create the example table
```sh
npm run knex migrate:latest
```
2. Add seed rows to the example table
```sh
npm run knex seed:run
```

#### Run the server
```sh 
npm run dev
```

And access it using a web browser [Localhost](http://localhost:3000/)

### For Sever environment

Build first 
```sh
npm run build
```
Then run the server
```sh
npm start
```

# Git workflow

1. Create a branch for each issue ticket from the dev branch   
You can use the issue ticket number  
e.g. devops-1, devops-1-configure-yml or 1-devops
2. Once the change is done
3. Go to the dev branch
```sh
git checkout dev
```
4. Pull in the dev branch
```sh
git pull
```
5. Go back to the issue branch and start merging with dev
```sh
git merge dev
```
6. Handle all the conflicts
7. Push from the issue branch
```
git push
```
8. Crate a pull request
9. After the pull request is approved and your branch is merged into dev,  
either 
* You can delete the branch safely  
or
* You can keep using it if you want

# Installed packages & components

## Client Side

1. React
1. Webpack
1. Babel
1. React Components

## Server Side

1. Node
1. Express
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
http://localhost:3000/#/example
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

## Deployment to Heroku
### New scripts added to Package.json
Heroku uses specific scripts named heroku-prebuild, heroku-postbuild and heroku-cleanup
* heroku-postbuild - This will be executed by Heroku after installation of dependencies and it will start the below two scripts
  * build-knex - This will create tables
  * build-webpack - This will build the webpack bundle file for client components
* heroku-cleanup - This will start any tasks needed after all the builds finished
