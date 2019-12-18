# producer_service

This is a boilerplate project for rest applications using Node.js, Express.js, TypeScript and Docker.

## What is this repository for?

    loyalty service.

    Version:- 1.0
    Git clone :-https://github.com/debrajpaul/kafka-express-typeScript-boilerplate.git

## How do I get set up?

    Set up all dependencies mentioned below
    Summary of set up:- Clone the file from repository and follow the "deployment instructions".

## Server Configuration:-

    Node 10 software (Ubuntu 18.04, Link:- https://nodejs.org/en/)
    MongoDB Server version: 4 (Ubuntu 18.04, link:- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## Dependencies

    All dependencies are listed in package.json file
    * In terminal go to your project directory
    * In terminal type "npm i" to add all dependencies.

## .env file (example)

```
PORT=7021
DEBUG=app,app:*
PROTOCOL=http
```

## curl http call (example)

```
curl -X GET \
  http://127.0.0.1:7021/producer-service/produce \
  -H 'Postman-Token: a993becc-56b5-4393-83ed-2837e4bbfecf' \
  -H 'cache-control: no-cache'
```

## Deployment instructions:-

    In terminal go to your project directory
    * Type "npm run watch"

## Who do I talk to?

    Debraj Paul
    contact info:- debraj.paul@dineout.co.in

## License

        Apache License
