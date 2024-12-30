import React from 'react';

/**
 * create provider
 */
type ContextValue = Parameters<typeof React.createContext>[0];
const createContextProvider = <Values extends ContextValue>({
  displayName,
  ...params
}: { displayName: string } & (
  | { strict?: true }
  | { strict: false; defaultValue: Values }
)) => {
  const _context = React.createContext(
    params.strict === false ? params.defaultValue : undefined,
  );

  _context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(_context);

    if (params.strict !== false && !context) {
      throw Error(`${_context.displayName || displayName}.Provider is needed`);
    }

    return context as Values;
  };

  return [_context.Provider, useContext] as const;
};

export { createContextProvider };
