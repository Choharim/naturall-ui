type Index = number;
type KeyValue = Index;

export type ControlProps = {
  keyValue: KeyValue;
  onKeyValueChange: (keyValue: KeyValue) => void;
};
