import * as React from "react"
import { getContextReceiver } from "../src"

/**
 * Create Context & ContextReceiver
 */
interface SomeContext {
    something: string
}

const SomeContext = React.createContext<SomeContext | undefined>(undefined)

const receiveSomeContext = getContextReceiver(SomeContext)

/**
 * Use Context & ContextReceiver
 */
interface InspectorProps {
    undefinedMessage: string
}

const Inspector = receiveSomeContext((props: InspectorProps, context) => {
    if (!context) {
        return <span>{props.undefinedMessage}</span>
    }

    return <div>
        <span>something: {context.something}</span>
    </div>
})

const App = () => {
    <SomeContext.Provider value={undefined}>
        <Inspector undefinedMessage="Context is not initialized" />
    </SomeContext.Provider>
}
