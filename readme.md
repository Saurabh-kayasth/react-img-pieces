# React IMG PIECES

[![npm version](https://badge.fury.io/js/react-img-pieces.svg)](https://badge.fury.io/js/react-img-pieces)
[![npm downloads](https://img.shields.io/npm/dw/react-img-pieces.svg?maxAge=2592000)](https://img.shields.io/npm/dm/react-img-pieces.svg?maxAge=2592000)

![DEMO](https://github.com/Saurabh-kayasth/react-img-pieces/assets/30195666/9dbe2611-7b05-4662-ba5e-e917bc9234df)

## Usage
```js
import { ImagePiece } from 'react-img-pieces'

<ImagePiece
    height={500}
    width={500}
    pieces={200}
    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SE9RDpKMsDAs37MK2YCCFDOYF4cAA9wmyjEPkXTRykekmRUcmYX4hqD7PQgBl8bdFt0&usqp=CAU"
/>
```

## Features
 - Boilerplate setup for creating React **TypeScript** npm packages
 - Bundling using **Rollup**
 - TypeScript for static typing 
 - **ESLint** with TypeScript support for code linting
 - **Prettier** for code formatting
 - **Linting and formatting automation** with GitHub Actions

## Scripts
 - `npm run build`: Build the package using Rollup.
 - `npm run lint`: Run ESLint to check the code for linting errors.
 - `npm run format`: Format the code using Prettier.
 - `npm start`: Start the development server with watch mode.
  
## Development
Step 1: Install the dependencies in root project and example project:
```
npm install
```

Step 2: Start the development server in both root and example project:
```
npm start
```

## Using `npm  link` to Test Local Package
### Step 1:
Create a symlink globally for your package:
 ```bash
npm link
```
### Step 2:
Navigate to the **example** folder and run below command
```
npm link ../
```

Any changes you make to the package will be reflected immediately in the example project without the need to rebuild or reinstall the package.

 