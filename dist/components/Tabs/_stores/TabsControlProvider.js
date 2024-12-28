import React from 'react';
import { createSafeContext } from '../../../shared/hooks';
function TabsControlProvider({ children, keyValue, onKeyValueChange, }) {
    const values = React.useMemo(() => ({
        keyValue,
        onKeyValueChange,
    }), [keyValue, onKeyValueChange]);
    return (React.createElement(ControlContext.Provider, { value: values }, children));
}
export default TabsControlProvider;
export const ControlContext = createSafeContext('ControlContext');
