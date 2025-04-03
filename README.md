# border-gradient-radius

<!-- [![NPM](https://img.shields.io/npm/v/border-gradient-radius.svg)](https://www.npmjs.com/package/border-gradient-radius) -->

![npm](https://img.shields.io/npm/dm/border-gradient-radius.svg?label=downloads&style=for-the-badge)
[![downloads](https://img.shields.io/npm/dt/border-gradient-radius.svg?style=for-the-badge&label=overall%20downloads)](https://www.npmjs.com/package/border-gradient-radius)
![Gzip size](https://img.shields.io/bundlejs/size/border-gradient-radius?style=for-the-badge)
<br/>
![npm](https://img.shields.io/npm/v/border-gradient-radius.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/border-gradient-radius.svg?label=license&style=for-the-badge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge)](https://standardjs.com)

A React component for creating gradient borders with customizable border radius.

## Installation

```bash
npm install border-gradient-radius
```

#### or

```bash
yarn add border-gradient-radius
```

## Playground

You can access a basic demo <a href="https://border-gradient-radius.surge.sh" target="_blank">here</a>

## Usage

```jsx
import { BorderRadiusGradient } from 'border-gradient-radius';

function App() {
  return (
    <BorderRadiusGradient
      gradientValue="linear-gradient(45deg, #f3ec78, #af4261)"
      borderRadius="10px"
      borderWidth="2px"
      className="custom-class"
    >
      <div style={{ padding: '20px' }}>Your content here</div>
    </BorderRadiusGradient>
  );
}
```

## Props

| Prop                     | Type            | Default   | Description                            |
| ------------------------ | --------------- | --------- | -------------------------------------- |
| containerBackgroundColor | string          | "#FFF"    | Background color of the container      |
| gradientValue            | string          | ""        | CSS gradient value for the border      |
| children                 | React.ReactNode | undefined | Content to render inside the container |
| className                | string          | ""        | Additional CSS classes                 |
| borderWidth              | string          | ""        | Border width (e.g., "1px", "2px")      |
| borderRadius             | string          | ""        | Border radius (e.g., "10px", "50%")    |

## License

MIT © [shivanshBTW](https://github.com/shivanshBTW)
