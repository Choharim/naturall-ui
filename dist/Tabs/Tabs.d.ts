import React from 'react';
import { type TabsControlProps } from './_types';
interface TabsProps extends Omit<React.ComponentProps<'ul'>, 'key'>, TabsControlProps {
    children: React.ReactElement[];
    indicator?: React.ReactElement;
}
declare function Tabs({ children, key, onKeyChange, indicator, ...props }: TabsProps): React.JSX.Element;
export default Tabs;
