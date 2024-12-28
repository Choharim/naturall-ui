import React from 'react';
/**
 * 초기 value
 */
declare const INITIAL_CONTEXT_VALUE: null;
/**
 * create provider
 */
type ContextValue = Parameters<typeof React.createContext>[0];
declare const createSafeContext: <Values extends ContextValue>(displayName: string) => React.Context<Values | null>;
/**
 * consumer hook
 */
type SafeContextParams<C> = {
    context: React.Context<C | typeof INITIAL_CONTEXT_VALUE>;
    displayName?: string;
};
declare const useSafeContext: <C>({ context: _context, displayName, }: SafeContextParams<C>) => C & ({} | undefined);
export { createSafeContext, useSafeContext, INITIAL_CONTEXT_VALUE };
