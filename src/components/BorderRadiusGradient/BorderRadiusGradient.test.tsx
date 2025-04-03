import React from 'react';
import { render } from '@testing-library/react';
import { BorderRadiusGradient } from './BorderRadiusGradient';

describe('BorderRadiusGradient', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <BorderRadiusGradient>Test content</BorderRadiusGradient>
    );
    expect(container.firstChild).toHaveStyle({
      background: 'linear-gradient(#FFF, #FFF) padding-box,  border-box',
      borderStyle: 'solid',
      borderColor: 'transparent',
    });
  });

  it('renders correctly with custom props', () => {
    const { container } = render(
      <BorderRadiusGradient
        containerBackgroundColor="#000"
        gradientValue="linear-gradient(to right, red, blue)"
        borderRadius="10px"
        borderWidth="2px"
        className="custom-class"
      >
        Test content
      </BorderRadiusGradient>
    );

    expect(container.firstChild).toHaveStyle({
      background:
        'linear-gradient(#000, #000) padding-box, linear-gradient(to right, red, blue) border-box',
      borderRadius: '10px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'transparent',
    });
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <BorderRadiusGradient>
        <div>Child content</div>
      </BorderRadiusGradient>
    );

    expect(getByText('Child content')).toBeInTheDocument();
  });
});
