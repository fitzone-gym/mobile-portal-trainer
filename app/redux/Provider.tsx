import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';

import {pstore } from "./store"
import store from "./store"
import React from "react";

type reduxProviderPropType = {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: reduxProviderPropType) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={pstore}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider