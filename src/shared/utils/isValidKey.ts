import { ControlProps } from '../types';

function isValidKey(_key: ControlProps['key']) {
  const key = Number(_key);

  return !isNaN(key);
}

export { isValidKey };
