# express-api-builder
this is a small, far away from best practice, cli node module which allows you to use `create-express-app test` which creates an folder named test with an fully functional express js application inside.


## installation
- clone repository
- run npm i -g < path to the cloned repository >

this installs the package globally so the command can be used everywhere

## how to
- move to your project directory
- run `create-express-app test`
- move inside test dir
- run the init.sh file or the following commands (same as init.sh)
```
npm init -y
npm i express dotenv node-fetch
code .
```
 this install all packages and opens dir in vscode
- run `node ./server/app.js`
- this starts an app on http://localhost:42111

## Routes/Parameter
- routes available
    - / <- returns "im alife" message
    - /api/*  <- return "api im alife" message
- command parameter
    - `create-express-app string string,string,string`
        - first string is folder name
        - second string is comma seperated node module names
            - by default using "express dotenv node-fetch"


## structure
- main app is "/server/app.js"
    - implements apirouter "/server/router/api.js"
- "/helper/Response.js" contains very very small object which helps building same responses over all my projects