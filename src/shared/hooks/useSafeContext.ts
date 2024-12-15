import React from 'react';

/**
 * 초기 value
 */
const INITIAL_CONTEXT_VALUE = null;

/**
 * create provider
 */
type ContextValue = Parameters<typeof React.createContext>[0];
const createSafeContext = <Values extends ContextValue>() => {
  return React.createContext<typeof INITIAL_CONTEXT_VALUE | Values>(
    INITIAL_CONTEXT_VALUE,
  );
};

/**
 * consumer hook
 */
type SafeContextParams<C> = {
  context: React.Context<C | typeof INITIAL_CONTEXT_VALUE>;
  displayName?: string;
};
const useSafeContext = <C>({
  context: _context,
  displayName,
}: SafeContextParams<C>) => {
  const context = React.useContext(_context);

  if (context === INITIAL_CONTEXT_VALUE) {
    throw Error(`${_context.displayName || displayName}.Provider is needed`);
  }

  return context;
};

export { createSafeContext, useSafeContext, INITIAL_CONTEXT_VALUE };
