# Weather

## Setup dev environment

- Install (node.js)[https://nodejs.org/en/download/]
- Update the latest version of npm with `npm install npm -g`

Run the following commands:

```sh
npm install webpack typings typescript -g
npm install
```

### Setup dev environment on windows computers

- Install (node.js)[https://nodejs.org/en/download/]
- Update the latest version of npm with `npm install npm -g`
- Install [Python 2.7](https://www.python.org/ftp/python/2.7.11/python-2.7.11.amd64.msi). Select the option "Add python.exe to local drive".
- Install git with command line support
- Install Visual Studio Code
- Install Visual Studio C++ Tools

Run the following commands:

```sh
npm install webpack typings typescript -g
npm install
```

If there are errors installing the apps please check (node-gyp setup guide)[https://github.com/nodejs/node-gyp] in the windows section.

- Install .editorconfig plugin to Visual Studio or use Atom

## Change the backend server

The app has config files for 4 backends: `dev, test, preprod and prod`.
To config the backend server run:

```sh
npm run config [dev|test|preprod|prod] [src|dist]
```

Example for dev environment:

```sh
npm run config dev src
```

## Run the app

To run the app directly from memory. This is the best option for development. It uses webpack-dev-server and browserSync has a proxy. Open two terminal windows and run the proxy and the webpack server. The script will open the app in the browser.

```sh
npm run server:proxy
npm run watch:dev
```

To run the app with server mockups.

```sh
npm run server:proxy
npm run watch:dev:mockups
```

Build the app to the `dist` folder

```sh
npm run build
```

To run a server from the `dist` folder after the build

```sh  
npm run config dev dist
npm run server
```

## Unit tests
- To run unit tests a single time

  ```sh
  npm run test
  ```

- To run unit tests and keep watching files for changes

  ```sh
  npm run watch:test
  ```

- To open coverage reports

  ```sh
  npm run coverage
  ```

## End-to-end tests
To run end-to-end tests you need protractor installed in the machine. Try running `protractor --version` to make sure it's working.

- To update the `webdriver-manager` to the latest version run:

  ```sh
  npm run webdriver:update
  ```

- To run end-to-end tests, you need the webdriver started and the app being served in `port 8080`. Steps to run the tests:

  - Start the server with one of the following commands depending on the scenario you are testing:

    ```sh
     npm run watch:dev
    ```

     or

     `npm run build && npm run sever`

  - Start webdriver::

    ```sh
     npm run webdriver:start
    ```

  - To run the tests

    ```sh
     npm run e2e
    ```

## Useful npm options for development and production

```sh
--save          => updates dependencies entries in the {{{json}}} file
--force         => force fetching remote entries if they exist on disk
--force-latest  => force latest version on conflict
--production    => do NOT install project devDependencies
--no-color      => do not print colors
```

### Features

- [x] Uses angular, typescript and webpack
- [x] sass support
- [x] Coverage report
- [x] Typescript support
- [x] ES6 modules support
- [x] Running tests in PhantomJS
- [x] Karma support
- [x] Optimized build package
- [x] Watches code and refreshes browser with latest changes automatically
- [x] Sourcemap support in develop and production.

### Roadmap

- Setup `typedoc`
- Setup `wallaby` properly
- Config coverage reports
- Integrate `cucumber` with `protractor` for BDD

### Bugs and know limitations

- The test environment is setup but tests don't cover all the app
- Coverage needs better setup to check code test Coverage
- Wallaby is not setup properly
- Typescript is running in `transpileOnly` mode to avoid compilation errors, they should be solved and avoid this flag

### Atom Packages

Useful Atom packages for this project:
- Atom-beautify
- Atom-jade
- Atom-typescript
- jshint

### How it changes the development process?

- don't depend on the backend
- don't need visual studio
- adds unit testing
- adds end-to-end testing
- will add BDD testing
- several development environment options

### Main tools

- webpack for the tooling
- loaders for typescript, html, css and asset files
- ui.router for application state management
- karma for running unit tests
- protractor for running end-to-tests
- cucumber for bdd

## Dynamic states guidelines

- *.state.ts defines files that are imported and build time
- *.route.ts define routes that are imported and build time but the modules are not
