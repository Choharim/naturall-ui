import { ControlProps } from '../types';

function isEqualKey(key1: ControlProps['key'], key2: ControlProps['key']) {
  return key1 == key2;
}

export { isEqualKey };
