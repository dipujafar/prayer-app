export type TStateProps <setType> ={
    state: setType,
    setState:  (collapsed: setType) => void;
}