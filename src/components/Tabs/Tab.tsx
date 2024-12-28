import React from 'react';

import { useTabsControlContext } from './_stores';
import { type TabsControlProps } from './_types';
import { isEqualKeyValue, isValidKeyValue } from '@/shared/utils';

interface TabProps extends React.ComponentProps<'button'> {
  keyValue?: TabsControlProps['keyValue'];
  label: React.ReactNode;
}
function Tab({ keyValue, label, ...props }: TabProps) {
  const { onKeyValueChange, keyValue: activeKeyValue } =
    useTabsControlContext();
  const isActive = !!keyValue && isEqualKeyValue(activeKeyValue, keyValue);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isValidKeyValue(keyValue)) {
      onKeyValueChange(keyValue);
    }

    props.onClick?.(e);
  };

  return (
    <button
      type="button"
      id={`tab-${keyValue}`}
      role="tab"
      aria-controls={`tabpanel-${keyValue}`}
      aria-selected={isActive}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Tab;
