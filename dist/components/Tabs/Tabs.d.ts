import { default as React } from 'react';
import { TabsControlProps } from './_types';
import { default as Tab } from './Tab';
interface TabsProps extends React.ComponentPropsWithoutRef<'ul'>, TabsControlProps {
    children: React.ReactElement[];
    indicator?: React.ReactElement;
}
declare const _default: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLUListElement>> & {
    Tab: typeof Tab;
};
export default _default;
