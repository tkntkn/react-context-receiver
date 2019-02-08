const React = require("react")
const { getContextReceiver } = require("../src")

/**
 * Create Context & ContextReceiver
 */
const SomeContext = React.createContext()

const receiveSomeContext = getContextReceiver(SomeContext)

/**
 * Use Context & ContextReceiver
 */
const Inspector = receiveSomeContext((props, context) => {
    if (!context) {
        return <span>{props.undefinedMessage}</span>
    }

    return <div>
        <span>something: {context.something}</span>
    </div>
})

const App = () => {
    <SomeContext.Provider>
        <Inspector undefinedMessage="Context is not initialized" />
    </SomeContext.Provider>
}
