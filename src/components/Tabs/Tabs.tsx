import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';

import TabsControlProvider from './_stores/TabsControlProvider';
import { type TabsControlProps } from './_types';
import { isEqualKeyValue } from '@/shared/utils';
import Tab from './Tab';

interface TabsProps
  extends React.ComponentPropsWithoutRef<'ul'>,
    TabsControlProps {
  children: React.ReactElement[];
  indicator?: React.ReactElement;
}

function Tabs(
  { children, keyValue, onKeyValueChange, indicator, ...props }: TabsProps,
  forwardedRef: ForwardedRef<HTMLUListElement>,
) {
  return (
    <TabsControlProvider
      keyValue={keyValue}
      onKeyValueChange={onKeyValueChange}
    >
      <ul {...props} role="tablist" ref={forwardedRef}>
        {React.Children.map(children, (child, index) => (
          <li key={index}>
            {React.cloneElement(child, {
              ...child.props,
              keyValue: index,
            })}
          </li>
        ))}

        {indicator}
      </ul>

      {React.Children.map(children, (child, index) => {
        if (isEqualKeyValue(index, keyValue)) {
          if (!child.props?.children) return;

          return React.cloneElement(child.props.children, {
            ...child.props.children.props,
            id: `tabpanel-${keyValue}`,
            role: 'tabpanel',
            'aria-labelledby': `tab-${keyValue}`,
          });
        }
      })}
    </TabsControlProvider>
  );
}

export default Object.assign(forwardRef(Tabs), {
  Tab,
});
