import React from 'react';
import { createSafeContext } from '@/shared/hooks';
function TabsControlProvider({ children, key, onKeyChange, }) {
    const values = React.useMemo(() => ({
        key,
        onKeyChange,
    }), [key, onKeyChange]);
    return (React.createElement(ControlContext.Provider, { value: values }, children));
}
export default TabsControlProvider;
export const ControlContext = createSafeContext('ControlContext');
