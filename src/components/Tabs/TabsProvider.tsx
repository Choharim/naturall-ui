import React from 'react';

import { type TabsControlProps } from './types';
import { createContextProvider } from '@/shared/utils';

type ContextValue = Pick<TabsControlProps, 'keyValue' | 'onKeyValueChange'>;

const [_TabsProvider, useTabsContext] = createContextProvider<ContextValue>({
  displayName: 'Tabs',
});

function TabsProvider({
  children,
  keyValue,
  onKeyValueChange,
}: React.PropsWithChildren<ContextValue>) {
  const values = React.useMemo(
    () => ({
      keyValue,
      onKeyValueChange,
    }),
    [keyValue, onKeyValueChange],
  );

  return <_TabsProvider value={values}>{children}</_TabsProvider>;
}

export default TabsProvider;

export { TabsProvider, useTabsContext };
