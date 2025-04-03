import React from 'react';
import { BorderRadiusGradient } from 'border-gradient-radius';

export default function GradientBorderExample() {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Gradient Border Examples</h1>

      <h2>Basic Usage</h2>
      <BorderRadiusGradient
        gradientValue="linear-gradient(45deg, #f3ec78, #af4261)"
        borderRadius="10px"
        borderWidth="2px"
      >
        <div style={{ padding: '20px' }}>Basic gradient border with radius</div>
      </BorderRadiusGradient>

      <h2>Button Example</h2>
      <BorderRadiusGradient
        gradientValue="linear-gradient(90deg, #00C9FF, #92FE9D)"
        borderRadius="50px"
        borderWidth="3px"
        containerBackgroundColor="transparent"
      >
        <button
          style={{
            background: 'transparent',
            padding: '12px 24px',
            border: 'none',
            width: '100%',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          Gradient Border Button
        </button>
      </BorderRadiusGradient>

      <h2>Card Example</h2>
      <BorderRadiusGradient
        gradientValue="linear-gradient(135deg, #667eea, #764ba2)"
        borderRadius="16px"
        borderWidth="4px"
      >
        <div style={{ padding: '30px' }}>
          <h3>Gradient Border Card</h3>
          <p>This card has a beautiful gradient border with rounded corners.</p>
        </div>
      </BorderRadiusGradient>
    </div>
  );
}
