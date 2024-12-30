import { ControlProps } from '../types';

function isEqualKeyValue(
  a?: ControlProps['keyValue'],
  b?: ControlProps['keyValue'],
) {
  return a === b;
}

export { isEqualKeyValue };
