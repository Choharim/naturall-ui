import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  isValidElement,
} from 'react';

import { type TabsControlProps } from './types';
import { isEqualKeyValue } from '@/shared/utils';
import Tab, { TabProps } from './Tab';
import TabsProvider from './TabsProvider';
import { useControllableState } from '@/shared/hooks';

interface TabsProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Partial<TabsControlProps> {
  children: React.ReactElement<TabProps>[];
  indicator?: React.ReactElement;
}

function Tabs(
  {
    children,
    keyValue: _keyValue,
    onKeyValueChange: _onKeyValueChange,
    defaultKeyValue,
    indicator,
    ...props
  }: TabsProps,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) {
  const [keyValue, onKeyValueChange] = useControllableState({
    state: _keyValue,
    onStateChange: _onKeyValueChange,
    defaultState: defaultKeyValue ?? 0,
  });

  return (
    <TabsProvider keyValue={keyValue} onKeyValueChange={onKeyValueChange}>
      <div {...props} role="tablist" ref={forwardedRef}>
        {children.map((child, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(child, {
              ...child.props,
              keyValue: index,
            })}
          </React.Fragment>
        ))}

        {indicator}
      </div>

      {children.map((child, index) => {
        if (isEqualKeyValue(index, keyValue)) {
          if (!isValidElement(child.props?.children)) return;

          return (
            <React.Fragment key={index}>
              {React.cloneElement(child.props.children, {
                ...child.props.children.props,
                id: `tabpanel-${keyValue}`,
                role: 'tabpanel',
                'aria-labelledby': `tab-${keyValue}`,
              })}
            </React.Fragment>
          );
        }
      })}
    </TabsProvider>
  );
}

export default Object.assign(forwardRef(Tabs), {
  Tab,
});
