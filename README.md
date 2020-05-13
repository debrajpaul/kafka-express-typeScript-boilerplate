# Kafka express typeScript boilerplate

  This is an open source project to create boiler plate code set up for a simple TypeScript Node JS server.
        * Apache Kafka to make internal communication more simpler
        * Swagger has also been implemented for easier documentation.
        * Jest set up is also there to support testing.
        * Docker set up has been made to make life easier.
        * Inputs to REST API can be validated here using ajv.
        * Mongoose is here to help you with the database schema and connection.

## What is this repository for?

    produce and consumer service.

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

## .env file (producer and comsumer respectively)

```
PORT=7021
DEBUG=app,app:*
PROTOCOL=http

PORT=8021
DEBUG=app,app:*
PROTOCOL=http
```

## curl http call (producer and comsumer respectively)

```
curl -X GET \
  http://127.0.0.1:7021/producer-service/produce \
  -H 'Postman-Token: a993becc-56b5-4393-83ed-2837e4bbfecf' \
  -H 'cache-control: no-cache'

curl -X GET \
  http://127.0.0.1:8021/consumer-service/consumer \
  -H 'Postman-Token: d135735f-c627-4ed9-ab26-49dd48a61417' \
  -H 'cache-control: no-cache'
```

## Deployment instructions:-

    In terminal go to your project directory
    * Type "npm run watch"

## Who do I talk to?

    Debraj Paul
    contact info:- pauldebraj7@gmail.com

## License

        Apache License
