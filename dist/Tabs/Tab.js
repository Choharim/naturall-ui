import React from 'react';
import { useTabsControlContext } from './_stores';
import { isEqualKey, isValidKey } from '@/shared/utils';
function Tab({ key, label, ...props }) {
    const { onKeyChange, key: activeKey } = useTabsControlContext();
    const isActive = !!key && isEqualKey(activeKey, key);
    const handleClick = (e) => {
        if (!!key && isValidKey(key)) {
            onKeyChange(key);
        }
        props.onClick?.(e);
    };
    return (React.createElement("button", { type: "button", id: `tab-${key}`, role: "tab", "aria-controls": `tabpanel-${key}`, "aria-selected": isActive, onClick: handleClick, ...props }, label));
}
export default Tab;
