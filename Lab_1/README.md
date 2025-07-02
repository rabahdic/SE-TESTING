### READ this Sheen:

so far gagana na tatlo ka components, ang big task mo is to make a page and stories of for that component halin sa
./src/pages either sa addJobPage or sa EditJobPage ()

Stimulating the play functionality for an input field in storybook: use the expect keyword to assert definite inputs

```js
// InputField.stories.js
import React from 'react'
import { within, userEvent, expect } from '@storybook/testing-library'
import { InputField } from './InputField'

export default {
  title: 'Components/InputField',
  component: InputField,
}

const Template = (args) => <InputField {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter text here...',
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByPlaceholderText('Enter text here...')
  await userEvent.type(input, 'Hello, Storybook!')
  expect(input.value).toBe('Hello, Storybook!')
}
```

# How to create a play test component using UseStatehook with forms - IMPORTANT

create a component (no need since ara na ang sa edit or add page pro i intindhun gid ang code)

```js
// MyForm.js
import React, { useState } from 'react'

export const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
    </form>
  )
}
```

create the stories that reflect and assert the form with actual values:

```js
// MyForm.stories.js
import React from 'react'
import { within, userEvent, expect } from '@storybook/testing-library'
import { MyForm } from './MyForm'

export default {
  title: 'Components/MyForm',
  component: MyForm,
}

const Template = (args) => <MyForm {...args} />

export const Default = Template.bind({})
Default.args = {}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // Simulate user typing in the name field
  const nameInput = canvas.getByPlaceholderText('Enter your name')
  await userEvent.type(nameInput, 'John Doe')
  expect(nameInput.value).toBe('John Doe')

  // Simulate user typing in the email field
  const emailInput = canvas.getByPlaceholderText('Enter your email')
  await userEvent.type(emailInput, 'john.doe@example.com')
  expect(emailInput.value).toBe('john.doe@example.com')
}
```

# Disclaimer

LEGAYADA SURRILLA - UNDER THE MIT LICENSE-- this repo is forked only FOR ACADEMIC PURPOSES FOR SE TESTING

- no profit or desire to pulicize this repo for a for-profit project. Storybook js is installed into the project.

Project by Brad Traversy (c) 2024
original repo link: https://github.com/bradtraversy/react-crash-2024

# Running storybook

Make sure all the dependencies of this project are installed for this to work.
The components are styled with Tailwind, and storybook is configured to show this in the preview
The project in written in Javascript, therefore there is minimal to nonexistent type support

Enter the code in the terminal (Bash)

```bash
npm install
```

after installing the necessary dependencies run the following to preview the website in DEV mode:

```bash
npm run dev
```

run the mockend server

```bash
npm run server
```

to open the storybook GUI on the port 6006

```bash
npm run storybook
```

# StoryBook pages

run storybook on port using the:

```bash
npm run storybook command
```

the stories and pages for the labs are:

```
Hero.stories.js (Basic React Component with Props)
Card.stories.jsx  ( Children Props and Play Functionality regarding links + Passed and Failed Interactions)
JobListing.stories.jsx (State testing and stuff) (TO BE FINISHED )
Pages.stories.jsx( TO BE IMPLEMENTED)

```

# React Jobs Project (YouTube)

This is the jobs listing project from the [YouTube crash course](https://youtu.be/LDB4uaJ87e0).

<img src="public/screen.png" />

## Usage

This project uses JSON-Server for a mock backend.

### Install Dependencies

```bash
npm install
```

### Run JSON Server

The server will run on http://localhost:8000

```bash
npm run server
```

### Run Vite Frontend

React will run on http://localhost:3000

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
