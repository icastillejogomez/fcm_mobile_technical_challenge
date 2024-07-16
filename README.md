# FCM Mobile Technical Challenge


## Challenge instructions

<details>
  <summary>Challenge instructions</summary>

  ## What
  FCM Digital team want to launch a new shiny travel guide app. We found that we have the chance to deliver a great product to our travelers. All best information about main world cities in their hands.

  ## Why
  Our current app is the best business itinerary app for FCM customers and we want to offer them a good curated travel guide, without risking the usability of main app in terms of disk usage and complexity. KISS principle.

  ## How
  As we are tech enthusiasts we want to improve our infrastructure, so we decided to implement a GraphQL API to be consumed by our frontend team. Many developers love this technology and after some research we think it fits perfectly for mobile and web apps using React. 

  We need your help to build a first prototype in react native, so we can test the potential of using this technology.

  ## Brief
  First version of the app needs to have following things:
  - Home screen with cities list
  - Detail city screen or embedded component in the list with some useful information as city name, currency, some monuments to visit and some restaurants

  ## Delivery
  Final solution is up to you, there are as many solutions as developers exists. You decide how to present the MVP taking design, usability, architecture and completeness decisions.

  ## How to use challenge API
  To run GraphQL API execute following command

  ````
  yarn run graphql
  ````

  It will launch a local graphql in ```http://localhost:3000/``` to use as graphql endpoint in your app.

  This local server gives you all data from ```db.js``` file and you can test your graphql queries with integrated GraphiQL IDE in ```http://localhost:3000/graphql```

  ````
  Example queries

  query {
    City(id: 2) {
      name
    }
  }

  query {
    allCities {
      name
    }
  }
  ````

  ## How to use Graphql in react native

  React native community recommends Apollo Client as the best library to use GraphQL in mobile (Visit https://www.apollographql.com/docs/react/)
</details>

## How to run the app?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```bash
npm install
```


## Todo list

### Setting up the challenge

- [x] Ensure NPM as package manager
- [x] Upgrade React Native to the latest version
- [x] Check app runs and tests are passing
- [x] Install Expo framework and run the app
- [x] Install Prettier and Git hooks
- [x] Update Expo configuration (Typescript, app.json, etc.)
- [x] Prepare basic Pipeline to ensure code quality
- [x] Check GraphQL API works as expected

### Implementing the challenge

- [ ] Optimize images
- [ ] Create project structure
- [ ] Create app theme hooks
- [ ] Retrieve data and draw a simply list with cities
- [ ] Think about missing data in the API and also think about the UI
- [ ] Draw a low fidelity prototype
- [ ] Choose a theme palette
- [ ] Pick a few icons and images for the app
- [ ] Define the models
- [ ] Code the contexts (domains and repositories)
- [ ] Implement the UI MVP (and thinks next steps...)

### Finish the challenge

- [ ] Check app runs on Android and iOS
- [ ] Generate a production build
- [ ] CD: Create a release pipeline based on [Semver Versioning](https://semver.org/) tags.
- [ ] Check docs are updated

### Nice to implement

- [ ] Deep linking
- [ ] Map view
- [ ] Animations
- [ ] Splash screen
- [ ] Code a few end-to-end tests

## Explanations about the challenge decisions

### Why Expo?

<details>
  <summary>Explanation</summary>
  <br />
  Expo is a React Native framework that allows you to build native iOS and Android apps using JavaScript and React. It is a great tool for building cross-platform apps and it is easy to use. It also has a lot of community support and a lot of plugins that can be used to extend the functionality of the framework. Eventhough in the past was a risky choice, nowadays is worth it. With Expo we can spend time on the business logic and what users want and not on the platform specifics.
</details>


### Why hexagonal architecture?

<details>
  <summary>Explanation</summary>
  <br />
  Hexagonal architecture is a software design pattern that helps to organize code into smaller, more manageable modules. It is based on the idea of dividing a system into discrete, independent modules that communicate with each other through well-defined interfaces. Each module has a clear responsibility and is responsible for a specific part of the system. This helps to keep the code modular and easier to understand and maintain.
</details>

### Why "value objects"?

<details>
  <summary>Explanation</summary>
  <br />

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  ```typescript
  class City {
    ...
    private readonly name: CityName // <-- Why CityName instead of simple string type?
    ...


    ...
  }

  class CityName extends StringValueObject {
    constructor(name: string) {
      super(name)
      this.ensureCityNameIsNonEmpty()
    }

    private ensureCityNameIsNonEmpty(): void {
      const value = this.getValue()
      if (value.length === 0) {
        throw new Error('City name cannot be empty')
      }
    }
  }
  ```
</details>