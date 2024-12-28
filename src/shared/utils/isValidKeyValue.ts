import { ControlProps } from '../types';

function isValidKeyValue(
  _keyValue?: ControlProps['keyValue'],
): _keyValue is number {
  const keyValue = Number(_keyValue);

  return !isNaN(keyValue);
}

export { isValidKeyValue };
