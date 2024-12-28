import React from 'react';
import { type TabsControlProps } from './_types';
interface TabProps extends React.ComponentProps<'button'> {
    keyValue?: TabsControlProps['keyValue'];
    label: React.ReactNode;
}
declare function Tab({ keyValue, label, ...props }: TabProps): React.JSX.Element;
export default Tab;
