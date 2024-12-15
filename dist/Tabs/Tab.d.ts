import React from 'react';
import { type TabsControlProps } from './_types';
interface TabProps extends React.ComponentProps<'button'> {
    key?: TabsControlProps['key'];
    label: React.ReactNode;
}
declare function Tab({ key, label, ...props }: TabProps): React.JSX.Element;
export default Tab;
