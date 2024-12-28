import React from 'react';
import { useTabsControlContext } from './_stores';
import { isEqualKeyValue, isValidKeyValue } from '../../shared/utils';
function Tab({ keyValue, label, ...props }) {
    const { onKeyValueChange, keyValue: activeKeyValue } = useTabsControlContext();
    const isActive = !!keyValue && isEqualKeyValue(activeKeyValue, keyValue);
    const handleClick = (e) => {
        if (isValidKeyValue(keyValue)) {
            onKeyValueChange(keyValue);
        }
        props.onClick?.(e);
    };
    return (React.createElement("button", { type: "button", id: `tab-${keyValue}`, role: "tab", "aria-controls": `tabpanel-${keyValue}`, "aria-selected": isActive, onClick: handleClick, ...props }, label));
}
export default Tab;
