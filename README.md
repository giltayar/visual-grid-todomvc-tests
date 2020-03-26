# Visual Grid TodoMVC Storybook and Cypress Tests

![build and test](https://github.com/giltayar/visual-grid-todomvc-tests/workflows/build%20and%20test/badge.svg)

This repository contains:

* A complete implementation of TodoMVC (React+Redux)
* Cypress and Storybook tests that visually test it using the Applitools Visual Grid.

## Installation

Clone this repo, then run:

```sh
npm install
```

## Source Code

* The source code for the TodoMVC app can be found in [`src`](src).
* The source code for the TodoMVC storybook can be found in
[`src/stories`](src/stories).
* The source code for the Cypress Eyes test can be found in
[`cypress/integration/todomvc_spec.js`](cypress/integration/todomvc_spec.js).

## Running the TodoMVC app

To view the TodoMVC app, run:

```sh
npm start
```

and open <http://localhost:3000> (if the browser wasn't already opened for you).

## Viewing the Storybook

To view the TodoMVC Storybook, run:

```sh
npm run storybook
```

and open <http://localhost:9009> (if the browser wasn't already opened for you).

## Testing

To run the Storybook Eyes tests and the Cypress Eyes tests, run:

```sh
npm test
```

This will run eslint, Storybook eyes, and the Cypress test in parallel

### Running the Cypress Tests

To run just the Cypress Eyes tests, run:

```sh
npm run test:cypress
```

To run the Cypress Eyes tests interactively, first run the application, using:

```sh
npm start
```

then run Cypress interactively, using:

```sh
npx cypress
```

### Running the Storybook Eyes Tests

To run the Eyes Storybook test, run:

```sh
npx eyes-storybook
```

## Github Actions

You can view the Github workflow that builds and runs the Cypress and Storybook tests
in Github actions at [`.github/workflows/nodejs.yml`](.github/workflows/nodejs.yml).

## Building (optional and not necessary)

To build production ready versions of the TodoMVC and its storybook, run:

```sh
npm run build
```
