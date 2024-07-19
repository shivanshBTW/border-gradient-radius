# <a href="https://www.npmjs.com/package/border-gradient-radius" target="_blank">border-gradient-radius</a>

> very small HOC to apply curved border gradients

<!-- [![NPM](https://img.shields.io/npm/v/border-gradient-radius.svg)](https://www.npmjs.com/package/border-gradient-radius) -->

![npm](https://img.shields.io/npm/dm/border-gradient-radius.svg?label=downloads&style=for-the-badge)
[![downloads](https://img.shields.io/npm/dt/border-gradient-radius.svg?style=for-the-badge&label=overall%20downloads)](https://www.npmjs.com/package/border-gradient-radius)
![Gzip size](https://img.shields.io/bundlejs/size/border-gradient-radius?style=for-the-badge)
<br/>
![npm](https://img.shields.io/npm/v/border-gradient-radius.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/border-gradient-radius.svg?label=license&style=for-the-badge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge)](https://standardjs.com)

## Install

```bash
npm install --save border-gradient-radius
```

## Playground

You can access a basic demo <a href="https://border-gradient-radius.surge.sh" target="_blank">here</a>

## Usage

```jsx
import React, { Component } from 'react'

import BorderRadiusGradient from 'border-gradient-radius'
import 'border-gradient-radius/dist/index.css'

class Example extends Component {
  render() {
    return (
      <BorderRadiusGradient
        gradientValue={gradientValue}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        containerBackgroundColor='#FFF'
        className=''
      >
        {CHILDREN}
      </BorderRadiusGradient>
    )
  }
}
```

## License

MIT © [shivanshBTW](https://github.com/shivanshBTW)
