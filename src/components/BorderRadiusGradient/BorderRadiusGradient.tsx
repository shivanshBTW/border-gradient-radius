import * as React from 'react';

export interface BorderRadiusGradientProps
  extends React.HTMLAttributes<HTMLDivElement> {
  containerBackgroundColor?: string;
  gradientValue?: string;
  children?: React.ReactNode;
  className?: string;
  borderWidth?: string;
  borderRadius?: string;
}

export const BorderRadiusGradient = ({
  containerBackgroundColor = '#FFF',
  gradientValue = '',
  children,
  className = '',
  borderWidth = '',
  borderRadius = '',
  ...restProps
}: BorderRadiusGradientProps): React.ReactElement => {
  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${containerBackgroundColor}, ${containerBackgroundColor}) padding-box, ${gradientValue} border-box`,
        borderWidth,
        borderRadius,
        borderStyle: 'solid',
        borderColor: 'transparent',
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
