type Index = number;
type Key = Index | `${Index}`;
export type ControlProps = {
    key: Key;
    onKeyChange: (key: Key) => void;
};
export {};
