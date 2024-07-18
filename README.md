# border-gradient-radius

> very small HOC to apply curved border gradients

[![NPM](https://img.shields.io/npm/v/border-gradient-radius.svg)](https://www.npmjs.com/package/border-gradient-radius)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save border-gradient-radius
```

## Playground

You can access a basic demo [here](https://border-gradient-radius.surge.sh)

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
        parentClassName=''
      >
        {CHILDREN}
      </BorderRadiusGradient>
    )
  }
}
```

## License

MIT © [shivanshBTW](https://github.com/shivanshBTW)
