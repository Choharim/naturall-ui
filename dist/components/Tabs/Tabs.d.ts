import React from 'react';
import { type TabsControlProps } from './_types';
import Tab from './Tab';
interface TabsProps extends React.ComponentPropsWithoutRef<'ul'>, TabsControlProps {
    children: React.ReactElement[];
    indicator?: React.ReactElement;
}
declare const _default: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLUListElement>> & {
    Tab: typeof Tab;
};
export default _default;
