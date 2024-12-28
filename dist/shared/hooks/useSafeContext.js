import React from 'react';
/**
 * 초기 value
 */
const INITIAL_CONTEXT_VALUE = null;
const createSafeContext = (displayName) => {
    const context = React.createContext(INITIAL_CONTEXT_VALUE);
    context.displayName = displayName;
    return context;
};
const useSafeContext = ({ context: _context, displayName, }) => {
    const context = React.useContext(_context);
    if (context === INITIAL_CONTEXT_VALUE) {
        throw Error(`${_context.displayName || displayName}.Provider is needed`);
    }
    return context;
};
export { createSafeContext, useSafeContext, INITIAL_CONTEXT_VALUE };
