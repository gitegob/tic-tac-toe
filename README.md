# Tic Tac Toe API

## Description

This is an api that plays the game of Tic Tac Toe.
The app can be accessed at https://ticctactoeapi.herokuapp.com/

## Usage instructions

- The server always plays as o and the user plays as x
- Send the move via the `board` parameter like http://localhost:3000?board=+xxo++o++
- You get back a string representation of the new board with o's, x's and spaces (eg: `oxxo  o  `)

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# Port 3000
```

## Running in a docker container

```bash
# Build the image
$ docker build -t tic-tac-toe .

# Run the image in a container
$ docker run -d -p 3000:3000 --name=tic-tac-toe tic-tac-toe

# Port 3000
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Stay in touch

- Author - [Brian Gitego](mailto:gitegob@gmail.com)
