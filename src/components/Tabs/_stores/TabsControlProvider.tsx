import React from 'react';

import { type TabsControlProps } from '../_types';
import { createSafeContext } from '@/shared/hooks';

type Values = Pick<TabsControlProps, 'keyValue' | 'onKeyValueChange'>;

interface Props extends Values {}
function TabsControlProvider({
  children,
  keyValue,
  onKeyValueChange,
}: React.PropsWithChildren<Props>) {
  const values = React.useMemo(
    () => ({
      keyValue,
      onKeyValueChange,
    }),
    [keyValue, onKeyValueChange],
  );

  return (
    <ControlContext.Provider value={values}>{children}</ControlContext.Provider>
  );
}

export default TabsControlProvider;

export const ControlContext = createSafeContext<Values>('ControlContext');
