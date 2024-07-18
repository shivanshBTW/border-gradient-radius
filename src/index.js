import React from 'react'
import PropTypes from 'prop-types'
import './styles.module.css'

const BorderRadiusGradient = ({
  containerBackgroundColor = '#FFF',
  gradientValue = '', // 'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)'
  children,
  parentClassName = '',
  borderWidth = '',
  borderRadius = ''
}) => {
  return (
    <div
      className={`BorderRadiusGradient-parent ${parentClassName || ''}`}
      style={{
        background: `linear-gradient(${containerBackgroundColor}, ${containerBackgroundColor}) padding-box, ${gradientValue} border-box`,
        borderWidth,
        borderRadius
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
