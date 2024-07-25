# FCM Mobile Technical Challenge

## Table of contents

* [Table of contents](#table-of-contents)
* [Challenge instructions](#challenge-instructions)
* [How to run the app?](#how-to-run-the-app-)
* [Git hooks](#git-hooks)
  + [On commit](#on-commit)
  + [On push](#on-push)
* [Todo list](#todo-list)
  + [Setting up the challenge](#setting-up-the-challenge)
  + [Implementing the challenge](#implementing-the-challenge)
  + [Finish the challenge](#finish-the-challenge)
  + [Nice to implement](#nice-to-implement)
* [Explanations about the challenge decisions](#explanations-about-the-challenge-decisions)
  + [Why Expo?](#why-expo-)
  + [Why native-components wrapping?](#why-native-components-wrapping-)
  + [Why hexagonal architecture?](#why-hexagonal-architecture-)
  + [Why "value objects"?](#why--value-objects--)


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

# Run Metro bundler with Expo
npm run start -c

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █ ▀▀▄ ███▄█ ▄▄▄▄▄ █
█ █   █ ███ ▄▄ ▄▄ █ █   █ █
█ █▄▄▄█ █ ▄▄ █▄██▄█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ █ ▀ █ █▄█▄▄▄▄▄▄▄█
█ ▄▄▀█▄▄█   ██ ▄▀█  ▄▄██  █
█▄▄▀▀█ ▄ █▀█▄█▀█ ▄█▄ ▀▄▄█▄█
███ ▄ ▀▄█▄▄█▄ ▄█▀█▄ ▄██▀ ▀█
█▄▄ ▀ ▄▄ ▀  ▀ ▄  ▄█▀▄▄▄█▀▄█
█▄▄█▄██▄█ █ ██    ▄▄▄  ▀█ █
█ ▄▄▄▄▄ █▀██▄█▀██ █▄█ ██▀ █
█ █   █ ████▄ ▄█▄ ▄▄   ▀ ▄█
█ █▄▄▄█ █ ▄█▀ ▄ █▀██ ▄██▄▄█
█▄▄▄▄▄▄▄█▄▄▄██▄▄▄▄▄▄▄▄███▄█

› Metro waiting on exp://<your-ip-address>:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands
```

Now you are ready to run the app on Android and iOS. Take in consideration that in Android could be necessary a Google Maps API key in order to render the map. It's possible than Expo wraps with need if you run the app with it.

You can also run the app in the iOS or Android simulators with the next commands:

```bash
npm run ios

# or

npm run android
```

## Git hooks

### On commit

Every time you commit your code, the following commands will be executed:

```bash
npm run lint
npm run check-types
```
See file here [here](/.husky/pre-commit)

```bash
$ git commit -m "Your commit message" -m "Your commit description"


> fcmtravelguide@0.0.1 lint
> expo lint

> npx eslint .

> fcmtravelguide@0.0.1 check-types
> tsc --noEmit

[master 743aff0] docs: Add why native-components wrapping?" section
 1 file changed, 45 insertions(+)
```

### On push

Every time you push your code, the following commands will be executed:

```bash
npm run test
```
See file here [here](/.husky/pre-push)

```bash
$ git push origin master

> fcmtravelguide@0.0.1 test
> jest

 PASS  __tests__/app.test.tsx
  When rendering the app
    ✓ should render the app (222 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        0.841 s, estimated 1 s
Ran all test suites.
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.49 KiB | 1.49 MiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:icastillejogomez/fcm_mobile_technical_challenge.git
   d6251f4..743aff0  master -> master
```

## Known issues

### Show map button

TODO

### Android Safe Area View

TODO

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

- [x] Optimize images
- [x] Create project structure
- [x] Retrieve data and draw a simply list with cities
- [x] Choose a theme palette
- [x] Create app theme hooks
- [x] Create Header component
- [x] Create Explore screen Header
- [ ] Wrap native components
- [x] Create BottomTabNavigation component
- [ ] Create i18n dictionaries and hooks
- [ ] Think about missing data in the API and also think about the UI
- [x] Pick a few icons and images for the app
- [ ] Define the models
- [ ] Code the contexts (domains and repositories)
- [ ] Implement the UI MVP (and thinks next steps...)

### Finish the challenge

- [ ] Divide the Explore Header compontent into smaller components
- [ ] Divide TabBar component into smaller components
- [ ] Improve the place type selector
- [ ] Check app runs on Android and iOS
- [ ] Generate a production build
- [ ] CD: Create a release pipeline based on [Semver Versioning](https://semver.org/) tags.
- [ ] Offline message
- [ ] Error snackbar
- [ ] Check docs are updated
- [ ] Finish Table of contents

### Nice to implement

- [ ] Deep linking
- [x] Map view
- [x] Animations
- [ ] Splash screen
- [ ] Code a few end-to-end tests

## Explanations about the challenge decisions

### Why Expo?

<details>
  <summary>Explanation</summary>
  <br />
  Expo is a React Native framework that allows you to build native iOS and Android apps using JavaScript and React. It is a great tool for building cross-platform apps and it is easy to use. It also has a lot of community support and a lot of plugins that can be used to extend the functionality of the framework. Eventhough in the past was a risky choice, nowadays is worth it. With Expo we can spend time on the business logic and what users want and not on the platform specifics.
</details>

### Why native-components wrapping?

<details>
  <summary>Explanation</summary>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <br />

  ```typescript
  import { Text, StyleSheet } from 'react-native'
  import type { TextProps } from 'react-native'

  export type FMCTextVariant = 'default' | 'inherit' | 'title' | 'caption'
  export type FMCTextWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  export type FMCTextColor = 'default' | 'inherit' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning' | 'success' | 'info'

  export type FMCTextProps = TextProps & {
    variant?: FMCTextVariant
    weight?: FMCTextWeight
    color?: FMCTextColor
    size?: FMCTextSize
  }

  export const FMCText = (props: FMCTextProps) => {
    const { variant = 'default', weight = 'normal', color = 'default', size = 'medium', ...rest } = props

    return (
      <Text
        {...rest}
        style={[
          {
            fontWeight: weight,
            color: color,
            fontSize: size,
          },
          rest.style,
        ]}
      />
    )
  }

  const styles = StyleSheet.create({})
  ```
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

### How Splas screen works?

<details>
  <summary>Explanation</summary>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</details>  