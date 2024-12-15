import React from 'react';
import TabsControlProvider from './_stores/TabsControlProvider';
import { isEqualKey } from '@/shared/utils';
import Tab from './Tab';
function Tabs({ children, key, onKeyChange, indicator, ...props }) {
    return (React.createElement(TabsControlProvider, { key: key, onKeyChange: onKeyChange },
        React.createElement("ul", { ...props, role: "tablist" },
            React.Children.map(children, (child, index) => (React.createElement("li", { key: index }, React.cloneElement(child, {
                ...child.props,
                value: index,
            })))),
            indicator),
        React.Children.map(children, (child, index) => {
            if (isEqualKey(index, key)) {
                if (!child.props?.children)
                    return;
                return React.cloneElement(child.props.children, {
                    ...child.props.children.props,
                    id: `tabpanel-${key}`,
                    role: 'tabpanel',
                    'aria-labelledby': `tab-${key}`,
                });
            }
        })));
}
export default Object.assign(Tabs, {
    Tab,
});
