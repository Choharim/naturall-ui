import React, { ForwardedRef, forwardRef } from 'react';

import { type TabsControlProps } from './types';
import { isEqualKeyValue, isValidKeyValue } from '@/shared/utils';
import { useTabsContext } from './TabsProvider';

export interface TabProps extends React.ComponentPropsWithRef<'button'> {
  keyValue?: TabsControlProps['keyValue'];
  label: React.ReactNode;
}
function Tab(
  { keyValue, label, ...props }: TabProps,
  forwardedRef: ForwardedRef<HTMLButtonElement>,
) {
  const { onKeyValueChange, keyValue: activeKeyValue } = useTabsContext();
  const isActive = isEqualKeyValue(activeKeyValue, keyValue);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isValidKeyValue(keyValue)) {
      onKeyValueChange(keyValue);
    }

    props.onClick?.(e);
  };

  return (
    <button
      {...props}
      type="button"
      id={`tab-${keyValue}`}
      role="tab"
      aria-controls={`tabpanel-${keyValue}`}
      aria-selected={isActive}
      onClick={handleClick}
      ref={forwardedRef}
    >
      {label}
    </button>
  );
}

export default forwardRef(Tab);
