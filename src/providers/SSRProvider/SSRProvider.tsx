import React, { ReactNode, useContext, useLayoutEffect, useState } from 'react'

interface SSRContextValue {
    isSSR: boolean
}

const defaultContext: SSRContextValue = {
    isSSR: false
}

const SSRContext = React.createContext<SSRContextValue>(defaultContext)

export interface SSRProviderProps {
    children: ReactNode
}

export function SSRProvider(props: SSRProviderProps): JSX.Element {
    let [isSSR, setIsSSR] = useState(true)

    let value: SSRContextValue = {
        isSSR,
    }

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setIsSSR(false)
        }
    }, [])

    return (
        <SSRContext.Provider value={value}>
            {props.children}
        </SSRContext.Provider>
    );
}

export function useIsSSR(): boolean {
    let cur = useContext(SSRContext)

    return cur.isSSR;
}