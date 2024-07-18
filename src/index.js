import React from 'react'
import PropTypes from 'prop-types'

const BorderRadiusGradient = ({
  containerBackgroundColor = '#FFF',
  gradientValue = '',
  children,
  className: parentClassName = '',
  borderWidth = '',
  borderRadius = ''
}) => {
  return (
    <div
      className={parentClassName || ''}
      style={{
        background: `linear-gradient(${containerBackgroundColor}, ${containerBackgroundColor}) padding-box, ${gradientValue} border-box`,
        borderWidth,
        borderRadius,
        borderStyle: 'solid',
        borderColor: 'transparent'
      }}
    >
      {children}
    </div>
  )
}

BorderRadiusGradient.propTypes = {
  containerBackgroundColor: PropTypes.string,
  gradientValue: PropTypes.string,
  children: PropTypes.node,
  parentClassName: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string
}

export default BorderRadiusGradient
