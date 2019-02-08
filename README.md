# react-context-receiver
Yet another withContext utility for React Context

* Simplify your Consumer component
* Without wasting your `props`
* `React.forwardRef`-like API
* TypeScript native

## Install
```sh
npm install react-context-receiver
```


## API
```ts
function getContextReceiver(Context): ContextReceiver
type ContextReceiver = (component: ((Props, ContextValue) => Element)) => FunctionalComponent<Props>
```

## Example
```js
const SomeContext = React.createContext();
const withSomeContext = getContextReceiver(SomeContext);

const Inspector = withSomeContext((props, context) => {
    if (!context) {
        return <span>{props.undefinedMessage}</span>
    }

    return <div>
        <span>something: {context.something}</span>
    </div>
});

const App = () => {
    <SomeContext.Provider>
        <Inspector undefinedMessage="Context is not initialized" />
    </SomeContext.Provider>
};
```
