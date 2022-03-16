import React from 'react';
import clsx from 'clsx';
import './index.css';

type FlexProps = {
  align?: string;
  justify?: string;
  wrap?: string;
  direction?: string;
  tag?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Flex: React.FC<FlexProps> = props => {
  const {
    tag = 'div',
    style,
    className,
    children,
    align,
    justify,
    wrap,
    direction,
  } = props;
  const Tag = tag as React.ElementType;
  const internalStyle = React.useMemo(() => {
    return {
      ...style,
      '--align': align,
      '--justify': justify,
      '--wrap': wrap,
      '--direction': direction,
    };
  }, [style, align, justify, wrap, direction]);
  return (
    <Tag className={clsx('doc-flex', className)} style={internalStyle}>
      {children}
    </Tag>
  );
};

export default Flex;
