import React from 'react';
import { type TabsControlProps } from '../_types';
type Values = Pick<TabsControlProps, 'keyValue' | 'onKeyValueChange'>;
interface Props extends Values {
}
declare function TabsControlProvider({ children, keyValue, onKeyValueChange, }: React.PropsWithChildren<Props>): React.JSX.Element;
export default TabsControlProvider;
export declare const ControlContext: React.Context<Values | null>;
