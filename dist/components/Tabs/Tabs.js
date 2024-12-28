import React, { forwardRef } from 'react';
import TabsControlProvider from './_stores/TabsControlProvider';
import { isEqualKeyValue } from '../../shared/utils';
import Tab from './Tab';
function Tabs({ children, keyValue, onKeyValueChange, indicator, ...props }, forwardedRef) {
    return (React.createElement(TabsControlProvider, { keyValue: keyValue, onKeyValueChange: onKeyValueChange },
        React.createElement("ul", { ...props, role: "tablist", ref: forwardedRef },
            React.Children.map(children, (child, index) => (React.createElement("li", { key: index }, React.cloneElement(child, {
                ...child.props,
                keyValue: index,
            })))),
            indicator),
        React.Children.map(children, (child, index) => {
            if (isEqualKeyValue(index, keyValue)) {
                if (!child.props?.children)
                    return;
                return React.cloneElement(child.props.children, {
                    ...child.props.children.props,
                    id: `tabpanel-${keyValue}`,
                    role: 'tabpanel',
                    'aria-labelledby': `tab-${keyValue}`,
                });
            }
        })));
}
export default Object.assign(forwardRef(Tabs), {
    Tab,
});
