# SE-TESTING: Comprehensive Software Testing Labs and Activities 💻⚙️

![GitHub release](https://img.shields.io/badge/Latest%20Release-v1.0-blue.svg) [![Visit Releases](https://img.shields.io/badge/Visit%20Releases-brightgreen.svg)](https://github.com/rabahdic/SE-TESTING/releases)

## Table of Contents
- [Overview](#overview)
- [Topics Covered](#topics-covered)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The **SE-TESTING** repository serves as an archive for all activities and labs focused on software testing. This repository is designed for students, developers, and anyone interested in enhancing their software testing skills. It contains a variety of examples and exercises that cover different aspects of software testing.

You can find the latest releases of this repository [here](https://github.com/rabahdic/SE-TESTING/releases). Download and execute the necessary files to get started.

## Topics Covered

This repository includes resources on the following topics:

- **API Testing**: Learn how to test APIs to ensure they function as expected. 
- **Cypress**: Explore end-to-end testing with Cypress, a powerful testing framework.
- **E2E Testing**: Understand end-to-end testing principles and how to implement them.
- **Integration Testing**: Discover techniques for testing the interaction between different modules.
- **Jest**: Use Jest for unit testing JavaScript applications.
- **StorybookJS**: Create UI components in isolation with Storybook.
- **Supertest**: Test HTTP servers in Node.js applications using Supertest.
- **TS-Jest**: Integrate TypeScript with Jest for seamless testing.
- **TypeScript**: Learn about TypeScript and how it enhances JavaScript development.
- **Unit Testing**: Focus on testing individual components for reliability.

## Getting Started

To begin using this repository, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rabahdic/SE-TESTING.git
   cd SE-TESTING
   ```

2. **Install Dependencies**:
   Depending on the specific labs or activities you want to work on, you may need to install various dependencies. Use npm or yarn as needed. For example:
   ```bash
   npm install
   ```

3. **Explore the Labs**:
   Navigate through the folders to find different labs and activities. Each lab includes a README file with specific instructions.

## Usage

### API Testing

In the API Testing section, you will find examples that show how to use tools like Postman and Supertest. Here’s a simple example of how to test an API endpoint:

```javascript
const request = require('supertest');
const app = require('./app'); // Your Express app

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
```

### Cypress

Cypress is an end-to-end testing framework that allows you to write tests for your web applications. Here’s how to set up a simple test:

1. Install Cypress:
   ```bash
   npm install cypress --save-dev
   ```

2. Create a test file in the `cypress/integration` folder:
   ```javascript
   describe('My First Test', () => {
     it('Visits the Kitchen Sink', () => {
       cy.visit('https://example.cypress.io');
       cy.contains('type').click();
       cy.url().should('include', '/commands/actions');
     });
   });
   ```

### Integration Testing

Integration testing focuses on the interaction between modules. Here’s an example of how to test two integrated components:

```javascript
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

test('moduleA and moduleB interact correctly', () => {
  const resultA = moduleA.method();
  const resultB = moduleB.method(resultA);
  expect(resultB).toBe(expectedValue);
});
```

### Jest

Jest is a powerful testing framework for JavaScript. Here’s a simple unit test example:

```javascript
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### StorybookJS

Storybook allows you to develop UI components in isolation. Here’s how to set it up:

1. Install Storybook:
   ```bash
   npx -p @storybook/cli sb init
   ```

2. Create stories for your components:
   ```javascript
   import MyButton from './MyButton';

   export default {
     title: 'MyButton',
     component: MyButton,
   };

   export const Primary = () => <MyButton primary label="Primary Button" />;
   ```

### TypeScript

TypeScript adds static typing to JavaScript. Here’s a simple example of how to define a function:

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

## Contributing

We welcome contributions to this repository. If you want to add a new lab or improve existing ones, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/my-new-lab
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add my new lab"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-new-lab
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or suggestions, please reach out to me on GitHub. You can also find the latest releases of this repository [here](https://github.com/rabahdic/SE-TESTING/releases). Download and execute the necessary files to enhance your software testing skills.

Feel free to explore, learn, and contribute!