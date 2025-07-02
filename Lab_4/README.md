# Testing
### submission link : https://www.dropbox.com/request/TQsaWZFARpSfkJ64qpvI

This was forked from @wends05 's repo CapyCopy with permission.
This fork is only for testing purposes only. This project _does_ not utilized a database and relies on _Local Storage_
![testingscreenshot](image.png)

## Testing Installation

1. clone this repository

```bash
git clone https://github.com/itsantonle/capycopy-SE-Testing-Lab4.git
```

2. install the dependencies

```bash
npm install
```

3. run the 'development' server first (needed to be running in order for cypress to run tests properly)

```bash
npm run dev
```

4. run the cypress test

```bash
 npm run test:cypress
```

5. Navigate to the e2e testing
![image](https://github.com/user-attachments/assets/841409f1-9cca-4dac-8275-2564406e5d88)

6. Select browser (preferably chrome) and click the button
![image](https://github.com/user-attachments/assets/d3b185c4-6128-4543-935d-538c4fe74305)

7.  and click on 'flow.cy.ts' spec file  which covers the major functionality of copycapy
![image](https://github.com/user-attachments/assets/d302dcb6-ac1b-4f8f-9ca1-84b842e4de14)

8. test coverage 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
