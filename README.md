# Donuts for Cape Town

A new Vue CLI project with various takes on a Donuts component, which displays the number of donuts left
and a list of people who could eat the donut. Each take has a different way of loading the data:

- DonutsComponent: hard-coded
- DonutsPropsComponent: values passed in via props
- DonutsLoadAPIComponent: loads the people from an API call
- DonutsVuexComponent: also loads the people via an API call, but stores the result in a Vuex store

Includes test coverage for each one, showing how to test simple components, props, API calls
and Vuex.

## Project setup

```
npm install
```

## To run the backend database

```
npm install -g json-server
json-server --watch db.json
```

The server is accessible on http://localhost:3000

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

You can now open Cypress by running: node_modules/.bin/cypress open

### Run your unit tests

```
npm run test:unit
```

#### Watch

```
npm run test:unit -- --watch
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
