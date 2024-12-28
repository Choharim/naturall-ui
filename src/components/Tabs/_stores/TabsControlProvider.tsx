import React from 'react';

import { type TabsControlProps } from '../_types';
import { createSafeContext } from '@/shared/hooks';

type Values = Pick<TabsControlProps, 'key' | 'onKeyChange'>;

interface Props extends Values {}
function TabsControlProvider({
  children,
  key,
  onKeyChange,
}: React.PropsWithChildren<Props>) {
  const values = React.useMemo(
    () => ({
      key,
      onKeyChange,
    }),
    [key, onKeyChange],
  );

  return (
    <ControlContext.Provider value={values}>{children}</ControlContext.Provider>
  );
}

export default TabsControlProvider;

export const ControlContext = createSafeContext<Values>('ControlContext');
