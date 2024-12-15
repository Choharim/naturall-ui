import React from 'react';

import { useTabsControlContext } from './_stores';
import { type TabsControlProps } from './_types';
import { isEqualKey, isValidKey } from '@/shared/utils';

interface TabProps extends React.ComponentProps<'button'> {
  key?: TabsControlProps['key'];
  label: React.ReactNode;
}
function Tab({ key, label, ...props }: TabProps) {
  const { onKeyChange, key: activeKey } = useTabsControlContext();
  const isActive = !!key && isEqualKey(activeKey, key);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!!key && isValidKey(key)) {
      onKeyChange(key);
    }

    props.onClick?.(e);
  };

  return (
    <button
      type="button"
      id={`tab-${key}`}
      role="tab"
      aria-controls={`tabpanel-${key}`}
      aria-selected={isActive}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Tab;
