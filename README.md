# Cooking with Del

O aplicatie web unde poti gasi retete pentru a incerca lucruri noi in bucatarie

## Applications

### Client

**Prerequisites**

1. Install the NodeJs runtime
   - [Download link](https://nodejs.org/en/download/current)
   - or using [nvm](https://github.com/nvm-sh/nvm)
2. Open the client folder into the terminal

```
cd client
```

3. Install the dependencies

using npm

```
npm install
```

or by using yarn

```
yarn install
```

or by using pnpm

```
pnpm install
```

1. John Quincy Adams

### Server

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
