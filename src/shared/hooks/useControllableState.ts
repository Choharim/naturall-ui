import React, { useCallback, useMemo, useState } from 'react';

type UseControllableStateParams<T> = {
  state?: T;
  defaultState: T;
  onStateChange?: (state: T) => void;
};

const isControlled = <T>(
  state: UseControllableStateParams<T>['state'],
): state is T => {
  return state !== undefined;
};

function useControllableState<T>(params: UseControllableStateParams<T>) {
  const [_state, _setState] = useState(params.defaultState);

  const setState = useCallback(
    (state: T) => {
      if (isControlled(params.state)) {
        params.onStateChange?.(state);
      } else {
        _setState(state);
      }
    },
    [params.onStateChange, _setState],
  );

  const state = useMemo(() => {
    if (isControlled(params.state)) {
      return params.state;
    } else {
      return _state;
    }
  }, [params.state, _state]);

  return [state, setState] as const;
}

export default useControllableState;
