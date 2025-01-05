type Index = number;
type KeyValue = Index;

export type ControlProps = {
  defaultKeyValue: KeyValue;
  keyValue: KeyValue;
  onKeyValueChange: (keyValue: KeyValue) => void;
};
