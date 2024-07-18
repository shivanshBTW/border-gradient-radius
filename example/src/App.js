import React, { useState } from 'react'

import BorderRadiusGradient from 'border-gradient-radius'
import 'border-gradient-radius/dist/index.css'

const App = () => {
  const [borderWidth, setBorderWidth] = useState('4px')
  const [borderRadius, setBorderRadius] = useState('10px')
  const [gradientValue, setGradientValue] = useState(
    'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)'
  )
  const [containerBackgroundColor, setContainerBackgroundColor] =
    useState('#FFF')
  const [padding, setPadding] = useState('10px')

  const handleClick = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'borderWidth':
        setBorderWidth(value)
        break
      case 'borderRadius':
        setBorderRadius(value)
        break
      case 'gradientValue':
        setGradientValue(value)
        break
      case 'containerBackgroundColor':
        setContainerBackgroundColor(value)
        break
      case 'padding':
        setPadding(value)
        break
      default:
        break
    }
  }

  return (
    <div style={{ padding: '100px 30px' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Border Radius Gradient Playground
        </h1>
        <div>
          <h3>Usage:</h3>
          <textarea
            rows={12}
            style={{ width: '100%' }}
            defaultValue={`
            <BorderRadiusGradient
              gradientValue={gradientValue}
              borderWidth={borderWidth}
              borderRadius={borderRadius}
              containerBackgroundColor = '#FFF'
              parentClassName = ''
            >
              {CHILDREN}
            </BorderRadiusGradient>`}
            disabled
          />
        </div>
      </div>
      <BorderRadiusGradient
        gradientValue={gradientValue}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
      >
        <div
          style={{
            borderRadius: 8,
            padding,
            backgroundColor: containerBackgroundColor
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed
          unde saepe consequatur quidem. Eligendi, necessitatibus natus et
          incidunt consectetur vel perspiciatis exercitationem enim, distinctio
          laborum dignissimos, omnis molestias sunt. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, cum odio non esse officia, a
          quis quos possimus architecto impedit, vel doloremque ut eaque placeat
          dolores nulla laudantium omnis. Suscipit.
        </div>
      </BorderRadiusGradient>

      <br />
      <br />
      <div>
        <span>borderWidth: </span>
        <input
          type='text'
          name='borderWidth'
          value={borderWidth}
          style={{ width: '70%' }}
          onChange={handleClick}
        />
      </div>
      <div>
        <span>borderRadius: </span>
        <input
          type='text'
          name='borderRadius'
          value={borderRadius}
          style={{ width: '70%' }}
          onChange={handleClick}
        />
      </div>
      <div>
        <span>gradientValue: </span>
        <input
          type='text'
          name='gradientValue'
          value={gradientValue}
          style={{ width: '70%' }}
          onChange={handleClick}
        />
      </div>
      <div>
        <span>containerBackgroundColor: </span>
        <input
          type='text'
          name='containerBackgroundColor'
          value={containerBackgroundColor}
          style={{ width: '70%' }}
          onChange={handleClick}
        />
      </div>
      <div>
        <span>padding: </span>
        <input
          type='text'
          name='padding'
          value={padding}
          style={{ width: '70%' }}
          onChange={handleClick}
        />
      </div>
    </div>
  )
}

export default App
