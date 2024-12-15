import React from 'react';

import TabsControlProvider from './_stores/TabsControlProvider';
import { type TabsControlProps } from './_types';
import { isEqualKey } from '@/shared/utils';
import Tab from './Tab';

interface TabsProps
  extends Omit<React.ComponentProps<'ul'>, 'key'>,
    TabsControlProps {
  children: React.ReactElement[];
  indicator?: React.ReactElement;
}

function Tabs({ children, key, onKeyChange, indicator, ...props }: TabsProps) {
  return (
    <TabsControlProvider key={key} onKeyChange={onKeyChange}>
      <ul {...props} role="tablist">
        {React.Children.map(children, (child, index) => (
          <li key={index}>
            {React.cloneElement(child, {
              ...child.props,
              value: index,
            })}
          </li>
        ))}

        {indicator}
      </ul>

      {React.Children.map(children, (child, index) => {
        if (isEqualKey(index, key)) {
          if (!child.props?.children) return;

          return React.cloneElement(child.props.children, {
            ...child.props.children.props,
            id: `tabpanel-${key}`,
            role: 'tabpanel',
            'aria-labelledby': `tab-${key}`,
          });
        }
      })}
    </TabsControlProvider>
  );
}

export default Object.assign(Tabs, {
  Tab,
});
