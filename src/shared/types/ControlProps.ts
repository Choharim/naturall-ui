type Index = number;
type Key = Index;

export type ControlProps = {
  key: Key;
  onKeyChange: (key: Key) => void;
};
